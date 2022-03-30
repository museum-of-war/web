import { useViewPort } from "@hooks/useViewport";

export const useGetClassNameByViewPort = () => {
    const { isMobile, isTablet } = useViewPort();

    function getClassNameByViewPort(
      mobileCN: string,
      tabletCN: string = "",
      desktopCN: string = ""
    ): string {
        if (isMobile) {
            return mobileCN;
        } else if (isTablet) {
            return tabletCN;
        } else {
            return desktopCN;
        }
    }

    return { getClassName: getClassNameByViewPort }
}
