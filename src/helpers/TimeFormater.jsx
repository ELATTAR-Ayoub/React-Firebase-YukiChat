
function YMD_HMS_Formater(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);

    // adjust 0 before single digit date
    let date = ("0" + t.getDate()).slice(-2);

    // current month
    let month = ("0" + (t.getMonth() + 1)).slice(-2);

    // current year
    let year = t.getFullYear();

    // current hours
    let hours = t.getHours() + 1;

    // current minutes
    let minutes = t.getMinutes();

    // current seconds
    let seconds = t.getSeconds();

    let formatedT = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
    return formatedT;
}

export { YMD_HMS_Formater };