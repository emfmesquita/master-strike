export const toInteger = value => {
  const integer = Number.parseInt(value);
  return Number.isNaN(integer) ? -1 : integer;
}

export const toIntArray = strValues => {
  if(!strValues) return [];
  const tokens = strValues.split(",");
  return tokens.map(token => toInteger(token));
}

export const toIntPair = (strValues, min, max) => {
  const intValues = toIntArray(strValues);
  const safe = (value) => value < min ? min : (value > max ? max : value);
  const lowerValue = intValues.length < 1 ? min : safe(intValues[0]);
  const higherValue = intValues.length < 2 ? max : safe(intValues[1]);
  return [lowerValue, higherValue];
}