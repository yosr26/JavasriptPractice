let PPCM = (a, b) => {
  if (b > a) {
    let i = 1;
    while ((b * i) % a !== 0) {
      i++;
    }
    return b * i;
  } else {
    let i = 1;
    while ((a * i) % b !== 0) {
      i++;
    }
    return a * i;
  }
};

console.log(PPCM(19, 17));
