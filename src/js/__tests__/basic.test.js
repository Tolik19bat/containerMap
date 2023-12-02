import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
//==================================================
import ErrorRepository from '../app';//импорт функции

const errorRepo = new ErrorRepository();//присваеваем конструктор
errorRepo.addError(404, 'Not Found');//добавляем ошибку и описание
errorRepo.addError(500, 'Internal Server Error');//добавляем ошибку и описание

test('Translate() должен возвращать правильное описание ошибки', () => {//тест
  expect(errorRepo.translate(404)).toBe('Not Found');
  expect(errorRepo.translate(500)).toBe('Internal Server Error');
});

test('Translate() должен возвращать «Неизвестную ошибку»', () => {//тест
  expect(errorRepo.translate(403)).toBe('Unknown error');
});

test('addError() должен добавить новый код ошибки и описание', () => {//тест
  errorRepo.addError(403, 'Forbidden');
  expect(errorRepo.translate(403)).toBe('Forbidden');
});

