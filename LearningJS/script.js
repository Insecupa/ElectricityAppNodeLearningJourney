const myAnswer = document.getElementById("answer")

update()
setInterval(update, 1000)

function update() {

    let date = new Date();
    myAnswer.innerHTML = formatDate(date);


    function formatDate() {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();

        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()

        let amPm = hours >= 12 ? "pm" : "am"

        hours = (hours % 12) || 12

        return `${hours}:${minutes}:${seconds} ${amPm}`
    }

}