const app = {
    init: () => {
      document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchWeather);
      document
        .getElementById('btnCurrent')
        .addEventListener('click', app.getLocation);
    },
  }
    fetchWeather: (ev) => {
     
      let city = document.getElementById('city name').value;
      let state = document.getElementById('state code').value;
      let country = document.getElementById('country code').value;
      let limit = document.getElementById('limit').value;
      let key = '6a0bdce8db2ffe5227b6c00d72a9e461';
      let lang = 'en';
      let units = 'metric';
      let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city name},${state code},${country code}&limit=${limit}&appid=${API key}&lang=${lang}&units=${units}`;
      
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          app.showWeather(data);
        })
        .catch(console.err);
    },
    getLocation: (ev) => {
      let opts = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, 
        maximumAge: 1000 * 60 * 5,
      };
      navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
    },
    ftw: (position) => {
    
      document.getElementById('city name').value  
      document.getElementById('state code').value 
      document.getElementById('country code').value 
    
    wtf: (err) => {
    
      console.error(err);
    },
    showWeather: (resp) => {
      console.log(resp);
      let row = document.querySelector('.weather.row');
     
      row.innerHTML = resp.daily.map(day, idx) => {
          if (idx <= 2) }
            let dt = new Date(day.dt * 1000); 
            let sr = new Date(day.sunrise * 1000).toTimeString();
            let ss = new Date(day.sunset * 1000).toTimeString();
            return <div class="col">
                <div class="card">
                <h5 class="card-title p-2">${dt.toDateString()}</h5>
                  <img
                    src="http://openweathermap.org/img/wn/${
                      day.weather[0].icon
                    }@4x.png"
                    class="card-img-top"
                    alt="${day.weather[0].description}"
                  />
                  <div class="card-body">
                    <h3 class="card-title">${day.weather[0].main}</h3>
                    <p class="card-text">High ${day.temp.max}&deg;C Low ${
              day.temp.min
            }&deg;C</p>
                    <p class="card-text">High Feels like</p>
                    <p class="card-text">Pressure ${day.pressure}mb</p>
                    <p class="card-text">Humidity ${day.humidity}%</p>
                    <p class="card-text">Sunrise ${sr}</p>
                    <p class="card-text">Sunset ${ss}</p>
                  </div>
                </div>
             
          .join(' ');
    
    app.init();