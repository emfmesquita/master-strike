
export const randomNumber = (min, max) => {
  const delta = max - min;
  const rand = Math.floor(delta * Math.random());
  return min + rand;
}

export const randomArray = (min, max, size) => {
  const result = [];
  if(max - min <= size) {
    for (let idx = min; idx < max; idx++) {
      result.push(idx);      
    }
    return result;
  }
  while (result.length < size) {
    const rand = randomNumber(min, max);
    if(result.indexOf(rand) < 0) result.push(rand);
  }
  return result;
}