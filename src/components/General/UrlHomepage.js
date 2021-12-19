/* Main Component */
export default function UrlHomepage(to) {
  return new URL(`${process.env.NEXT_PUBLIC_URL}${to}`);
}
