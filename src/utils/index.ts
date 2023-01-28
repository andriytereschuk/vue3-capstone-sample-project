export function getObjectWithNotEmptyValues(inputObject: object) {
  return Object.entries(inputObject).reduce((acc, [key, value]) => {
    return value
      ? {
          ...acc,
          [key]: value
        }
      : acc
  }, {})
}
