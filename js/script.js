// toggle icone navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

// les liens actives
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top= window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top< offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }
    })
    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);   

    
}
// animation
ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration:2000,
     delay:200
    
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: top });
    ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: bottom });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: left });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: right });

    // typed.js
const typed=new Typed('.multiple-text',{
    strings:['Developpeuse Front-end', 'Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire

        // Récupérer les valeurs des champs de formulaire
        const nomComplet = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const telephone = form.querySelector('input[type="number"]').value;
        const objet = form.querySelector('input[type="text"]').value;
        const message = form.querySelector('textarea').value;

        // Construire le contenu de l'e-mail
        const contenuEmail = `
            Nom Complet: ${nomComplet}
            Adresse email: ${email}
            Numéro de téléphone: ${telephone}
            Objet de l'e-mail: ${objet}
            Message: ${message}
        `;

        // Envoyer l'e-mail (exemple)
        envoyerEmail('dialobe110@email.com', 'Nouveau message de votre formulaire de contact', contenuEmail);
    });


});

