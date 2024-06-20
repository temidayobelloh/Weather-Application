document.getElementById('weatherBtn').addEventListener('click', function () {
    const UserInput = document.getElementById('cityInput').value;
    const apiKey = '57fce59d263fbb0d4c043a81392345c5';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;

    fetch(url)
.then((response)=> {return response.json();})
.then((data)=>{ document.getElementById('cityName').textContent= data.name;
    document.getElementById('temperature').textContent=data.main.temp;
    document.getElementById('conditions').textContent=data.weather[0].description;
    document.getElementById('weatherInfo').classList.remove('hidden');
    document.getElementById('error').classList.add('hidden');
})
.catch((error) => {
    document.getElementById('error').textContent = error.message;
    document.getElementById('error').classList.remove('hidden');
    document.getElementById('error').classList.add('hidden');
});
});