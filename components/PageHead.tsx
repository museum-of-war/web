import { Thing, WithContext } from 'schema-dts';
import Head from 'next/head';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';

type PageHeadProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  data?: WithContext<Thing> | WithContext<Thing>[];
};

function items(
  data?: WithContext<Thing> | WithContext<Thing>[],
): WithContext<Thing>[] {
  if (Array.isArray(data)) {
    return data;
  } else if (data) {
    return [data];
  } else {
    return [];
  }
}

function PageHead({
  title,
  subtitle,
  description,
  image,
  data,
}: PageHeadProps) {
  const url = useAbsoluteUrl();
  const extendedTitle = subtitle ? `${title} - ${subtitle}` : title;

  description = description ?? extendedTitle;
  image = url(image || '/img/logo-icon.svg');
  return (
    <Head>
      <title>{extendedTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || url('/img/logo-icon.svg')} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {items(data).map((item, index) => (
        <script
          type="application/ld+json"
          key={index}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        ></script>
      ))}
    </Head>
  );
}

export default PageHead;
