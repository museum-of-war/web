import { MutableRefObject, useRef } from 'react';
import { useUpdate } from './useUpdate';

export type Status =
  | {
      loaded: false;
      progress: number;
    }
  | {
      loaded: true;
      blob: Blob;
    };

export type Priority = 'high' | 'low' | 'auto';
type ProgressTracker = () => void;

function removeItem<T>(items: T[], item: T): void {
  const index = items.indexOf(item);
  if (index >= 0) {
    items.splice(index, 1);
  }
}

class Fetcher {
  static readonly BACKUP_SIZE = 1000 ** 3;
  static statuses: {
    [url: string]: {
      status: Status;
      subscribers: ProgressTracker[];
    };
  } = {};

  url: string;
  priority: Priority;
  onStatusChanged: ProgressTracker;
  isAborted: boolean;

  constructor(
    url: string,
    priority: Priority,
    onStatusChanged: ProgressTracker,
  ) {
    this.url = url;
    this.priority = priority;
    this.onStatusChanged = onStatusChanged;
    this.isAborted = false;

    if (Fetcher.statuses.hasOwnProperty(url)) {
      Fetcher.statuses[url]!.subscribers.push(this.onStatusChanged);
    } else {
      Fetcher.statuses[url] = {
        status: {
          loaded: false,
          progress: 0,
        },
        subscribers: [this.onStatusChanged],
      };
      this.doFetch().then();
    }
  }

  getContentLength(response: Response): number {
    const HEADER = 'content-length';
    const length = response.headers.get(HEADER);
    let parsedLength;
    if (length !== null && !isNaN((parsedLength = Number(length)))) {
      return parsedLength;
    } else {
      console.error(`The '${HEADER}' header is not set on ${response.url}`);
      return Fetcher.BACKUP_SIZE;
    }
  }

  getStatus(): Status {
    return Fetcher.statuses[this.url]!.status;
  }

  updateStatus(status: Status): void {
    const data = Fetcher.statuses[this.url]!;
    data.status = status;
    for (const subscriber of data.subscribers) {
      subscriber();
    }
  }

  async doFetch() {
    const initialResponse = await fetch(this.url, {
      priority: this.priority,
    } as any); // At the time of writing, browser support for `priority` is limited; typing is unsupported
    const body = initialResponse.body;

    if (body !== null) {
      const contentLength = this.getContentLength(initialResponse);
      let loaded = 0;
      const response = new Response(
        new ReadableStream({
          start: async (controller) => {
            const reader = body.getReader();
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                break;
              }
              loaded += value.byteLength;
              this.updateStatus({
                loaded: false,
                progress: loaded / contentLength,
              });
              controller.enqueue(value);
            }
            controller.close();
          },
        }),
      );
      const blob = await response.blob();
      this.updateStatus({
        loaded: true,
        blob,
      });
    } else {
      console.error(`${this.url} returned null body`);
    }
  }

  abort() {
    if (!this.isAborted) {
      this.isAborted = true;
      removeItem(Fetcher.statuses[this.url]!.subscribers, this.onStatusChanged);
    }
  }
}

function abortFetcherIfOutdated(
  fetcher: MutableRefObject<Fetcher | null>,
  url: string | null,
): void {
  if (
    fetcher.current !== null &&
    (url === null || fetcher.current!.url !== url)
  ) {
    fetcher.current!.abort();
  }
}

function reinitializeFetcherIfOutdated(
  fetcher: MutableRefObject<Fetcher | null>,
  url: string | null,
  priority: Priority,
  onProgress: ProgressTracker,
): void {
  if (url === null) {
    if (fetcher.current !== null) {
      fetcher.current = null;
    }
  } else {
    if (fetcher.current === null || fetcher.current!.url !== url) {
      fetcher.current = new Fetcher(url, priority, onProgress);
    }
  }
}

export function useDownloadProgress(
  url: string | null,
  priority: Priority = 'auto',
): Status | null {
  const fetcher = useRef<Fetcher | null>(null);
  const update = useUpdate();
  abortFetcherIfOutdated(fetcher, url);
  reinitializeFetcherIfOutdated(fetcher, url, priority, update);
  return fetcher.current !== null ? fetcher.current?.getStatus() : null;
}
