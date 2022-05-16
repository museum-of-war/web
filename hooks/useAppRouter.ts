import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

type HookReturnType<QueryParams extends any> = ReturnType<typeof useRouter> &
  (
    | { isReady: true; query: QueryParams }
    | { isReady: false; query: Record<keyof QueryParams, undefined> }
  )

export const useAppRouter = <
  QueryParams extends ParsedUrlQuery = ParsedUrlQuery,
>(): HookReturnType<QueryParams> => {
  const router = useRouter()

  return { ...router, query: router.query } as HookReturnType<QueryParams>
}
