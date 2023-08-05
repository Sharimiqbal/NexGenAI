document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.querySelector('.btn-learn-more');
    const aboutSection = document.querySelector('#about');

    learnMoreBtn.addEventListener('click', function() {
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
