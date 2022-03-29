export function getUrls(tokenId: string, image: string | undefined, randomSrc: string) {
    const  isNoImage = image === "" || image === undefined
    const isAnimation = image?.endsWith('.gif')

    const previewSrc:string =
        isNoImage
            ? randomSrc
            : "img/preview/" + tokenId + '.webp'
    const originalSrc:string =
        isNoImage
            ? randomSrc
            : "img/original/" + image
    const animationSrc:string =
        isNoImage
            ? randomSrc
            : "img/animation/" + tokenId + '.webp'

    return {
        previewSrc,
        originalSrc,
        animationSrc,
        isAnimation,
    };
}

