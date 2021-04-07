<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Aggiungi nuova</p>
        <button class="delete" aria-label="close" @click="openDialog(false)"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Nome</label>
          <div class="control">
            <input id="DescrInput" class="input" type="text" placeholder="Testo">
          </div>
        </div>
        <div class="field">
          <label class="label">Cliente</label>
          <div class="control">
            <div class="select">
              <select @change="onChange($event)" id="ClientSelect">
                <option value="Internal">Internal</option>
                <option value="External">External</option>
              </select>
            </div>
          </div>
          <div class="control" style="margin-top: 10px" v-if="client === 'External'">
            <input id="ClientNameInput" class="input" type="text" placeholder="Nome cliente">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" id="FavCheck">
              Aggiungi ai preferiti
            </label>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="createNewCard()">Conferma</button>
        <button class="button" @click="openDialog(false)">Annulla</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      client: 'Internal',
    }
  },
  methods: {
    openDialog(opt) {
      this.clearDialog();
      this.$parent.openDialog(opt);
    },

    onChange(event) {
      this.client = event.target.value;
    },

    createNewCard() {
      this.$parent.createNewCard();
    },

    clearDialog() {
      document.getElementById("DescrInput").value = '';
      document.getElementById("ClientSelect").value = 'Internal';
      this.client = 'Internal';
      document.getElementById("FavCheck").checked = false;
    },

    createNewCard() {
      var descr = document.getElementById("DescrInput").value;
      var fav = document.getElementById("FavCheck").checked || '';
      var client = document.getElementById("ClientSelect").value;

      if (client === "External")
        client = document.getElementById("ClientNameInput").value;

      if (fav)
        fav = 'X';
      
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/foglio1';
      let body = {
        foglio1: {
          name: descr,
          client: client,
          favorite: fav
        }
      }

      axios.post(url, {
        foglio1: {
          name: descr,
          client: client,
          favorite: fav
        }
      })
      .then((response) => {
        this.$parent.openDialog(false);
        this.$parent.readData();
        this.clearDialog();
      }, (error) => {
        console.log(error);
      });
    }
  }
}
</script>