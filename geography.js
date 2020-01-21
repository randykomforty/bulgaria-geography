var provinces = [
	["Blagoevgrad", "Благоевград"],
	["Burgas", "Бургас"],
	["Dobrich", "Добрич"],
	["Gabrovo", "Габрово"],
	["Haskovo", "Хасково"],
	["Kardzhali", "Кърджали"],
	["Kyustendil", "Кюстендил"],
	["Lovech", "Ловеч"],
	["Montana", "Монтана"],
	["Pazardzhik", "Пазарджик"],
	["Pernik", "Перник"],
	["Pleven", "Плевен"],
	["Plovdiv", "Пловдив"],
	["Razgrad", "Разград"],
	["Ruse", "Русе"],
	["Shumen", "Шумен"],
	["Silistra", "Силистра"],
	["Sliven", "Сливен"],
	["Smolyan", "Смолян"],
	["Sofia", "София"],
	["Sofia City", "София-град"],
	["Stara Zagora", "Стара Загора"],
	["Targovishte", "Търговище"],
	["Varna", "Варна"],
	["Veliko Tarnovo", "Велико Търново"],
	["Vidin", "Видин"],
	["Vratsa", "Враца"],
	["Yambol", "Ямбол"]
]
var province = "";
var checkNum = "";
var randomNum = "";
function randomImg() {
	while (checkNum == randomNum) {
		randomNum = Math.floor(Math.random() * provinces.length);
		continue;
	}
	checkNum = randomNum;
	province = provinces[randomNum];
	document.getElementById("map").src = "http://randy.addictivecode.org/bulgaria_provinces/" + province[0] + ".png"
	var baseURL = "https://en.wikipedia.org/w/api.php?origin=*";
	var params = [
		"&action=query",
		"&titles=" + province[0] + " " + "Province",
		"&format=json",
		"&prop=extracts",
		"&exintro",
		"&explaintext",
		"&amp;section=1",
		"&redirects=1"
	];
	for (var i = 0; i < params.length; i++) {
		baseURL += params[i];
	}
	var xhr = new XMLHttpRequest();
	xhr.open('GET', baseURL, true);
	xhr.onload = function() {
		var data = JSON.parse(this.response);
		var text = data.query.pages[Object.keys(data.query.pages)[0]].extract;
		document.getElementById("flag").style.display = "none";
		document.getElementById("right-side").getElementsByTagName("h1")[0].style.textAlign = "left";
		document.getElementById("right-side").getElementsByTagName("p")[0].style.textAlign = "left";
		document.getElementById("right-side").getElementsByTagName("h1")[0].innerHTML = province[1];
		document.getElementById("right-side").getElementsByTagName("p")[0].innerHTML = text;
	}
	xhr.send();
}
