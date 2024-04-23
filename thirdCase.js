let max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
