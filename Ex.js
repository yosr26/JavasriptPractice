let resolutionEq = (a, b, c) => {
  if (a !== 0) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
      console.log("résolution impossible");
    } else if (delta === 0) {
      let x = (-b / 2) * a;
      console.log(`la racine de l'equation est ${x}`);
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log(`les racines de l'equation sont ${x1} et ${x2}`);
    }
  }
};
resolutionEq(2, 9, 9);
