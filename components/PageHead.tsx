import { Thing, WithContext } from 'schema-dts';
import Head from 'next/head';

type PageHeadProps = {
    title: string;
    data?: WithContext<Thing> | WithContext<Thing>[];
};

function items(data?: WithContext<Thing> | WithContext<Thing>[]): WithContext<Thing>[] {
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
  data,
}: PageHeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={title} />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            { items(data).map((item, index) => (
                <script type="application/ld+json" key={index}>
                    { JSON.stringify(item) }
                </script>
            )) }
        </Head>
    );
}

export default PageHead;
