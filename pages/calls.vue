<template>
  <div>

    <Header title="Calls" />
    <Calls :data="cards"/>
    
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
    readData(filter) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards';
      var list = [];
    
      axios.get(url).then(response => {
        if (filter) {
          response.data.cards.forEach(element => {
            if (element.name.includes(filter))
              list.push(element);
          });
        } else {
          response.data.cards.forEach(element => {
            list.push(element);
          });
        }

        this.cards = list.reverse();
      })
    },

    search(s) {
      this.readData(s);
    },
  }
}
</script>