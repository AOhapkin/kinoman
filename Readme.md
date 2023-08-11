# Проект Киноман

``npm i``

``npm start``

## О проекте
«Киноман» — сервис для фанатов большого кино. Подробная информация о горячих новинках кино, возможность выбрать и сформировать собственный список фильмов к просмотру, обсуждение кинофильмов и многое другое. «Киноман» — поможет провести время интересно.

#### 1. Описание функциональности

##### 1.1 Общий контейнер
В правом верхнем углу шапки отображается звание пользователя. Звание зависит от количества просмотренных фильмов, вычисляется при загрузке приложения и может изменяться в ходе использования пользователем приложения (при добавлении или удалении фильмов из просмотренных).

0 — блок со званием не отображается;
от 1 до 10 — novice;
от 11 до 20 — fan;
от 21 и выше — movie buff.
В правом углу подвала выводится информация о количестве фильмов в сервисе. Информация обновляется один раз — при загрузке приложения.

##### 1.2 Фильмы
После загрузки приложения в списке отображается не более 5 карточек фильмов.

Показ оставшихся фильмов выполняется нажатием на кнопку «Show more». При нажатии показываются очередные 5 фильмов или оставшиеся фильмы, если их количество меньше 5.

После показа всех карточек с фильмами, кнопка «Show more» скрывается.

Любое изменение фильтра или сортировки сбрасывает счётчик показанных фильмов и отсчёт начинается заново.

В случае отсутствия фильмов вместо списка отображается текст: «There are no movies in our database».

##### 1.3 Карточка фильма
Карточки фильмов представлены в двух вариантах: стандартный (в списке фильмов) и расширенный (отдельный попап с описанием фильма).

В стандартном варианте карточка с фильмом содержит следующую информацию:

Постер (картинка);
Название фильма;
Рейтинг;
Год релиза;
Продолжительность в формате часы минуты (например «1h 36m»);
Жанр;
Краткое описание (не более 140 символов);
Количество комментариев;
Если описание фильма больше 140 символов, то в карточке отображается 139 символов описания и знак многоточие (…).

В карточке фильма отображается блок с кнопками управления:

«Add to watchlist» — добавляет/удаляет фильм из списка к просмотру;
«Already watched» — помечает фильм как просмотренный/непросмотренный;
«Add to favorites» — добавляет/удаляет фильм в избранное.
Клик по карточке фильма (за исключением кликов по кнопкам управления) открывает попап с подробной информацией о фильме;

Попап содержит расширенную информацию о фильме:

Полноразмерная обложка;
Название фильма;
Оригинальное название фильма;
Рейтинг;
Режиссёр;
Сценаристы;
Актёрский состав;
Дата и год релиза в формате день месяц год (например: «01 April 1995»);
Продолжительность в формате часы минуты (например «1h 36m»);
Страна;
Жанр (ы);
Полное описание;
Возрастной рейтинг;
Фильм может относиться к нескольким жанрам. Если фильм относится к нескольким жанрам, выводите «Genres», иначе «Genre».

В попапе отображается блок с кнопками управления:

«Add to watchlist» — добавляет/удаляет фильм из списка к просмотру;
«Already watched» — помечает фильм как просмотренный/непросмотренный;
«Add to favorites» — добавляет/удаляет фильм в избранное.
В заголовке «Comments» отображается количество комментариев к фильму. Например: «Comments 8».

Любое изменение информации о фильме в попапе отображается в списке фильмов мгновенно. При изменении информации попап закрывается самовольно.

Попап можно закрыть нажатием на кнопку закрытия в правом верхнем углу (крестик) или нажатием на клавиатуре кнопки «Esc». При закрытии попап удаляется из DOM.

Одновременно может быть открыт только один попап. При открытии нового попапа прежний закрывается, например при клике на другую карточку при открытом попапе. Несохранённые изменения (неотправленный комментарий) пропадают.

##### 1.4 Комментарии
Список комментариев к фильму и форма добавления нового комментария доступны в попапе. Комментарии загружаются при открытии попапа.

Каждый комментарий состоит из:

Текст комментария;
Эмоция;
Автор комментария;
Дата комментария;
Кнопка удаления.
Дата комментария отображается в формате год/месяц/день часы:минуты (например «2019/12/31 23:59»).

Для добавления нового комментария пользователь заполняет текст комментария и выбирает эмоцию (один вариант из: smile, sleeping, puke, angry). Имя автора формируется случайным образом на сервере, с клиента оно не передаётся. Дата также приходит с сервера.

Введённые пользователем данные экранируются.

Отправка формы осуществляется нажатием комбинации клавиш Ctrl/Command + Enter.

Пользователь может удалить произвольный комментарий. Комментарий удаляется нажатием на кнопку «Delete», расположенную в блоке с комментарием.

##### 1.5 Рейтинг
Пользователь никак не может влиять на оценку фильма.
Рейтинг фильма высчитывается на сервере.
##### 1.6 Фильтры
В приложении предусмотрено несколько фильтров:

«All movies» — все фильмы;
«Watchlist» — фильмы, добавленные в список к просмотру (Watchlist);
«History» — просмотренные фильмы (Already watched);
«Favorites» — фильмы, добавленные в избранное (Favorites).
Количество фильмов, соответствующих фильтру отображается справа в элементе с фильтром. Для фильтра «All movies» количество не отображается.

Информация о количестве фильмов, соответствующих каждому фильтру доступна сразу, без необходимости применения фильтра.

Фильтр должен переключаться при клике и на надпись, и на счётчик.

Если фильтру соответствует больше 5 фильмов, то в списке фильмов по этому фильтру отображается первые 5 фильмов, а остальные отображаются по нажатию на кнопку «Show more», как и в списке фильмов «All movies».

Если список фильмов был отфильтрован, и какой-то из фильмов перестал соответствовать критериям фильтрации (например пользователь убрал отметку «Add to favorites» в списке по фильтру «Favorites»), карточка этого фильма должна быть моментально удалена из списка. Это удаление карточки не должно каким-либо образом ломать логику кнопки «Show more» или нарушать порядок сортировки.

Если в отфильтрованном списке были удалены все карточки, вместо списка отображается соответствующий текст. Например, если пользователь убрал отметки «Add to favorites» во всех фильмах в списке по фильтру «Favorites», должна появиться заглушка «There are no favorite movies now». Все фразы приведены в файле в директории с разметкой.

##### 1.7 Сортировка
Пользователю доступна возможность сортировки фильмов по дате выхода (клик по ссылке «Sort by date») и рейтингу (клик по ссылке «Sort by rating»). Сортировка работает в одном направлении — от максимального к минимальному: при сортировке по дате выхода в начале списка будут самые новые фильмы, при сортировке по рейтингу — с самым высоким рейтингом.

Для отмены сортировки и возвращению к исходному порядку пользователь кликает по ссылке «Sort by default».

При смене фильтра сортировка сбрасывается на состояние «Sort by default».

Сортировка не должна отображаться, если нет фильмов для сортировки.
