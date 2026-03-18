document.addEventListener('DOMContentLoaded', () => {
    // Reveal On Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Mouse Glow Effect
    const glow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    // Smooth Back to Top
    document.getElementById('backToTop').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


const voiceAudio = document.getElementById('myVoice');
const playBtn = document.getElementById('playAudioBtn');
const audioIcon = document.getElementById('audioIcon');
const audioText = document.getElementById('audioText');

playBtn.addEventListener('click', () => {
    if (voiceAudio.paused) {
        voiceAudio.play();
        audioIcon.classList.replace('fa-play', 'fa-pause');
        audioText.innerText = "Playing...";
    } else {
        voiceAudio.pause();
        audioIcon.classList.replace('fa-pause', 'fa-play');
        audioText.innerText = "Listen to my Voice";
    }
});

// অডিও শেষ হয়ে গেলে আবার আগের অবস্থায় ফিরে আসা
voiceAudio.onended = function() {
    audioIcon.classList.replace('fa-pause', 'fa-play');
    audioText.innerText = "Listen to my Voice";
};







document.querySelectorAll('.open-image').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // পেজ রিলোড আটকাবে
        const imageUrl = this.getAttribute('href');
        
        // একটি সিম্পল পপ-আপ উইন্ডো তৈরি করবে
        window.open(imageUrl, 'Image', 'width=800,height=600,resizable=yes');
    });
});
