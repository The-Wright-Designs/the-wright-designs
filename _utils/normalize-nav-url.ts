export const normalizeNavUrl = (url: string) =>
  url.startsWith("/") ? url : `/#${url}`;
