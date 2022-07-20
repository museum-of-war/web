export const TokenidFormatter = (tokenId: string): string => {
  return parseInt(tokenId) < 10
    ? "#000" + tokenId
    : parseInt(tokenId) < 100
      ? "#00" + tokenId
      : parseInt(tokenId) < 1000
        ? "#0" + tokenId
        : "#" + tokenId;
}