function triggerContentGlitch() {
    // اختار العناصر اللي إنت عاوزها تتفكك بس
    const elementsToGlitch = document.querySelectorAll('h1, h2, p, .profile-hex, .btn, .social-icons');
    
    const nextInterval = Math.random() * 6000 + 3000;

    setTimeout(() => {
        // إضافة الكلاس لكل عنصر لوحده
        elementsToGlitch.forEach(el => el.classList.add('glitch-item-active'));
        
        // شيل الكلاس بعد لحظة
        setTimeout(() => {
            elementsToGlitch.forEach(el => el.classList.remove('glitch-item-active'));
            triggerContentGlitch();
        }, 300);
        
    }, nextInterval);
}

document.addEventListener('DOMContentLoaded', triggerContentGlitch);