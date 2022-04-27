export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const truncateAddress = (address: string, start = 5) => {
  return (
    address.substring(0, start) +
    "..." +
    address.substring(address.length - 4, address.length)
  );
};
