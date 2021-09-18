export const ITEMS_PER_PAGE = 6;

export default function PaginateFunc(
  array: object[],
  page_size: number = ITEMS_PER_PAGE,
  page_number: number,
) {
  console.log(array);
  console.log((page_number - 1) * page_size);
  console.log(page_number * page_size);
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
