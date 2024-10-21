import _ from "lodash";

export default function paginate(items, itemsPerPage, currentPage) {
  const startIndex = itemsPerPage * (currentPage - 1);
  return _.slice(items, startIndex, startIndex + itemsPerPage);
}
