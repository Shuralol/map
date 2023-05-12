export class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, 'Not Found'],
      [500, 'Internal Server Error'],
      [403, 'Forbidden'],
    ]);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : 'Unknown error';
  }
}