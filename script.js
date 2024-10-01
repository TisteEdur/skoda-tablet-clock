function retrieveTime() {
    const currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");

    const timeElement = document.getElementById("clock-data");
    const secondsElement = document.getElementById("seconds");

    timeElement.innerHTML = `${hours} : ${minutes}`;
    secondsElement.style.setProperty("--rotate", (seconds * 2.96) + "deg");

    setInterval(retrieveTime, 1000);
}

retrieveTime();

function retrieveDate() {
    const currentDate = new Date();

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    month = month.toString().padStart(2, "0");

    const dateElement = document.getElementById("date-data");

    dateElement.innerHTML = `${day}.${month}.${year}`;
}

retrieveDate();