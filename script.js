const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const welcomeMessage = document.getElementById('welcomeMessage');
const personalMessage = document.getElementById('personalMessage');
const bgImage = document.getElementById('bgImage');

// Background images
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

    if(name === '') {
        alert('Please enter your name!');
        return;
    }

    // Background matching
    let matched = false;
    for (let key in backgrounds) {
        if (name.includes(key)) {
            bgImage.src = backgrounds[key];
            matched = true;
            break;
        }
    }

    if(!matched) {
        bgImage.src = '';
    }

    // Hide input
    nameInput.style.display = 'none';
    submitBtn.style.display = 'none';

    // Make container transparent
    document.querySelector('.container').style.backgroundColor = 'rgba(255,255,255,0.1)';

    // Show greeting
    personalMessage.textContent = `Eid Mubarak to ${nameRaw}! 🎉✨`;
    welcomeMessage.classList.remove('hidden');

    // SAVE NAME (IMPORTANT FIX)
    localStorage.setItem("eidUserName", nameRaw);
});

// FUNCTION FOR BUTTON (MOST IMPORTANT FIX)
function goToLetter() {
    window.location.href = "letter.html";
}