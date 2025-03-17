
function sendEmail(){
    let name = document.getElementById("nameEntry").value;
    let message = document.getElementById("messageEntry").value;
    
    if (!name){
        alert("Please enter a name");
        return;
    }
    
    if (!message){
        alert("Please enter a message");
        return;
    }
    
    let subject = `Message from ${encodeURIComponent(name)}`;
    let body = encodeURIComponent(message.replace(/\n/g, "%0A"));
    
    window.location.href = `mailto:qsorrentino@wisc.edu?subject=${subject}&body=${body}`;
    
}

function setDateTime(){
    function updateTime(){
        let now = new Date();
        let formattedDateTime = now.toLocaleString();
        document.getElementById("dateTime").textContent = formattedDateTime;
    }

    updateTime(); 
    setInterval(updateTime, 1000); 
}

async function setWeather(){
    try{
        //Add api key
    let response = await fetch('http://api.weatherapi.com/v1/current.json?key=&q=Madison');
    let data = await response.json();

    console.log(data);

    let cityName = data.location.name;
    let temperature = data.current.temp_f;
    let condition = data.current.condition.text;

    document.getElementById("weather").textContent = `${cityName}, ${condition}, ${temperature}°F`
    } catch (error){
        alert("Error getting weather data")
    }

}

window.onload = () => {
    setDateTime();
    setWeather();
};

document.getElementById("sendButton").addEventListener("click", sendEmail);


