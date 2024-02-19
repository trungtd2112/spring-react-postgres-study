export const buildErrorMsg = (fieldName: string, message: string, ...rest: any[]) => {
  return fieldName + message + rest;
}