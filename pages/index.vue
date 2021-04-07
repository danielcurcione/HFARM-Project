<template>
  <div class="container">
    <div>

      <Header title="Calls" />
      <Dashboard :data="cards"/>
    
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData() {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/foglio1';
      var list = [];
    
      axios.get(url).then(response => {
        response.data.foglio1.forEach(element => {
          list.push(element);
        });

        this.cards = list.reverse();
      })
    },

    search(s) {
      if (s === '') {
        this.readData();
        return;
      }

      var list = [];

      this.cards.forEach(element => {
        if (element.name.includes(s))
            list.push(element)
      });

      this.cards = list;
    },
  }
}
</script>