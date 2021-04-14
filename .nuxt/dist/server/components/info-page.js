exports.ids = [8];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trash.bb8494a.svg";

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODguMDIyIiBoZWlnaHQ9IjQ2Ni44MzQiIHZpZXdCb3g9IjAgMCA0ODguMDIyIDQ2Ni44MzQiPgogIDxnIGlkPSJzdGFyLXN2Z3JlcG8tY29tIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMC41OTMpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNNDcxLjU2MywxNzMuNzc4bC0xNDUuNS0yMC44LTY0LjQtMTMyYy04LTE1LjQtMzAtMTIuMi0zNS4zLDBsLTY0LjQsMTMyLTE0NS42LDIwLjhjLTE2LjQsMS0yMS42LDIwLjktMTAuNCwzMy4ybDEwNSwxMDIuOS0yNSwxNDQuNWMtMi45LDE3LjgsMTYuNywyNy44LDI4LjEsMjAuOGwxMjkuOS02OC42LDEyOS45LDY3LjZjMTMuNiw3LDI5LjgtMi44LDI4LjEtMTkuN2wtMjUtMTQ0LjYsMTA1LTEwMi45QzQ5NC42NjMsMTkzLjQ3OCw0ODUuNTYzLDE3NS40NzgsNDcxLjU2MywxNzMuNzc4Wm0tMTI4LjksMTE0LjNjLTQuMiw1LjItNi4yLDExLjQtNS4yLDE3LjdsMTkuNywxMTYuNC0xMDMuOS01NS4xYy02LjctMi44LTEzLTIuOC0xOC43LDBsLTEwMy45LDU1LjEsMTkuNy0xMTYuNGMxLTcuMy0xLTEzLjUtNS4yLTE3LjdsLTg0LjEtODIuMSwxMTYuNC0xNi42YTE5LjAzNSwxOS4wMzUsMCwwLDAsMTQuNi0xMC40bDUyLTEwNSw1MiwxMDVjMy4xLDUuMiw4LjMsOS40LDE0LjYsMTAuNGwxMTYuMiwxNi42WiIvPgogIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InfoPage.vue?vue&type=template&id=0333df31&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"infopage"},[_vm._ssrNode("<div class=\"content\"><article class=\"message is-info\"><div class=\"message-body\">\n        Questo progetto e' stato realizzato per una candidatura ad H-FARM, in base ad un brief specifico.\n      </div></article> <h3><span>#</span> Presentazione e aspetti tecnici</h3> <p>\n      Mistral è una demo di una già esistente applicazione per il management HR. <br>\n      L’intero progetto è sviluppato con un framework VueJS (<a href=\"https://nuxtjs.org/\">Nuxt</a>) e gli elementi grafici sono basati sulla libreria css <a href=\"https://bulma.io/\">Bulma</a> al quale sono stati aggiunti, personalizzati e talvolta ricreati alcuni componenti. <br><br>\n      I dati vengono letti, modificati e/o eliminati tramite le API di <a href=\"https://sheety.co/\">Sheety</a>, che vanno a lavorare con un’intuitiva integrazione di un file google spreadsheets. <br>\n      Questo <a href=\"https://docs.google.com/spreadsheets/d/1SpXE2sQsiYNWtDl7DOilz-QuqjGXSb-70cDESItfkt8/edit?usp=sharing\">file</a> contiene tutti i dati dell’app, funge quindi da Database. <br>\n      Qui i dati sono disposti in fogli (che sostituiscono le tabelle DB) e ogni colonna rappresenta una proprietà. <br>\n      La prima riga (header di tabella) serve ad identificare le colonne, dalla seconda in poi vengono inseriti i dati che le API andranno a richiamare, ritornando sempre oggetti JSON. <br><br>\n      In questo caso non esiste un vero e proprio sistema di Backend, ne un’integrazione di Database. <br>\n      La scelta è stata fatta innanzitutto per il poco tempo a disposizione, ma anche perchè nella progettazione iniziale si è valutata l’opzione di far utilizzare l’app direttamente da browser, senza necessità di fare installazioni in locale o di processi di build o deploy. <br>\n      L’app è pronta all’uso, valutando l’integrazione con un database i dati sarebbero dovuti essere esposti in un cloud, con diversi problemi di integrazione di vari sistemi, di licenze (talvolta a pagamento) oltre alla personale mancanza di competenze specifiche per lo sviluppo.\n    </p> <h3><span>#</span> Funzionamento</h3> <p>\n      L’applicazione gestisce un portale di risorse umane. <br>\n      Dalla dashboard abbiamo i collegamenti diretti alle due pagine più importanti dell’app: le candidature e le posizioni aperte. <br>\n      Le stesse pagine sono raggiungibili tramite menu laterale, sempre visibile e ben organizzato. <br><br>\n      Nella pagina delle candidature c’è la possibilità di visionare tutti i profili, di cercarne di specifici tramite barra di ricerca, oppure di filtrarli in base alla disponibilità del profilo (disponibile, rifiutato). <br>\n      Ogni candidatura presenta subito la possibilità di capire lo stato di disponibilità in base al colore affianco al nome, oltre a sapere a che posizione si è candidato e con quale ruolo. Ogni profilo può essere eliminato dall’elenco, cliccando nel tasto del cestino, oppure si può visionare una nota correlata. <br><br>\n      Rispettivamente alla posizione di candidatura, c’è un link diretto alla pagina dell’application, così da poter visionare lo stato e le altre candidature correlate.\n      Nella pagina delle application (Calls) si possono visionare delle card identificative, con alcune informazioni generali: se l’application è interna o per un cliente esterno (con nome relativo al cliente) oppure se è segnata come preferita. <br>\n      C’è la possibilità di eliminare, tramite <button class=\"button is-light is-small\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" width=\"15px\"></button>, l’application, oppure di inserirla tra i preferiti, cliccando su <button class=\"button is-light is-small\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" width=\"15px\"></button>. <br>\n      Le card possono essere filtrate in base alla categoria del cliente (interno, esterno) oppure ricercate in base al nome assegnato. <br><br>\n      Per creare una nuova application basterà selezionare la prima card adibita alla creazione e si aprirà una pagina di inserimento dati (form) dove si andranno ad inserire il nome, il cliente e la preferenza (eventuale) dell’application. <br>\n      Alla conferma questa comparirà nella lista assieme alle altre.      \n    </p> <h3><span>#</span> Possibili implementazioni</h3> <p>\n      La gestione dei dati, delle sessioni e delle autorizzazioni, come anche la sicurezza del funzionamento e della privacy, possono essere gestiti tramite il sistema di autorizzazione Google (OAuth 2.0). <br>\n      Ogni utente potrebbe registrarsi col proprio account google e accedere all’app. In questo modo si potrebbero utilizzare le API di Google per accedere al file che contiene i dati. <br><br>\n      Le application potrebbero avere nuovi parametri tra cui: la data di inizio e quella di fine (attualmente solo simulati in modo random), cosi da poter filtrare le application in base ad uno specifico mese di scadenza, oppure organizzandole per priorità. <br><br>\n      Altre eventuali implementazioni potrebbero riguardare i profili dei candidati, con una persona pagina dedicata con molte più informazioni personali e/o punteggi assegnati dai recruiter.\n    </p> <h3><span>#</span> Nota personale</h3> <p>\n      Dato il brief iniziale sono stati ripensati alcuni elementi grafici e aggiunte nuove sezione, integrando e mantenendo i componenti e il flusso utente proposto. <br>\n      Il layout dell’applicazione e’ stato interamente pensato e disegnato, utilizzando alcune buone linee guida del web design. <br><br>\n      Il progetto e’ stato creato e mantenuto aggiornato in una personale repository <a href=\"https://github.com/danielcurcione/HFARM-Project\">GitHub</a>, pubblica e a disposizione. <br>\n      A questa repository e’ stato implementato il sistema automatico di build &amp; deploy di <a href=\"https://www.netlify.com/\">Netlify</a>, sistema di hosting dove e’ appoggiato il progetto. <br>\n      Questa piattaforma aggiorna automaticamente l’app in base all’ultima modifica caricata nella repository git. <br><br>\n      Le API utilizzate sono state acquistate con piano mensile, personale, e permettono di avere fino a 50.000 richieste (lettura, scrittura, modifica, eliminazione) al mese. <br>\n      L’app e’ quindi funzionante finche’ non si raggiunge il limite. (Per l’intero sviluppo e test ne sono state usate circa 2.000).  <br><br></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/InfoPage.vue?vue&type=template&id=0333df31&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InfoPage.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d4a01ea0"
  
)

/* harmony default export */ var InfoPage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=info-page.js.map