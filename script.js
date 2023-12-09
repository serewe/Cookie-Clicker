const cookie = {
  allCookie: 0,
  CookieForClick: 1,
  addCookieForAllBuilds: 0,
};

let buildingElement = document.getElementById("building");
// Calculeтед для печенья
{
  function calcAllCookies() {
    cookie.allCookie += cookie.addCookieForAllBuilds;
    document.getElementById("cookieValue").innerText = cookie.allCookie;
  }

  setInterval(calcAllCookies, 1000);
}
// Дает денег за клик по печенью
let ButtonCookie = document.getElementById("cookieBig");
ButtonCookie.addEventListener("click", function () {
  cookie.allCookie += cookie.CookieForClick;
});

// Денег много дает
const build = {
  name: [1, 2],
  count: [10, 2],
  addCookieForBuild: [0.5, 1],
  cookieForVisible: [10, 100],
  numOfBuild: [0, 0],
};

const allBuldings = { build };
// Проверка на инвиз для бабак)
function visibleBuildingDog() {
  if (cookie.allCookie >= build.cookieForVisible[0]) {
    let buildingDogElement = buildingElement.querySelector(".buildingDog");
    if (buildingDogElement.classList.contains("no_showBuild")) {
      buildingDogElement.classList.remove("no_showBuild");
      document.getElementById("buildingCostDog").innerText = build.count[0];
    }
  }
}
setInterval(visibleBuildingDog, 1000);

//  Покупка строений
const buttonBuyDog = document.getElementById("buyBuildingDog");
buttonBuyDog.addEventListener("click", function () {
  if (cookie.allCookie >= build.count[0]) {
    cookie.allCookie -= build.count[0];
    cookie.addCookieForAllBuilds += build.addCookieForBuild[0];
    build.count[0] = calcPriceForBuildng(build.numOfBuild[0], build.count[0]);
    document.getElementById("buildingValueDog").innerText = ++build
      .numOfBuild[0];
  } else {
    alert("Недостаточно средств");
  }
});

//
