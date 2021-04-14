<template>
<div class="infopage">

  <div class="content">
    <article class="message is-info">
      <div class="message-body">
        Questo progetto e' stato realizzato per una candidatura ad H-FARM, in base ad un brief specifico.
      </div>
    </article>

    <h3><span>#</span> Presentazione e aspetti tecnici</h3>
    <p>
      Mistral è una demo di una già esistente applicazione per il management HR. <br>
      L’intero progetto è sviluppato con un framework VueJS (<a href="https://nuxtjs.org/">Nuxt</a>) e gli elementi grafici sono basati sulla libreria css <a href="https://bulma.io/">Bulma</a> al quale sono stati aggiunti, personalizzati e talvolta ricreati alcuni componenti. <br><br>
      I dati vengono letti, modificati e/o eliminati tramite le API di <a href="https://sheety.co/">Sheety</a>, che vanno a lavorare con un’intuitiva integrazione di un file google spreadsheets. <br>
      Questo <a href="https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing">file</a> contiene tutti i dati dell’app, funge quindi da Database. <br>
      Qui i dati sono disposti in fogli (che sostituiscono le tabelle DB) e ogni colonna rappresenta una proprietà. <br>
      La prima riga (header di tabella) serve ad identificare le colonne, dalla seconda in poi vengono inseriti i dati che le API andranno a richiamare, ritornando sempre oggetti JSON. <br><br>
      In questo caso non esiste un vero e proprio sistema di Backend, ne un’integrazione di Database. <br>
      La scelta è stata fatta innanzitutto per il poco tempo a disposizione, ma anche perchè nella progettazione iniziale si è valutata l’opzione di far utilizzare l’app direttamente da browser, senza necessità di fare installazioni in locale o di processi di build o deploy. <br>
      L’app è pronta all’uso, valutando l’integrazione con un database i dati sarebbero dovuti essere esposti in un cloud, con diversi problemi di integrazione di vari sistemi, di licenze (talvolta a pagamento) oltre alla personale mancanza di competenze specifiche per lo sviluppo.
    </p>

    <h3><span>#</span> Funzionamento</h3>
    <p>
      L’applicazione gestisce un portale di risorse umane. <br>
      Dalla dashboard abbiamo i collegamenti diretti alle due pagine più importanti dell’app: le candidature e le posizioni aperte. <br>
      Le stesse pagine sono raggiungibili tramite menu laterale, sempre visibile e ben organizzato. <br><br>
      Nella pagina delle candidature c’è la possibilità di visionare tutti i profili, di cercarne di specifici tramite barra di ricerca, oppure di filtrarli in base alla disponibilità del profilo (disponibile, rifiutato). <br>
      Ogni candidatura presenta subito la possibilità di capire lo stato di disponibilità in base al colore affianco al nome, oltre a sapere a che posizione si è candidato e con quale ruolo. Ogni profilo può essere eliminato dall’elenco, cliccando nel tasto del cestino, oppure si può visionare una nota correlata. <br><br>
      Rispettivamente alla posizione di candidatura, c’è un link diretto alla pagina dell’application, così da poter visionare lo stato e le altre candidature correlate.
      Nella pagina delle application (Calls) si possono visionare delle card identificative, con alcune informazioni generali: se l’application è interna o per un cliente esterno (con nome relativo al cliente) oppure se è segnata come preferita. <br>
      C’è la possibilità di eliminare, tramite <button class="button is-light is-small"> <img src="../assets/trash.svg" width="15px"> </button>, l’application, oppure di inserirla tra i preferiti, cliccando su <button class="button is-light is-small"> <img src="../assets/fav.svg" width="15px"> </button>. <br>
      Le card possono essere filtrate in base alla categoria del cliente (interno, esterno) oppure ricercate in base al nome assegnato. <br><br>
      Per creare una nuova application basterà selezionare la prima card adibita alla creazione e si aprirà una pagina di inserimento dati (form) dove si andranno ad inserire il nome, il cliente e la preferenza (eventuale) dell’application. <br>
      Alla conferma questa comparirà nella lista assieme alle altre.      
    </p>

    <h3><span>#</span> Possibili implementazioni</h3>
    <p>
      La gestione dei dati, delle sessioni e delle autorizzazioni, come anche la sicurezza del funzionamento e della privacy, possono essere gestiti tramite il sistema di autorizzazione Google (OAuth 2.0). <br>
      Ogni utente potrebbe registrarsi col proprio account google e accedere all’app. In questo modo si potrebbero utilizzare le API di Google per accedere al file che contiene i dati. <br><br>
      Le application potrebbero avere nuovi parametri tra cui: la data di inizio e quella di fine (attualmente solo simulati in modo random), cosi da poter filtrare le application in base ad uno specifico mese di scadenza, oppure organizzandole per priorità. <br><br>
      Altre eventuali implementazioni potrebbero riguardare i profili dei candidati, con una persona pagina dedicata con molte più informazioni personali e/o punteggi assegnati dai recruiter.
    </p>

    <h3><span>#</span> Nota personale</h3>
    <p>
      Dato il brief iniziale sono stati ripensati alcuni elementi grafici e aggiunte nuove sezione, integrando e mantenendo i componenti e il flusso utente proposto. <br>
      Il layout dell’applicazione e’ stato interamente pensato e disegnato, utilizzando alcune buone linee guida del web design. <br><br>
      Il progetto e’ stato creato e mantenuto aggiornato in una personale repository <a href="https://github.com/danielcurcione/HFARM-Project">GitHub</a>, pubblica e a disposizione. <br>
      A questa repository e’ stato implementato il sistema automatico di build & deploy di <a href="https://www.netlify.com/">Netlify</a>, sistema di hosting dove e’ appoggiato il progetto. <br>
      Questa piattaforma aggiorna automaticamente l’app in base all’ultima modifica caricata nella repository git. <br><br>
      Le API utilizzate sono state acquistate con piano mensile, personale, e permettono di avere fino a 50.000 richieste (lettura, scrittura, modifica, eliminazione) al mese. <br>
      L’app e’ quindi funzionante finche’ non si raggiunge il limite. (Per l’intero sviluppo e test ne sono state usate circa 2.000).  <br><br>
    </p>


  </div>

</div>
</template>