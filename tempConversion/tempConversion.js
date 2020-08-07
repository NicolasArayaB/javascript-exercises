const ftoc = function(f) {
  let c = (f - 32) * 5/9;
  if (Number.isInteger(c)) {
    return c;
  }
  else {
    return Number(c.toFixed(1));
  }
}

const ctof = function(c) {
  let f = c * 9 / 5 + 32;
  if (Number.isInteger(f)) {
    return (f);
  }
  else {
    return Number(f.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}
