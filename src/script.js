import { data as emoji } from "./emoji.js";  //импортируем базу данных
const inputNode = document.querySelector(".input");  //задаем переменную в js для инпута
const h1Node = document.querySelector("h1");  //задаем переменную для главного заголовка
const containerNode = document.querySelector(".container");  //задаем переменную для контейнера

h1Node.addEventListener("click", refresh);//создаем событие для главного заголовка при нажатии на него - вызывается функция обновления страницы
function refresh() {   //создаем функцию для обновления страницы
  location.reload();   //задаем обновление страницы
}

renderCard(emoji); //отображаем базу данных

function renderCard(data) {  //функция перебора карточек
  data.forEach((el) => {     //перебрать весь массив
    createCard(el);          //в результате перебора вызывать функцию создания карточек
  });
}

function createCard (obj) {
  //создаем функцию создания карточек
  const containerNode = document.querySelector(".container"); //обращаемся к контейнеру с карточками
  const card = document.createElement("article"); //создаем карточку
  card.className = "article"; //присваиваем ей класс
  const h2Node = document.createElement("h2"); //создаем h2 в карточке
  h2Node.className = "title"; //присваиваем ему класс
  h2Node.innerHTML = `${obj.symbol}`; //указываем, что брать заголовок из ключа symbol каждого объекта в массиве
  const h3Node = document.createElement("h3"); //создаем h3 в карточке
  h3Node.className = "title__second"; //присваиваем ему класс
  h3Node.innerHTML = `${obj.title}`; //указываем, что брать заголовок из ключа title каждого объекта в массиве
  const textNode = document.createElement("p"); //создаем p в карточке
  textNode.className = "content"; //присваиваем ему класс
  filterKey(obj); //вызываем функцию, которая убирает дубли
  // let arr = obj.keywords.split(" "); //мой работающий код убирает дубликаты
  // let arrWithoutDobbles = Array.from(new Set(arr)).join(" ");
  textNode.innerHTML = `${obj.filter}`; //указываем, что брать текст из отфильтрованного ключа
  containerNode.append(card); //поместить карточки в конце контейнера
  card.append(h2Node, h3Node, textNode); //поместить в карточку заголовки h2, h3 и текст в конце контейнера поочередно
};

function filterKey(obj) {  //создаем функцию, чтобы убрать дубли
  let keywords = obj.keywords.split(" "); //создаем массив из содержимого ключа keywords
  let filter = keywords.filter((el, i) => keywords.indexOf(el) === i); //?
  obj.filter = filter.join(" "); //возвращаем массив обратно в строку
}

function search(obj, string) {  //создаем функцию поиска с двумя параметрами
  string = string.trim().toLowerCase(); //в запросе пользователя убираем лишние пробелы и приводим к нижнему регистру
  let find = obj.filter(
    (el) => string === el.title.toLowerCase() || el.filter.includes(string) //задаем фильтр на наличие запроса пользователя в ключах title или ?
  );
  containerNode.innerHTML = ""; //?
  return renderCard(find); //возвращаем результат функции renderCard от переменной find
}

inputNode.onkeypress = function(event) { //создаем событие при нажатии на инпут
  let button = event.which || event.keyCode//?
  if (button == 13) {   //клавиша enter
    search(emoji, inputNode.value);
  }
}





