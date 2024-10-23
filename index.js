// Menambahkan efek animasi saat menggulir ke bagian tertentu
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            // Hapus kelas 'clicked' dari semua link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('clicked'));
            
            // Tambahkan kelas 'clicked' ke link yang diklik
            this.classList.add('clicked');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

// Menambahkan efek fade-in untuk setiap section
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Menampilkan alert saat tombol "Get in Touch" diklik
document.querySelector('.btn').addEventListener('click', function() {
    alert('Terima kasih telah menghubungi saya! Saya akan segera merespons.');
});

// Menambahkan efek hover pada tombol
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

const text = "Hi, I'm Muhammad Zaim El Yafi";
let index = 0;
const typingTextElement = document.getElementById("typing-text");

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // kecepatan mengetik (dalam milidetik)
    }
}

type(); // memulai efek mengetik