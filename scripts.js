function toggleMenu(menuId) {
    // Скрываем все меню
    document.getElementById('ourServices').style.display = 'none';
    document.getElementById('legalConsulting').style.display = 'none';
// BY MUSTAFA ALRAWI [https://alrawi.ru]
    // Отображаем выбранное меню
    document.getElementById(menuId).style.display = 'grid';
}
// Обработчик события для кнопки "СМОТРЕТЬ РЕЙТИНГ"
document.getElementById("rating-link").addEventListener("click", function (event) {
    event.preventDefault();
    alert("просмотра рейтинга / Мустафа Исам [alrawi.ru]");
});
// BY MUSTAFA ALRAWI [https://alrawi.ru]
// Обработчик события для кнопки "НАПИСАТЬ ДИРЕКТОРУ"
document.querySelector(".btn-director").addEventListener("click", function (event) {
    event.preventDefault();
    alert("написания директору / Мустафа Исам [alrawi.ru]");
});
// BY MUSTAFA ALRAWI [https://alrawi.ru]
// Обработчик события для кнопки "СМОТРЕТЬ РЕЙТИНГ"
document.getElementById("open-acc").addEventListener("click", function (event) {
    event.preventDefault();
    alert("открыть счет / Мустафа Исам [alrawi.ru]");
});
