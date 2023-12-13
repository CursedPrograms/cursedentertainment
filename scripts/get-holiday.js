var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

function setHolidayHeader() {
    var header = document.getElementById('holidayHeader');
    var logo;
    if (currentMonth === 11 && (currentDay >= 24 && currentDay <= 25)) {
        logo = '../images/christmasLogo.png';
    } else if (currentMonth === 3 && (currentDay >= 1 && currentDay <= 7)) {
        logo = '../images/easterLogo.png';
    } else if (currentMonth === 9 && (currentDay >= 28 && currentDay <= 31)) {
        logo = '../images/halloweenLogo.png';
    }
    if (!logo || !imageExists(logo)) {
        logo = '../images/spr_cursedLogo.png';
    }

    header.innerHTML = '<img src="' + logo + '" alt="CursedEntertainment Logo" width="277" height="149">';
}
function imageExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
}
document.addEventListener('DOMContentLoaded', function () {
    setHolidayHeader();
});