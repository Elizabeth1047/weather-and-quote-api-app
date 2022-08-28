let inputedcity = document.getElementById("city");
let btn = document.getElementById("btn");
let info = document.getElementById("info");
let key = "6a39e8d28ca55d7b0d47e76c62454dc4";

let getweatherinfo = () => {
  let inputcityinfo = inputedcity.value;
  if (inputcityinfo.length === 0) {
    info.innerHTML = `<h3 id="h3">please input city!!!</h3>`;
    inputedcity.value = " ";
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputcityinfo}&appid=${key}&units=metric`;
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        info.innerHTML = `
        <h1 id="h4">${item.name}</h1>
        <div>
        <h4 id="h3">${item.weather[0].main}</h4>
        <h4 id="h3">${item.weather[0].description}</h4>
        <img width="100px" src="https://openweathermap.org/img/w/${item.weather[0].icon}.png">
        </div>
        <h1 id="h4">${item.main.temp}<sup>o</sup></h1>
        <div>
        <h4 class="h3">max |
        min</h4>
        <h4 class="h3">${item.main.temp_max} |
        ${item.main.temp_min}</h4>
         </div>
     `;
      })
      .catch(() => {
        info.innerHTML = `<h1 id="h3"> city not found!!!</h1>`;
      });
  }
};
window.addEventListener("load", getweatherinfo);
btn.addEventListener("click",  getweatherinfo);
