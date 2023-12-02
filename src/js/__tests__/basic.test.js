import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
//==================================================
import ErrorRepository from '../app';

const errorRepo = new ErrorRepository();
errorRepo.addError(404, 'Not Found');
errorRepo.addError(500, 'Internal Server Error');

test('Translate() должен возвращать правильное описание ошибки', () => {
  expect(errorRepo.translate(404)).toBe('Not Found');
  expect(errorRepo.translate(500)).toBe('Internal Server Error');
});

test('Translate() должен возвращать «Неизвестную ошибку»', () => {
  expect(errorRepo.translate(403)).toBe('Unknown error');
});

test('addError() должен добавить новый код ошибки и описание', () => {
  errorRepo.addError(403, 'Forbidden');
  expect(errorRepo.translate(403)).toBe('Forbidden');
});

