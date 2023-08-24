export class BadRequestError extends Error {
  statusCode: number
  data: { error: Error }

  constructor(error: Error) {
    super(error.message)

    this.data = { error }
    this.statusCode = 400
  }
}