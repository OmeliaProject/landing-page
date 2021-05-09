const contactSend = document.querySelector('#contact');
const contactValue = document.querySelector('#contact-value');


contactValue.addEventListener('change', (event) => {
    contactSend.action = "mailto:omelia.contact@gmail.com?subject=Visiteur%20Site%20Vitrine&body=" + contactValue.value
    console.log(contactSend.action)
});
