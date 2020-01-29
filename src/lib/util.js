export const randomId = (prefix = "XX") =>
  `${prefix}${Math.random()
    .toString(36)
    .substring(2, 8)}`;

export const formatDate = date => {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthIndex + 1}/${year}`;
};
