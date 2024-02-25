
 // ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

 document.getElementById("titolo").innerText= "Nuovo Shop !offerte Speciali!"

 // ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

 document.querySelectorAll("body").style.backgroundColor = red;

 // ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel fotter in un altro, fittizio


 function cambiaIndirizzo() {
    const nuovoIndirizzo = "Indirizzo Fittizio";
    document.getElementById("footer").innerText = nuovoIndirizzo;
     }

   //  document.getElementById("footer").innerText= "un'altro indrizzo"

 // ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

 //let links =document.getElementsByTagName("a");

 //for ( let i = 0; i < links.length; i++)
 // inks[i].classList.add{"classe nuova"}

 function aggiungiClasseLinkAmazon() {
    let linkAmazon = document.querySelectorAll("a");
    linkAmazon.forEach(function(link) {
        link.classList.add('link-amazon'); // Aggiunge la classe 'link-amazon' ai link Amazon
    });
    }

 // ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; 
 // questa classe deve modificare la visibilità/invisibilità dell'immagine

 function modificaVisibilitaImmagini() {
    let immagini = document.getElementsByClassName('immagine-tabella');
    
    for (let i = 0; i < immagini.length; i++) {
        immagini[i].classList.toggle('immagine-nascosta');
    }
    }

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata