import Head from 'next/head';

type PageHeadProps = {
    title: string;
};

function PageHead({
  title
}: PageHeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={title}
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default PageHead;
