let noCount = 0;

function handleNo() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    noCount++;

    if (noCount >= 5) {
        noBtn.style.display = 'none';
    } else {
       
        const x = Math.random() * (window.innerWidth * 0.8);
        const y = Math.random() * (window.innerHeight * 0.8);
        
        noBtn.style.position = "fixed"; 
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 15) + "px";
        yesBtn.style.padding = "20px 40px";

        const phrases = ["Wow imo gi click?", "Maman si peanut valentines nimo?", "Arrayy ko", "Dle valid"];
        noBtn.innerText = phrases[noCount - 1] || "Try again! 😉";
    }
}

function celebrate() {
    const card = document.querySelector('.valentine-card');
    card.innerHTML = `
        <img src="yippee-cat.gif" style="width:100%; border-radius:15px;">
        <h1 style="margin-top:20px; color: #ff4d6d;"> HAPPY VALENTINES DAY BABYYY</h1>
        <p>Dapat humot ang sigbin!</p>
    `;
}
