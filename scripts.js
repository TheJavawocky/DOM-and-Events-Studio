// Write your JavaScript code here.

window.addEventListener("load", function() {
    let newAltitude = document.getElementById("spaceShuttleHeight")
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click",function(event){
        window.confirm("Confirm that shuttle is ready for take-off")
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
        let colorChange = document.getElementById('shuttleBackground')
        colorChange.style.backgroundColor = "blue"
       newAltitude.innerHTML =  newAltitude.innerHTML + 10000

    });

    let landingButton = document.getElementById("landing");
    landingButton.addEventListener("click",function(event){
        window.confirm("The shuttle is landing. Landing gear engaged")
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed";
        let colorChange = document.getElementById('shuttleBackground')
        colorChange.style.backgroundColor = "green"
       newAltitude.innerHTML =  0

    })
    let abortButton = this.document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(event){
        window.confirm("Confirm that you want to abort the mission.")
        document.getElementById("flightStatus").innerHTML = "Mission Aborted";
        let colorChange = document.getElementById('shuttleBackground')
        colorChange.style.backgroundColor = "green"
       newAltitude.innerHTML =  0
    });
});