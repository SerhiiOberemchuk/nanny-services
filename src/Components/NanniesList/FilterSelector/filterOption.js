export const sortFunctions = {
  sortByNameAsc: (array) =>
    [...array].sort((a, b) => a.name.localeCompare(b.name)),
  sortByNameDesc: (array) =>
    [...array].sort((a, b) => b.name.localeCompare(a.name)),
  sortByPriceLess10: (array) =>
    array.filter((item) => item.price_per_hour <= 10),
  sortByPriceGreater10: (array) =>
    array.filter((item) => item.price_per_hour > 10),
  sortByPopularityAsc: (array) =>
    [...array].sort((a, b) => b.rating - a.rating),
  sortByPopularityDesc: (array) =>
    [...array].sort((a, b) => a.rating - b.rating),
};
export const options = [
  { value: "sortByNameAsc", label: "A to Z" },
  { value: "sortByNameDesc", label: "Z to A" },
  { value: "sortByPriceLess10", label: "Less than 10$" },
  { value: "sortByPriceGreater10", label: "Greater than 10$" },
  { value: "sortByPopularityAsc", label: "Popular" },
  { value: "sortByPopularityDesc", label: "Not popular" },
  { value: null, label: "Show all" },
];
