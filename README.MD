# TelegramWeb-ChatMoveToRight
Расширение для chromium браузеров которое переместит ваш чат вправо

### Установка

1. Заходим: [chrome://extensions](chrome://extensions "chrome://extensions")
2. Нажимаем "Загрузить распакованное расширение"

    [![](https://i.ibb.co/ydvyW1F/image.png)](https://i.ibb.co/ydvyW1F/image.png)

3. Идем в корень скаченного репозитория и выбираем папку dist

    [![](https://i.ibb.co/B4Ck6Wp/image.png)](https://i.ibb.co/B4Ck6Wp/image.png)
3. Заходим в [https://web.telegram.org/z](https://web.telegram.org/z "https://web.telegram.org/z")

4.  Радуемся!

    [![](https://i.ibb.co/2Wt7csG/image.png)](https://i.ibb.co/2Wt7csG/image.png)



### Как это работает

При обновлении страницы на каждый элемент в листе диалогов вешается обработчик клика
При клике и открытии чата у блока с диалогами меняется css свойство margin на 0, для блока набора сообщение меняется параметр align Items на flex-start

### Стоит ли это использовать

Только если вам до жути мешает центрированное положение чата, проект был написан на скорую руку, потому есть баги, артефакты, и прочие приколы