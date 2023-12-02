// TODO: write your code here
// import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));

// ==============================================
 class ErrorRepository {              //создаём класс
  constructor() {                     //конструктор
    // Инициализируем Map для хранения кодов ошибок и их описаний
    this.errors = new Map();
  }
  // Метод для добавления новой ошибки и её описания
  addError(code, description) {
    this.errors.set(code, description);
  }

  translate(code) {// Метод для получения описания ошибки по её коду
    const description = this.errors.get(code);//присваеваем полученный код
    if (description !== undefined) {          //если код определён
      // console.log(description)
      return description;                     //возвращаем код
    } else {                                  //если не определён
      const error = 'Unknown error';
      // console.log(error)
      return error;                           //возвращаем ошибку
    }
  }
}

const errorRepo = new ErrorRepository();

// Добавляем ошибки
errorRepo.addError(404, 'Not Found');
errorRepo.addError(500, 'Internal Server Error');

// Получаем описание ошибки по её коду
console.log(errorRepo.translate(404)); // Выведет: Not Found
console.log(errorRepo.translate(500)); // Выведет: Internal Server Error
console.log(errorRepo.translate(403)); // Выведет: Unknown error
