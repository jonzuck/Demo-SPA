// planet constructor
var Planet = function (name, year, day, distance) {
  this.name = name;
  this.year = year;
  this.day = day;
  this.distance = distance;
}; 

// ALL the planets! :-)
var solarSystem = {
  planet1: new Planet('Mercury', '0.24', '58.64', '0.39'),
  planet2: new Planet('Venus', '0.62', '243.00', '0.72'),
  planet3: new Planet('Earth', '1.00', '1.00', '1.00'),
  planet4: new Planet('Mars', '1.88', '1.03', '1.52'),
  planet5: new Planet('Jupiter', '11.86', '0.41', '5.20'),
  planet6: new Planet('Saturn', '29.46', '0.43', '9.54'),
  planet7: new Planet('Uranus', '84.01', '0.72', '19.22'),
  planet8: new Planet('Neptune', '164.8', '0.67', '30.06')
};

// play button
var play = document.getElementById('play');
play.addEventListener('click', function () {
  var planetArray = [1, 2, 3, 4, 5, 6, 7, 8];
  var p = planetArray[Math.floor((Math.random() * 8))];

  //fill in the information table -- only the first time
  var pInfo = document.getElementById('planetInfo');
  if (pInfo.innerHTML === '') {
    pInfo.innerHTML = "<tr class='top-header-row'><th>Name</th><th class='top-header-cell'>Year</th><th class='top-header-cell'>Day</th><th class='top-header-cell'>Distance from Sun</th></tr>";
    pInfo.constructor.prototype.list = list;
    var list = function () {
      for (var i in solarSystem) {
        pInfo.innerHTML += "\n<tr>\<th>" +
        solarSystem[i].name + "</th><td>" +
        solarSystem[i].year + "</td><td>" +
        solarSystem[i].day + "</td><td>" +
        solarSystem[i].distance + "</td>\n</tr>";
      }
        window.scrollBy(0, 150);
    };
  }


  //create a planet at random
  var randomPlanet = "planet" + p;

  Planet.prototype.greeting = function () {
    //if it isn't Earth
    if (solarSystem[randomPlanet] !== solarSystem.planet3) {
      var msg = "";
      var result = confirm("Hello, I'm " + this.name +
        "! \nMy year is about " + this.year +
        " of your years. \n\nWould you like to learn more?");
      if (result === true) {
        msg = "Frimmin'! \nMy day is about " + this.day +
        " of your days, and \nI\'m " + this.distance +
        " times as far from the sun as you.";
      } else {
        msg = "Fine. Be that way. \nHope your next probe crashes, jerk!";
      }
      //if it is Earth
    } else if (solarSystem[randomPlanet] === solarSystem.planet3) {
      msg = "Hey, there, Earthling! \nYou already know me. \nJust hit the button again for another planet.";
    }
    alert(msg);
  };

  setTimeout(function () {  
    //launch the random planet's new greeting.
    solarSystem[randomPlanet].greeting();
  }, 300);
});
