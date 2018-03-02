let dozenal = true;

// update clock once a second
setInterval(updateDateTime, 1000);

function toggleDozenal() {
    if (dozenal) {
        dozenal = false;
    } else {
        dozenal = true;
    }
    updateDateTime();
}

function updateClock(now) {
    let time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    if (dozenal) {
        time = time.map(d => convertToDozenal(d));
    }

    document.getElementById('clock').textContent = time.join(':');
}

function convertToDozenal(x, digits = []) {
    let remainder = x % 12;
    let quotient = Math.floor(x / 12);

    digits.push(remainder);

    if (quotient === 0) {
        return digits
        .map(d => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'D', 'E'][d])
        .reverse()
        .join('');
    } 
    return convertToDozenal(quotient, digits);
}

function updateDay(now) {
    let day = now.getDay();
    let dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    let date = now.getDate();
    let suffix = (date > 3 && date < 21) ? 'th' :
                 ((date - 1) % 10  < 3)  ? ['st', 'nd', 'rd'][(date - 1) % 10] : 'th' ;
    document.getElementById('day').textContent = dayString + ' the ' + date + suffix + ' of ';
}

function updateMonth(now) {
    let month = now.getMonth();
    let monthString = 
        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'][month];
    document.getElementById('month').textContent = monthString;
}

function updateYear(now) {
    let year = now.getFullYear();
    document.getElementById('year').textContent = year
}

function updateDateTime() {
    let now = new Date();
    updateClock(now);
    updateDay(now);
    updateMonth(now);
    updateYear(now);
}