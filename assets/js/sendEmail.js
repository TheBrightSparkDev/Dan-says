console.log("loaded");
function sendMail(contactForm){
    emailjs.send("service_vgfb6oi","template_tnueked",{
        from_name: contactForm.name.value,
        suggestion: contactForm.suggestion.value,
        reference: Math.floor(Math.random()*1000000),
        from_email: contactForm.email.value,
        })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });     
    return false;
}