export type ErrorBody = {
  statusCode: number,
  error: string,
  message: string[]
}

export type ErrorObject = {
  hasError:  boolean,
  message: string | null,
}