const testData = [
    {
        country: 'Россия',
        cities: [{
            city: 'Красноярск',
            objects: [{
                name: 'Офис КРАСНОЯРСК',
                manager: 'Лягушкин Иван Сергеевич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru'
            }, {
                name: 'Офис КРАСНОЯРСК ЦЕНТР',
                manager: 'Зубенко Михаил Петрович',
                phoneNumbers: ['+79992222222', '+79992222222', '+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru'
            }]
        }, {
            city: 'Норильск',
            objects: [{
                name: 'название обьекта',
                manager: 'ФИО',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru'
            }]
        }]
    }, {
        country: 'Белоруссия',
        cities: [{
            city: 'Красноярск',
            objects: [{
                name: 'Офис КРАСНОЯРСК',
                manager: 'Лягушкин Иван Сергеевич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru'
            }, {
                name: 'название обьекта',
                manager: 'ФИО',
                phoneNumbers: ['+79992222222', '+79992222222', '+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru'
            }]
        }]
    }];


window.onload = function () {
    addCountriesFromData(testData);
    showTabsContent(0)
};


function hideTabsContent() {
    const tabs = document.querySelectorAll(".country");
    const tabsContent = document.querySelectorAll(".country-data");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        if (tabsContent[i] !== undefined)
            tabsContent[i].classList.remove('active');
    }
}

document.querySelector('.countries').onclick = function (event) {
    let target = event.target;
    if (target.className === 'country') {
        showTabsContent(target.id.replace('country-', ''));
    }
};

function showTabsContent(id) {
    let country = document.getElementById('country-' + id);
    let countryInfo = document.getElementById('countryData-' + id);
    if (!country.classList.contains('active')) {
        hideTabsContent();
        country.classList.add('active');
        if (countryInfo)
            countryInfo.classList.add('active');
    }
}

/*
function showTabsContent(id) {
    let country, countryInfo;
    for (let tab of tabs)
        if (tab.dataset.id === id) {
            country = tab;
            break;
        }
    for (let tabContent of tabsContent)
        if (tabContent.dataset.id === id) {
            countryInfo = tabContent;
            break;
        }
    if (!country.classList.contains('active')) {
        hideTabsContent();
        country.classList.add('active');
        countryInfo.classList.add('active');
    }
}
*/
function addCountriesFromData(data) {

    let countries = new DocumentFragment();
    for (let i = 0; i < data.length; i++) {
        let item = document.createElement('div');
        i === 0 ? item.className = 'country active' : item.className = 'country';
        item.id = 'country-' + i;
        item.innerHTML = data[i].country;
        countries.append(item);
        addCountyData(data[i].cities, i);
    }
    document.querySelector('.countries').append(countries);
}

function addCountyData(cities, id) {
    if (!cities)
        return;
    let countryData = document.createElement('div');
    countryData.className = id === 0 ? 'country-data active' : 'country-data';
    countryData.id = 'countryData-' + id;
    for (let i = 0; i < cities.length; i++) {
        let city = document.createElement('details');
        city.className = 'city';
        city.innerHTML = `<summary class="city-name">${cities[i].city}</summary>`;
        city.append(getCityObjects(cities[i].objects));
        countryData.append(city);
    }

    document.querySelector('.sidebar').append(countryData);
}

function getCityObjects(objects) {
    let objectsList = document.createElement('ul');
    objectsList.className = 'offices-list';
    for (let i = 0; i < objects.length; i++) {
        let object = document.createElement('li');
        object.className = 'office';
        addObjectInformation(object, objects[i].name, `<div class="office-name">${objects[i].name}</div>`);
        addObjectInformation(object, objects[i].manager, `<div class="manager-name">${objects[i].manager}</div>`);
        if (objects[i].phoneNumbers && objects[i].phoneNumbers.length !== 0) {
            let phones = `<div class="phone-numbers">`;
            let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
            for (let phone of objects[i].phoneNumbers)
                phones += `<a class="phone" href="tel:${phone}">${phone.replace(pattern, '+7($2) $3-$4-$5')}</a>`;
            phones += `</div>`;
            object.insertAdjacentHTML("beforeend", phones);
        }
        addObjectInformation(object, objects[i].email, `<a class="email" href="mailto:${objects[i].email}">${objects[i].email}</a>`);
        objectsList.append(object);
    }
    return objectsList;
}

function addObjectInformation(object, information, element) {
    if (!information || information.length === 0)
        return;
    object.insertAdjacentHTML("beforeend", element)
}

/*
<div class="country active" id="country-0">Россия
</div>
<div class="country" id="country-1">Белоруссия</div>

        <div class="country-data active" id="countryData-0">
            <details open class="city">
                <summary class="city-name">Красноярск</summary>
                <ul class="offices-list">
                    <li class="office">
                        <div class="office-name">Офис КРАСНОЯРСК</div>
                        <div class="full-name">Лягушкин Иван Сергеевич</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                        </div>
                        <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                    </li>
                    <li>
                        <div class="office-name">Офис КРАСНОЯРСК ЦЕНТР</div>
                        <div class="full-name">Зубенко Михаил Петрович</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                        </div>
                        <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                    </li>
                </ul>
            </details>
            <details class="city">
                <summary class="city-name">Норильск</summary>
                <ul class="offices-list">
                    <li class="office">
                        <div class="office-name">Офис КРАСНОЯРСК</div>
                        <div class="full-name">Лягушкин Иван Сергеевич</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                        </div>
                        <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                    </li>
                    <li>
                        <div class="office-name">Офис КРАСНОЯРСК ЦЕНТР</div>
                        <div class="full-name">Зубенко Михаил Петрович</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                        </div>
                        <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                    </li>
                </ul>
            </details>
            <details class="city">
                <summary class="city-name">Екатеринбург</summary>
                <ul class="offices-list">
                    <li class="office">
                        <div class="office-name">Офис КРАСНОЯРСК</div>
                        <div class="full-name">Лягушкин Иван Сергеевич</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 22-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                        </div>
                    </li>
                    <li>
                        <div class="office-name">Офис КРАСНОЯРСК ЦЕНТР</div>
                        <div class="full-name">Зубенко Михаил Петрович</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 22-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                        </div>
                    </li>
                </ul>
            </details>
        </div>
        <div class="country-data" id="countryData-1">
            <details open class="city">
                <summary class="city-name">Красноярск</summary>
                <ul class="offices-list">
                    <li class="office">
                        <div class="office-name">Офис КРАСНОЯРСК</div>
                        <div class="full-name">Лягушкин Иван Сергеевич</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                        </div>
                        <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                    </li>
                    <li>
                        <div class="office-name">Офис КРАСНОЯРСК ЦЕНТР</div>
                        <div class="full-name">Зубенко Михаил Петрович</div>
                        <div class="phone-numbers">
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                            <a class="phone" href="tel:+74951234567">+7(999) 222-22-22</a>
                        </div>
                        <a class="email" href="mailto:username@flagstudio.ru">username@flagstudio.ru</a>
                    </li>
                </ul>
            </details>
        </div>
*/