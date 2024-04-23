let max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

console.log(max([3, 6, 4, 7, 4, 3]));
