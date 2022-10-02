export default function DateOrder(cards) {
  const createdArray = cards.sort(function (a, b) {
    var dateA = new Date(a.date_prop).getTime();
    var dateB = new Date(b.date_prop).getTime();
    return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
  });
  return createdArray;
}
