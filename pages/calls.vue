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
      var fav = [];
    
      axios.get(url).then(response => {
        var cards = response.data.cards;

        if (filter) {
          cards.forEach(element => {
            if (element.name.includes(filter)) {
              if (element.favorite === 'X') {
                fav.push(element);
              } else {
                list.push(element)
              }
            }
          });
        } else {
          cards.forEach(element => {
            if (element.favorite === 'X') {
              fav.push(element);
            } else {
              list.push(element)
            }
          });
        }

        fav = fav.reverse();
        list = list.reverse();
        this.cards = fav.concat(list);

        this.$root.$refs.Navbar.readData();
      })
    },

    search(s) {
      this.readData(s);
    },

    addToFav(obj) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards/' + obj.id;

      axios.put(url, {
        card: obj
      })
      .then((response) => {
        this.readData();
      }, (error) => {
        console.log(error);
      });
    },

    remove(obj) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards/' + obj.id;
      
      axios.delete(url).then((response) => {
        this.readData();
      }, (error) => {
        console.log(error);
      });
    }
  }
}
</script>