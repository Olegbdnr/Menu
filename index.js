let main = document.querySelector(".main");
let classicMenuButton = document.getElementById("classic");
let iceMenuButton = document.getElementById("iceCoffee");
let coffeeList = document.querySelector(".coffee-list");
let bubbleTeaMenuButton = document.getElementById("bubbleTea");
let authorTeaMenuButton = document.getElementById("authorTea");
let authorCoffeeMenuButton = document.getElementById("authorCoffee");
const menuButtons = [classicMenuButton, iceMenuButton, bubbleTeaMenuButton];

const classicHtml = `
    <ul class="coffee-list">
            <li class="coffee-item">
                <div class="tittle">Американо</div>
                <ul class="ingredients">
                    <li class="ingredient">Кава 30/60/90</li>
                    <li class="ingredient">Вода 70/140/210</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Американо з молоком</div>
                <ul class="ingredients">
                    <li class="ingredient">Кава 30/60/90</li>
                    <li class="ingredient">Молоко 30/60/90</li>
                    <li class="ingredient">Вода 70/140/210</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Лате</div>
                <ul class="ingredients">
                    <li class="ingredient">Кава 25/30/45</li>
                    <li class="ingredient">Молоко 150/230/300</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Капучино</div>
                <ul class="ingredients">
                    <li class="ingredient">Кава 30/60/60</li>
                    <li class="ingredient">Молоко 150/200/270</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Флет вайт</div>
                <ul class="ingredients">
                    <li class="ingredient">Кава 60</li>
                    <li class="ingredient">Молоко 110</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Раф кава</div>
                <ul class="ingredients">
                    <li class="ingredient">Кава 30/60/60</li>
                    <li class="ingredient">Молоко 100/170/220</li>
                    <li class="ingredient">Вершки 40/55/70</li>
                    <li class="ingredient">Ванільний с 10/15/20</li>
                    <li class="ingredient">Терт шк 3/3/3</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Мокачино</div>
                <ul class="ingredients">
                    <li class="ingredient">Кава 25/30/45</li>
                    <li class="ingredient">Молоко 150/230/300</li>
                    <li class="ingredient">Терт шк 20/25/30</li>
                    <li class="ingredient">Терт шк 3/3/3</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Гар шоколад</div>
                <ul class="ingredients">
                    <li class="ingredient">Терт шк 50/75/100</li>
                    <li class="ingredient">Молоко 150/225/300</li>
                    <li class="ingredient">Терт шк 3/3/3</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Какао</div>
                <ul class="ingredients">
                    <li class="ingredient">Какао 15/21</li>
                    <li class="ingredient">Молоко 150/320</li>
                    <li class="ingredient">Цукор ваг 5/10</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Матча лате</div>
                <ul class="ingredients">
                    <li class="ingredient">Молоко 150/230/300</li>
                    <li class="ingredient">Матча 2/3/4</li>
                    <li class="ingredient">Вода гар 20/30/40</li>
                </ul>
            </li>
        </ul>
`;

const iceMenuHtml = `
    <ul class="coffee-list">
            <li class="coffee-item">
                <div class="tittle">Айс Лате</div>
                <ul class="ingredients">
                    <li class="ingredient">Сироп 10/15</li>
                    <li class="ingredient">Лід 160/200</li>
                    <li class="ingredient">Молоко 160/200</li>
                    <li class="ingredient">Зг молоко 8/10</li>
                    <li class="ingredient">Кава 30/60</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Айс Капучино с к</div>
                <ul class="ingredients">
                    <li class="ingredient">Сироп с к 20/30</li>
                    <li class="ingredient">Лід 130/170</li>
                    <li class="ingredient">Молоко 130/170</li>
                    <li class="ingredient">Вершки 20/30</li>
                    <li class="ingredient">Кава 30/60</li>
                    <li class="ingredient">Кріпси 4/4</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Айс Капучино с к</div>
                <ul class="ingredients">
                    <li class="ingredient">Сироп с к 20/30</li>
                    <li class="ingredient">Лід 130/170</li>
                    <li class="ingredient">Молоко 130/170</li>
                    <li class="ingredient">Вершки 20/30</li>
                    <li class="ingredient">Кава 30/60</li>
                    <li class="ingredient">Кріпси 4/4</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Фрапе</div>
                <ul class="ingredients">
                    <li class="ingredient">Сироп 10/15</li>
                    <li class="ingredient">Лід 70/100</li>
                    <li class="ingredient">Молоко 150/200</li>
                    <li class="ingredient">Кава 30/60</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Айс Американо</div>
                <ul class="ingredients">
                    <li class="ingredient">Лайм 15/20</li>
                    <li class="ingredient">Лимон 20/30</li>
                    <li class="ingredient">Лід 100/130</li>
                    <li class="ingredient">Вода негаз 140/160</li>
                    <li class="ingredient">Кава 60/90</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Кофі Оранж</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 170/200</li>
                    <li class="ingredient">Сік Апельс 170/200</li>
                    <li class="ingredient">Кава 30/60</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Кофі Тонік Лайм</div>
                <ul class="ingredients">
                    <li class="ingredient">Лайм 15/20</li>
                    <li class="ingredient">Лід 100/120</li>
                    <li class="ingredient">Тонік 200/240</li>
                    <li class="ingredient">Кава 30/60</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Айс Матча</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 130/170</li>
                    <li class="ingredient">Молоко 170/200</li>
                    <li class="ingredient">С Кокос 15/20</li>
                    <li class="ingredient">Матча 3/4</li>
                    <li class="ingredient">Гар вода 30/40</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Анчан Оранж</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 160/170</li>
                    <li class="ingredient">Сік Апельс 130/150</li>
                    <li class="ingredient">С Гренадін 15/20</li>
                    <li class="ingredient">вода газ 40/50</li>
                    <li class="ingredient">Матча 1.5/2</li>
                    <li class="ingredient">Гар вода 40/50</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Анчан Оранж</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 160/170</li>
                    <li class="ingredient">Сік Апельс 130/150</li>
                    <li class="ingredient">С Гренадін 15/20</li>
                    <li class="ingredient">вода газ 40/50</li>
                    <li class="ingredient">Матча 1.5/2</li>
                    <li class="ingredient">Гар вода 40/50</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Мохіто</div>
                <ul class="ingredients">
                    <li class="ingredient">Лайм 30/40</li>
                    <li class="ingredient">Мята 4/5</li>
                    <li class="ingredient">Лід 100/130</li>
                    <li class="ingredient">С Амаретто 10/15</li>
                    <li class="ingredient">7 ап 200/260</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Лимонад цитрус</div>
                <ul class="ingredients">
                    <li class="ingredient">Лимон 20/30</li>
                    <li class="ingredient">Апельсин 30/45</li>
                    <li class="ingredient">Лід 100/130</li>
                    <li class="ingredient">Сік Апельс 70/90</li>
                    <li class="ingredient">Вода 130/150</li>
                    <li class="ingredient">Цук сироп 20/30</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Лимонад Бабл гам</div>
                <ul class="ingredients">
                    <li class="ingredient">Лимон 10/20</li>
                    <li class="ingredient">Лайм 15/20</li>
                    <li class="ingredient">Лід 100/130</li>
                    <li class="ingredient">7 ап 200/260</li>
                    <li class="ingredient">С бабл гам 30/40</li>
                    <li class="ingredient">Смородина 4/5</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Лимонад Маракуя</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 150/180</li>
                    <li class="ingredient">Маракуя 50/70</li>
                    <li class="ingredient">Цук сир 30/40</li>
                    <li class="ingredient">Вода 150/180</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Смузі банан полуниця</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 85/110</li>
                    <li class="ingredient">Банан 100/130</li>
                    <li class="ingredient">Полуниця 40/50</li>
                    <li class="ingredient">Рож цук с 30/40</li>
                    <li class="ingredient">Гар вода 85/110</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Мілк бері</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 70/100</li>
                    <li class="ingredient">С Ваніль 15/20</li>
                    <li class="ingredient">Вершки 20/30</li>
                    <li class="ingredient">Малина 20/30</li>
                    <li class="ingredient">Смородина 20/30</li>
                    <li class="ingredient">Молоко 150/200</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Кокт ваніль</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 30/40</li>
                    <li class="ingredient">Цук с 30/40</li>
                    <li class="ingredient">Молоко 200/230</li>
                    <li class="ingredient">Морозиво 70/90</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Кокт банан</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 50/70</li>
                    <li class="ingredient">Цук с 30/40</li>
                    <li class="ingredient">банан 80/100</li>
                    <li class="ingredient">Молоко 100/130</li>
                    <li class="ingredient">Морозиво 50/80</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Кокт ягідний</div>
                <ul class="ingredients">
                    <li class="ingredient">Лід 30/40</li>
                    <li class="ingredient">Рож Цук с 30/40</li>
                    <li class="ingredient">Рож Цук с 150/180</li>
                    <li class="ingredient">Мікс ягід 50/70</li>
                    <li class="ingredient">Морозиво 50/70</li>
                </ul>
            </li>
    </ul>
`;

const bubbleTeaMenuHtml = `
    <ul class="coffee-list">
            <li class="coffee-item">
                <div class="tittle">Тай Ті</div>
                <ul class="ingredients">
                    <li class="ingredient">Бабл 50</li>
                    <li class="ingredient">Лід 150</li>
                    <li class="ingredient">С гренадін 20</li>
                    <li class="ingredient">Молоко 50</li>
                    <li class="ingredient">Вершки 30</li>
                    <li class="ingredient">Чай згт 150</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Сол Кам Ті</div>
                <ul class="ingredients">
                    <li class="ingredient">Бабл 50</li>
                    <li class="ingredient">Лід 150</li>
                    <li class="ingredient">С солона к 20</li>
                    <li class="ingredient">Молоко 50</li>
                    <li class="ingredient">Вершки 30</li>
                    <li class="ingredient">Чай згт 150</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Блек ТІ</div>
                <ul class="ingredients">
                    <li class="ingredient">Бабл 50</li>
                    <li class="ingredient">Лід 150</li>
                    <li class="ingredient">С Кокос 20</li>
                    <li class="ingredient">Чай згт 150</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Оушен</div>
                <ul class="ingredients">
                    <li class="ingredient">Бабл 50</li>
                    <li class="ingredient">Лід 150</li>
                    <li class="ingredient">С Блю Курасао 20</li>
                    <li class="ingredient">С Ананас 100</li>
                    <li class="ingredient">7 ап 150</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Оранж</div>
                <ul class="ingredients">
                    <li class="ingredient">Бабл 50</li>
                    <li class="ingredient">Лід 150</li>
                    <li class="ingredient">С Амаретто 20</li>
                    <li class="ingredient">С Апельсин 100</li>
                    <li class="ingredient">Тонік 150</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Бабл Гам</div>
                <ul class="ingredients">
                    <li class="ingredient">Бабл 50</li>
                    <li class="ingredient">Лід 150</li>
                    <li class="ingredient">С Бабл Гам 20</li>
                    <li class="ingredient">С Ананас 100</li>
                    <li class="ingredient">7 ап 150</li>
                </ul>
            </li>
    </ul>
`;

const authorTeaMenuHtml = `
    <ul class="coffee-list">
            <li class="coffee-item">
                <div class="tittle">Обліпиховий</div>
                <ul class="ingredients">
                    <li class="ingredient">Заготовка облп 50/80</li>
                    <li class="ingredient">Кориця мел 0.01</li>
                    <li class="ingredient">Аніс 1</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Фруктовий диско</div>
                <ul class="ingredients">
                    <li class="ingredient">Чай нахаб фрукт 1</li>
                    <li class="ingredient">Апельсин 15/30</li>
                    <li class="ingredient">Лимон 20/30</li>
                    <li class="ingredient">Малина 20/30</li>
                    <li class="ingredient">Мята 2/3</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Апероль</div>
                <ul class="ingredients">
                    <li class="ingredient">Апероль 20/30</li>
                    <li class="ingredient">Чай нахаб фрукт 1</li>
                    <li class="ingredient">Апельсин 30/45</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Апероль</div>
                <ul class="ingredients">
                    <li class="ingredient">Мед 20/30</li>
                    <li class="ingredient">Чай нахаб фрукт 1</li>
                    <li class="ingredient">Лимон 20/30</li>
                    <li class="ingredient">Мята 5/7</li>
                    <li class="ingredient">Гвоздика 2/4</li>
                    <li class="ingredient">Кориця пал 1</li>
                </ul>
            </li>
    </ul>
`;

const authorCoffeeMenuHtml = `
    <ul class="coffee-list">
            <li class="coffee-item">
                <div class="tittle">Капуоранж</div>
                <ul class="ingredients">
                    <li class="ingredient">С Апельсин 300/360</li>
                    <li class="ingredient">Кава 45/60</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Лате с к</div>
                <ul class="ingredients">
                    <li class="ingredient">Молоко 230/300</li>
                    <li class="ingredient">Кава 30/60</li>
                    <li class="ingredient">С с к 20/30</li>
                    <li class="ingredient">Топінг с к 5</li>
                    <li class="ingredient">Кріпси 4/4</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Черрі</div>
                <ul class="ingredients">
                    <li class="ingredient">Молоко 230/300</li>
                    <li class="ingredient">Кава 30/60</li>
                    <li class="ingredient">С Вишня 15/20</li>
                    <li class="ingredient">Топінг Вишня 5</li>
                    <li class="ingredient">Збиті вершки 30</li>
                    <li class="ingredient">Терт шоко 3/3</li>
                    <li class="ingredient">Вишня 1</li>
                </ul>
            </li>
            <li class="coffee-item">
                <div class="tittle">Шоколадне печиво</div>
                <ul class="ingredients">
                    <li class="ingredient">Молоко 230/300</li>
                    <li class="ingredient">Кава 30/60</li>
                    <li class="ingredient">С шоколад 15/20</li>
                    <li class="ingredient">Топінг шоколад 5</li>
                    <li class="ingredient">Збиті вершки 30</li>
                    <li class="ingredient">Терт шоко 3/3</li>
                    <li class="ingredient">Пал печива 1</li>
                </ul>
            </li>
    </ul>
`;

classicMenuButton.addEventListener("click", () => {
    coffeeList.remove();
    main.innerHTML = classicHtml;
    const copy = [...menuButtons];
    for(let item of copy) {
        if(item !== classicMenuButton) {
            item.classList.remove("touched")
        }
    }
    classicMenuButton.classList.add("touched");

});

iceMenuButton.addEventListener("click", () => {
    coffeeList.remove();
    main.innerHTML = iceMenuHtml;
    const copy = [...menuButtons];
    for(let item of copy) {
        if(item !== iceMenuButton) {
            item.classList.remove("touched")
        }
    }
    iceMenuButton.classList.add("touched");
});

bubbleTeaMenuButton.addEventListener("click", () => {
    coffeeList.remove();
    main.innerHTML = bubbleTeaMenuHtml;
    const copy = [...menuButtons];
    for(let item of copy) {
        if(item !== bubbleTeaMenuButton) {
            item.classList.remove("touched")
        }
    }
    bubbleTeaMenuButton.classList.add("touched");
});

authorTeaMenuButton.addEventListener("click", () => {
    coffeeList.remove();
    main.innerHTML = authorTeaMenuHtml;
    const copy = [...menuButtons];
    for(let item of copy) {
        if(item !== authorTeaMenuButton) {
            item.classList.remove("touched")
        }
    }
    authorTeaMenuButton.classList.add("touched");
})

authorCoffeeMenuButton.addEventListener("click", () => {
    coffeeList.remove();
    main.innerHTML = authorCoffeeMenuHtml;
    const copy = [...menuButtons];
    for(let item of copy) {
        if(item !== authorCoffeeMenuButton) {
            item.classList.remove("touched")
        }
    }
    authorCoffeeMenuButton.classList.add("touched");
})

