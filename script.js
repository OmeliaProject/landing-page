const contactSend = document.querySelector('#contact-send');
const contactValue = document.querySelector('#contact-value');


contactValue.addEventListener('change', (event) => {
    contactSend.href = "mailto:omelia.contact@gmail.com?subject=Visiteur%20Site%20Vitrine&body=" + contactValue.value
});
