/* NEXT.JS */
import { useRouter } from 'next/router';

export default function GetCurrentPage() {
  // Router
  const router = useRouter();
  const query = router?.query;
  let currentPage = parseInt(query?.page);
  if (!currentPage) currentPage = 1;
  return currentPage;
}
