/* Main Component */
export function UrlHomepage(to) {
  return new URL(`${process.env.NEXT_PUBLIC_URL}${to}`);
}
