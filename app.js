window.alert("Ciid wanaagsann");
window.addEventListener('load',()=>{

    let long;
    let lat;

    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    

    let temperatureSection = document.querySelector(".temperature");

    const temperatureSpan = document.querySelector(".temperature span");


    let temperatureWeekly = document.querySelector(".temperature-weekly");


    let dayOne = document.querySelector(".dayOne");

    let dayTwo = document.querySelector(".dayTwo");

    let wednesday = document.querySelector(".wednesday");

    let thursday = document.querySelector(".thursday");
    let friday = document.querySelector(".friday");
    let saturday = document.querySelector(".saturday");
    let sunday = document.querySelector(".sunday");
    


  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position => {


        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/676a4cf64394338680d8a8c04fe04481/${lat},${long}`;
        fetch(api)
          .then(Response =>{
            return Response.json();
          })
          .then(data =>{
            console.log(data);

            const {temperature, summary, icon} = data.currently;

            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;

            


            //code for the daily summary

            const dailySummary = data.daily.summary;
                //console.log(dailySummary);

            temperatureWeekly.textContent = dailySummary;
            


            const dayOnee = data.daily.data[0].temperatureHigh;

            const dayTwoo = data.daily.data[1].temperatureHigh;

            const wednesdayy = data.daily.data[2].temperatureHigh;

            const thursdayy = data.daily.data[3].temperatureHigh;
            const fridayy = data.daily.data[4].temperatureHigh;
            const saturdayy = data.daily.data[5].temperatureHigh;
            const sundayy = data.daily.data[6].temperatureHigh;
            







                //console.log(dailySummary);

            dayOne.textContent = dayOnee;
            dayTwo.textContent = dayTwoo;
            wednesday.textContent = wednesdayy;

            thursday.textContent = thursdayy;
            friday.textContent = fridayy;
            saturday.textContent = saturdayy;
            sunday.textContent = sundayy;
           

            //FORMULA

            let celsius = (temperature - 32) * (5 / 9);
            
            


            
              setIcons(icon, document.querySelector(".icon"));

              temperatureSection.addEventListener('click', () =>{
                if(temperatureSpan.textContent === "F"){
                  temperatureSpan.textContent = "C";

                  temperatureDegree.textContent = Math.floor(celsius);
                
                } else {
                  temperatureSpan.textContent = "F";

                  temperatureDegree.textContent = temperature;
                
              }

            });
            


          });
    });
  }  
function setIcons(icon, iconID){
  const skycons = new Skycons({color: "white"});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}



});

