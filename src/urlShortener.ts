export function shortenUrl(href: string): string | null {
  console.log("shortenUrl() called");

  console.log("Current URL:", href);

  const url = URL.parse(href);
  if (!url) {
    console.error("Invalid URL");
    return null;
  }

  const re = /(\/dp\/[^\/]+\/)/;
  const m = url.pathname.match(re);
  if (!m) {
    console.error("url is not matched");
    return null;
  }

  const shortUrl = url.origin + m[0];
  return shortUrl;
}
