// الموقع الآن يعمل في "Professional Mode"
document.addEventListener('DOMContentLoaded', () => {
    console.log("Research Portfolio: Secure Access Established.");
    
    // Smooth scroll فقط للتنقل بهدوء
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});