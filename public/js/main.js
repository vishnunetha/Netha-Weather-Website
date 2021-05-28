const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();


    cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please enter the city name`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=659c34cea2fe52a5cfe2b77ed2b85848`;
            const response = await fetch(url); 
            const data = await response.json(); 
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = Math.round((arrData[0].main.temp)-273);

            const tempMood = arrData[0].weather[0].main;
            // conditon to check cloudy or sunny
            if(tempMood === "Clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMood === "Clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#009AD8 ;'></i>"
            }
            else if(tempMood === "Rain")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
            datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = `Please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);