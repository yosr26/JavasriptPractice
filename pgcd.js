let Divisors = (a) => {
  let tabDiv = [];
  for (let i = 1; i <Math.sqrt(x)+1; i++) {
    if (a % i === 0) {
      tabDiv.push(i);
    }
  }
  tabDiv.push(a);
  return tabDiv;
};
let CommonDiv = (a, b) => {
  let common = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        common.push(a[i]);
      }
    }
  }
  return common;
};
let PGCD = (a, b) => {
  let T = CommonDiv(Divisors(25), Divisors(15));
  return T[T.length - 1];
};
console.log(Divisors(150));
console.log(CommonDiv(Divisors(15), Divisors(25)));
console.log(PGCD(15, 25));
