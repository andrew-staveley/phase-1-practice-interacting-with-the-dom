//Start timer when page loads
let init = true
document.addEventListener('DOMContentLoaded', () => {
    let counter = document.querySelector('#counter');
    setInterval(() => {
        if (init === true) {
            counter.innerHTML++
        }
    }, 1000)
});

//Manually decrement the timer
document.querySelector('#minus').addEventListener('click', () => {
    if (init === true) {
    let counter = document.querySelector('#counter');
    counter.innerHTML--
    } else {
        alert("Timer is paused. Please un-pause the timer to manually change the number")
    }
});

//Manually increment timer
document.querySelector('#plus').addEventListener('click', () => {
    if (init === true) {
    let counter = document.querySelector('#counter');
    counter.innerHTML++
    } else {
        alert("Timer is paused. Please un-pause the timer to manually chnage the number")
    }
});

//Like button and like sequence
document.querySelector('#heart').addEventListener('click', () => {

    //Initialization
    let likeCounter = 0
    let counter = document.querySelector('#counter')
    let newElement = document.createElement('li')
    let varDriz

    //Like counter handler
    if (likeCounter == 1) {
        varDriz = 'time'
    } if (likeCounter >= 2 || likeCounter <= -1) {
        varDriz = 'times'
    }

    //Final message assignment and execution
    newElement.innerHTML = `${counter.innerText} has been liked ${likeCounter} ${varDriz}.`
    document.querySelector('ul').appendChild(newElement)
});

//Pause timer and resume timer button
document.querySelector('#pause').addEventListener('click', () => {
    let pauseButtonName = document.querySelector('#pause');
    if (init === true) {
        init = false;
        pauseButtonName.innerText = 'Resume';
    } else if (init ===  false) {
        init = true;
        pauseButtonName.innerText = 'Pause';
    }
});

//Comment section
let submit = document.querySelector('#submit').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(submit)
});