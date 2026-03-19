const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const welcomeMessage = document.getElementById('welcomeMessage');
const personalMessage = document.getElementById('personalMessage');
const moveForwardBtn = document.getElementById('moveForwardBtn');
const bgImage = document.getElementById('bgImage');

const backgrounds = {
    "haroon": "images/haroon.jpg",
    "onais": "images/onais.jpg",
    "hamza": "images/hamza.jpg",
    "naveed": "images/naveed.jpg",
    "touqeer": "images/touqeer.jpg"
};

submitBtn.addEventListener('click', () => {
    const nameRaw = nameInput.value.trim();
    const name = nameRaw.toLowerCase();

    if(name === '') { alert('Please enter your name!'); return; }

    // Match name and set background image
    let matched = false;
    for (let key in backgrounds) {
        if(name.includes(key)) {
            bgImage.src = backgrounds[key];
            matched = true;
            break;
        }
    }
    if(!matched) bgImage.src = '';

    // Hide input and submit button
    nameInput.style.display = 'none';
    submitBtn.style.display = 'none';

    // Make container transparent
    document.querySelector('.container').style.backgroundColor = 'rgba(255,255,255,0.1)';

    // Show personalized message
    personalMessage.textContent = `Eid Mubarak to ${nameRaw}! 🎉✨`;
    welcomeMessage.classList.remove('hidden');
});

// Move Forward button
moveForwardBtn.addEventListener('click', () => {
    const nameRaw = nameInput.value.trim() || personalMessage.textContent.split("to ")[1].split("!")[0];
    window.location.href = `surprise.html?name=${encodeURIComponent(nameRaw)}`;
});