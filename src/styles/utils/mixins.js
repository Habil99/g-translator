const toRem = (val) => {
  return (val / 16) + "rem";
}

export const rem = (value) => {
  if (typeof value !== "object") {
    return toRem(value);
  } else {
    return value.map(v => {
      return toRem(v) + " ";
    })
  }
}
