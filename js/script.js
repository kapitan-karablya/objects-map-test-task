const testData = [
    {
        country: 'Россия',
        cities: [{
            city: 'Красноярск',
            coordinates: [56.010569, 92.852572],
            objects: [{
                name: 'Офис КРАСНОЯРСК',
                manager: 'Лягушкин Иван Сергеевич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [56.014193, 92.858800]
            }, {
                name: 'Офис КРАСНОЯРСК ЦЕНТР',
                manager: 'Зубенко Михаил Петрович',
                phoneNumbers: ['+79992222222', '+79992222222', '+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [56.061124, 92.968782]
            }]
        }, {
            city: 'Норильск',
            coordinates: [69.357041, 88.186171],
            objects: [{
                name: 'Офис Норильск 8',
                manager: 'Калугина Ева Владиславовна',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [69.343989, 88.213558]
            }, {
                name: 'Офис Норильск Главный',
                manager: 'Петров Арсений Михайлович',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [69.340358, 88.226050]
            }]
        }, {
            city: 'Москва',
            coordinates: [55.7522, 37.6156],
            objects: [{
                name: 'Офис Москва',
                manager: 'Кудряшов Алексей Георгиевич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [55.756113, 37.595360]
            }, {
                name: 'Офис Москва 1',
                manager: 'Сальникова Анна Львовна',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [55.631449, 37.762387]
            }, {
                name: 'Офис Москва 3',
                manager: 'Павлова Любовь Ярославовна',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [55.800326, 37.707938]
            }]
        }, {
            city: 'Екатеринбург',
            coordinates: [56.8519, 60.6122],
            objects: [{
                name: 'Офис Екатеринбург 1',
                manager: 'Зотов Илья Юрьевич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [56.817075, 60.543707]
            }, {
                name: 'Офис Екатеринбург 2',
                manager: 'Миронов Михаил Ильич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [56.889012, 60.608307]
            }]
        }, {
            city: 'Владикавказ',
            coordinates: [43.0367, 44.6678],
            objects: [{
                name: 'офис Владикавказ',
                manager: 'Муратов Руслан Александрович',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [43.053311, 44.649789]
            }]
        }]
    }, {
        country: 'Белоруссия',
        cities: [{
            city: 'Минск',
            coordinates: [53.9, 27.5667],
            objects: [{
                name: 'Офис МИНСК',
                manager: 'Иванова Софья Марковна',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [53.899664, 27.554764]
            }, {
                name: 'Офис МИНСК ЦЕНТР',
                manager: 'Зубкова Вероника Никитична',
                phoneNumbers: ['+79992222222', '+79992222222', '+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [53.952568, 27.615491]
            }]
        },{
            city: 'Брест',
            coordinates: [52.0975, 23.6877],
            objects: [{
                name: 'Офис БРЕСТ',
                manager: 'Свешникова Эмилия Ивановна',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [52.092418, 23.725233]
            }]
        },{
            city: 'Витебск',
            coordinates: [55.1904, 30.2049],
            objects: [{
                name: 'Офис ВИТЕБСК',
                manager: 'Елисеев Иван Николаевич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [55.173768, 30.153316]
            },{
                name: 'Офис ВИТЕБСК 2',
                manager: 'Тихомиров Савелий Никитич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [55.196586, 30.252575]
            }]
        },{
            city: 'Полоцк',
            coordinates: [55.4879, 28.7856],
            objects: [{
                name: 'Офис Полоцк 1',
                manager: 'Макаров Максим Дмитриевич',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [55.485139, 28.804243]
            },{
                name: 'Офис Полоцк 2',
                manager: 'Петров Михаил Иванович',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [55.499229, 28.753994]
            }]
        },{
            city: 'Светлогорск',
            coordinates: [52.6329, 29.7389],
            objects: [{
                name: 'Офис Светлогорск',
                manager: 'Фомичев Станислав Иванович',
                phoneNumbers: ['+79992222222', '+79992222222'],
                email: 'username@flagstudio.ru',
                coordinates: [52.627032, 29.731153]
            }]
        }]
    }];

ymaps.ready(init);

function init() {

    var myMap = new ymaps.Map("map", {
        center: [56.01, 92.85],
        zoom: 6,
    });

    let geoObjects = [];

    for (let i = 0; i < testData.length; i++) {
        geoObjects[i] = createCountryTab(testData[i], i);
    }

    showTabsContent(0);
    myMap.setBounds(myMap.geoObjects.getBounds());


    function hideTabsContent() {
        const tabs = document.querySelectorAll(".country");
        const tabsContent = document.querySelectorAll(".country-data");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            if (tabsContent[i] !== undefined)
                tabsContent[i].classList.remove('active');
        }
        myMap.geoObjects.removeAll();
    }

    function showTabsContent(id) {
        let country = document.getElementById('country-' + id);
        let countryInfo = document.getElementById('countryData-' + id);
        if (!country.classList.contains('active')) {
            hideTabsContent();
            geoObjects[id].map(city => {
                myMap.geoObjects.add(city)
            });
            country.classList.add('active');
            if (countryInfo)
                countryInfo.classList.add('active');
        }
    }


    function createCountryTab(country, id) {

        let CitiesClusters = [];

        let item = document.createElement('div');
        item.className = 'country';
        item.id = 'country-' + id;
        item.innerHTML = country.country;

        item.onclick = function (event) {
            let target = event.target;
            showTabsContent(target.id.replace('country-', ''));
            myMap.setBounds(myMap.geoObjects.getBounds());
        };
        createCountyData(country.cities, id, CitiesClusters);
        document.querySelector('.countries').append(item);
        return CitiesClusters;
    }

    function createCountyData(cities, id, collection) {
        if (!cities)
            return;

        let countryData = document.createElement('div');
        countryData.className = 'country-data';
        countryData.id = 'countryData-' + id;
        for (let i = 0; i < cities.length; i++) {
            let cityCluster = new ymaps.Clusterer({
                preset: 'islands#invertedBlueClusterIcons',
                clusterIcons: [{
                    href: './img/placemark.svg',
                    size: [40, 40],
                    offset: [-20, -20]
                }],
                groupByCoordinates: false,
                clusterDisableClickZoom: true,
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false,
            },);

            cityCluster.events.add('click', function (e) {
                var target = e.get('target'),
                    type = e.get('type');
                if (type === 'click') {
                    myMap.setCenter(target.geometry.getBounds()[0]);
                }
            });

            let city = document.createElement('details');
            city.className = 'city';
            city.innerHTML = `<summary class="city-name">${cities[i].city}</summary>`;
            city.append(getCityObjects(cities[i].objects, cityCluster));
            city.addEventListener("toggle", (e) => onToggle(e, cityCluster, cities[i]));
            city.onclick = function () {

            };
            countryData.append(city);
            collection[i] = cityCluster;
        }

        document.querySelector('.sidebar').append(countryData);
    }

    function onToggle(event, cityCluster, city) {
        if (event.target.open) {
            if (city.coordinates) {
                myMap.setCenter(city.coordinates, 6);
            } else {
                myMap.setCenter([63, 92], 5);
                console.log(cityCluster.getClusters().length === 0);
                if (cityCluster.getClusters.length !== 0)
                    myMap.setCenter(cityCluster.getClusters()[0].geometry.getBounds()[0], 6);
                else myMap.setCenter(cityCluster.getGeoObjects()[0].geometry.getBounds()[0], 6)
            }
            if (cityCluster.getClusters().length !== 0)
                cityCluster.balloon.open(cityCluster.getClusters()[0]);
            else cityCluster.getGeoObjects()[0].balloon.open(cityCluster.getGeoObjects()[0]);

            document.querySelectorAll(".country-data > details[open]").forEach((el) => {
                if (el === event.target) {
                    return;
                }
                el.open = false;
            });
        } else {
            cityCluster.balloon.close(cityCluster.getClusters()[0]);
        }
    }

    function getCityObjects(objects, cityCluster) {
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
            if (objects[i].coordinates) {
                let placemark = new ymaps.Placemark(objects[i].coordinates, {
                    balloonContent: object.outerHTML,
                    clusterCaption: 'Объект ' + (Number(i) + 1)
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: './img/placemark.svg',
                    iconImageSize: [20, 20],
                    iconImageOffset: [-10, -10]
                });
                cityCluster.add(placemark);
            }
        }
        return objectsList;
    }

    function addObjectInformation(object, information, element) {
        if (!information || information.length === 0)
            return;
        object.insertAdjacentHTML("beforeend", element)
    }
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
                        <div class="full-name">Семенова Софья Фёдоровна</div>
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
                        <div class="full-name">Парфенов Арсен Владимирович</div>
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
                        <div class="full-name">Голубева Варвара Владиславовна</div>
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
                        <div class="full-name">Ермолаев Эмин Львович</div>
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