<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add new call</p>
        <button class="delete" aria-label="close" @click="openDialog(false)"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input id="DescrInput" class="input" type="text" placeholder="Text">
          </div>
        </div>
        <div class="field">
          <label class="label">Customer</label>
          <div class="control">
            <div class="select">
              <select @change="onChange($event)" id="ClientSelect">
                <option value="Internal">Internal</option>
                <option value="External">External</option>
              </select>
            </div>
          </div>
          <div class="control" style="margin-top: 10px" v-if="client === 'External'">
            <input id="ClientNameInput" class="input" type="text" placeholder="Customer name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" id="FavCheck">
              Add to favorite
            </label>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="createNewCard()">Confirm</button>
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
      
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards';

      axios.post(url, {
        card: {
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