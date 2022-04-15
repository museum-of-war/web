import type { NextPage } from "next";
import { SharedProps } from "@components/wrapper";
import { useAppRouter } from "@hooks/useAppRouter";
import Head from "next/head";
import UpgradeYourNFT from "@sections/UpgradeYourNFT/UpgradeYourNFT";

const TokensPage: NextPage<SharedProps> = (props) => {
    const { push, query } = useAppRouter();
    if (!props.signerAddress) {
        push("/");
    }
    const nftTitle = query.nftTitle?.toString();
    return (
        <>
            <Head>
                <title>Upgrade Your NFT - Meta History: Museum of War</title>
                <meta
                    name="description"
                    content="Upgrade Your NFT - Meta History: Museum of War"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <UpgradeYourNFT nftTitle={nftTitle} signerAddress={props.signerAddress} />
        </>
    );
};

export default TokensPage;