

const btnNo = document.getElementById('btn-no');
    const successOverlay = document.getElementById('success-overlay');
    const burstContainer = document.getElementById('burst-container');

// Move No button
function moveButton() {
    const padding = 20;
    const btnRect = btnNo.getBoundingClientRect();
    
    const maxX = window.innerWidth - btnRect.width - padding;
    const maxY = window.innerHeight - btnRect.height - padding;
    
    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
    btnNo.style.zIndex = '50';
    btnNo.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
}

btnNo.addEventListener('mouseenter', moveButton);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});
