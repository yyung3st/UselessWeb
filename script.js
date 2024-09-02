document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del form (invio)

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Semplice validazione
    if (name && email && message) {
        alert(`Grazie per il messaggio, ${name}! Ti verremmo a prendere presto.`);
        // Puoi aggiungere qui il codice per inviare i dati del form a un server
        document.getElementById("contact-form").reset(); // Resetta il form
    } else {
        alert("Per favore, compila tutti i campi.");
    }
});