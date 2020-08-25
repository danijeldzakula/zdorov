function showVisitors() {
    //	Функция выборки случайного числа
    function getRandom(min, max) {
        var res = Math.floor(Math.random() * (max - min + 1) + min);
        return res;
    }

    //  Количество посетителей
    var countPeoples = getRandom(130, 230);
    var peoplesBlock = $('#peoples');
    var min = countPeoples - 20;
    var max = countPeoples + 20;
    peoplesBlock.text(getRandom(min, max));

    //  Показ кол-ва посетителей на сайте
    setInterval(function () {
        peoplesBlock.fadeOut(function () {
            peoplesBlock.text(getRandom(min, max));
            peoplesBlock.fadeIn();
        });
    }, 8000);
}

showVisitors();