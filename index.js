// Menambahkan efek animasi saat menggulir ke bagian tertentu
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default dari anchor (navigasi)

        // Menggulung halaman ke elemen yang dituju dengan efek halus
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menambahkan event listener saat dokumen selesai dimuat
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

// Menggunakan Intersection Observer untuk efek fade-in
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        threshold: 0.1 // Ketika 10% dari elemen terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Menambahkan kelas 'visible' saat elemen terlihat
                observer.unobserve(entry.target); // Menghentikan pengamatan elemen ini
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element); // Memulai pengamatan untuk setiap elemen
    });
});

// Menambahkan efek fade-in untuk setiap section
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Ketika 10% dari section terlihat
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active'); // Menambahkan kelas saat section terlihat
            observer.unobserve(entry.target); // Menghentikan pengamatan elemen ini
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section); // Memulai pengamatan untuk setiap section
});

// Menampilkan alert saat tombol "Get in Touch" diklik
document.querySelector('.btn').addEventListener('click', function() {
    alert('Terima kasih telah menghubungi saya! Saya akan segera merespons.'); // Menampilkan pesan terima kasih
});

// Menambahkan efek hover pada tombol
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)'; // Meningkatkan ukuran tombol saat hover
        button.style.transition = 'transform 0.2s'; // Menambahkan transisi halus
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)'; // Kembali ke ukuran semula saat mouse keluar
    });
});

// Efek mengetik untuk teks tertentu
const text = "Hi, I'm Muhammad Zaim El Yafi";
let index = 0;
const typingTextElement = document.getElementById("typing-text");

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index); // Menambahkan karakter satu per satu
        index++;
        setTimeout(type, 100); // kecepatan mengetik (dalam milidetik)
    }
}

type(); // memulai efek mengetik