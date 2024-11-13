/* document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.portada');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    document.getElementById('buttonprev').addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    document.getElementById('buttonnext').addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Initialize the slider
    showSlide(currentSlide);
}); */

const portada1 = document.getElementById("portada1");
const portada2 = document.getElementById("portada2");

document.getElementById("buttonprev").addEventListener("click",(e)=>{
    portada1.classList.toggle("active");
    portada2.classList.toggle("active");
});

document.getElementById("buttonnext").addEventListener("click",(e)=>{
    portada1.classList.toggle("active");
    portada2.classList.toggle("active");
});