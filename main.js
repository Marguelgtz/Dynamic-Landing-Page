// DOM Selectors
const time = document.getElementById('time');
let greeting = document.getElementById('greeting');
let name = document.getElementById('name');
let focus = document.getElementById('focus');

// Options
const showAmPm = true;
const showMilitaryTime = false;

// Display Time
function showTime() {
    let currentTime = new Date(),
        hour = currentTime.getHours(),
        min = currentTime.getMinutes(),
        sec = currentTime.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`

    setTimeout(showTime, 1000);
}

// Fix Missing Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background Image and Greeting based on Time
function setBgGreet() {
    let currentTime = new Date(),
        hour = currentTime.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')"
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Night
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';

    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Check if Enter is Pressed
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Check if Enter is Pressed
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Update Name and Focus Listeners
name.addEventListener('keypress',
    setName);
name.addEventListener('blur',
    setName);
focus.addEventListener('keypress',
    setFocus);
focus.addEventListener('blur',
    setFocus);


// Start Functions
showTime();
setBgGreet();
getName();
getFocus();
