<template>
  <div class="navbar">

    <div class="logo">
      <img src="../assets/logo.png" width="35px">
      <span class="logo-title">HR Manager</span>
    </div>

    <div class="profile">
      <div class="avatar">
        <img src="../assets/avatar.jpg">
      </div>
      <div class="info">
        <span class="name">Daniel Curcione</span>
        <span class="role">HR Manager</span>
      </div>
    </div>

    <div class="navbar-menu">
      <aside class="menu">
        <ul class="menu-list">
          <li>
            <a>
              <nuxt-link to="/">
                <img src="../assets/dashboard.svg"> Dashboard
              </nuxt-link>
            </a>
          </li>
          <li>
            <a>
              <nuxt-link to="/candidates">
                <img src="../assets/candidates.svg"> Candidates
              </nuxt-link>
            </a>
          </li>
          <li>
            <a>
              <nuxt-link to="/calls">
                <img src="../assets/cards.svg"> Calls
              </nuxt-link>
            </a>
            <ul>
              <p class="menu-label">
                Internal
              </p>
              <template v-for="item in internal">
                <li :key="item.id">
                  <a>
                    <nuxt-link :to="'/' + item.client + '/' + item.name">
                      {{ item.name }}
                    </nuxt-link>
                  </a>
                </li>
              </template>
            </ul>
            <ul>
              <p class="menu-label">
                External
              </p>
              <template v-for="item in external">
                <li :key="item.id">
                  <a>
                    <nuxt-link :to="'/' + item.client + '/' + item.name">
                      {{ item.name }}
                    </nuxt-link>
                  </a>
                </li>
              </template>
            </ul>
          </li>
        </ul>
      </aside>
    </div>

    <nuxt-link to='/info'>
      <div class="profile info">
        <button class="button is-warning is-light">
          <img src="../assets/pin.svg" width="15px">
          Info
        </button>
      </div>
    </nuxt-link>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      internal: [],
      external: []
    }
  },
  created() {
    this.$root.$refs.Navbar = this;
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData(filter) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards';
      var listInternal = [];
      var listExternal = [];
    
      axios.get(url).then(response => {
        if (filter) {
          response.data.cards.forEach(element => {
            if (element.name.includes(filter))
              if (element.client === 'Internal')
                listInternal.push(element);
              else
                listExternal.push(element);
          });
        } else {
          response.data.cards.forEach(element => {
            if (element.client === 'Internal')
              listInternal.push(element);
            else
              listExternal.push(element);
          });
        }

        this.internal = listInternal.reverse();
        this.external = listExternal.reverse();
      })
    },

    search(s) {
      this.readData(s);
    },
  }
}
</script>