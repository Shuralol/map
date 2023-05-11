import {ErrorRepository} from "../character.js"
describe('ErrorRepository', () => {
  let errorRepository;

  beforeEach(() => {
    errorRepository = new ErrorRepository();
  });

  it('should add error to repository', () => {
    const code = 404;
    const message = 'Not found';
    errorRepository.addError(code, message);
    expect(errorRepository.errors.size).toBe(1);
    expect(errorRepository.errors.get(code)).toBe(message);
  });

  it('should translate error code to message', () => {
    const code = 404;
    const message = 'Not found';
    errorRepository.addError(code, message);
    expect(errorRepository.translate(code)).toBe(message);
  });

  it('should return `Unknown error` if code is not in repository', () => {
    expect(errorRepository.translate(404)).toBe('Unknown error');
  });
});