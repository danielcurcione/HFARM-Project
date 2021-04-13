<template>
  <div>

    <Header title="Calls" searchFilter="true" :sortData="filters"/>
    <Calls :data="cards"/>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
      cardsBk: [],
      filters: ['All', 'Internal', 'External']
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
        this.cardsBk = this.cards;
        this.resetFilter();
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
    },

    changeTab(key) {
      var tempList = [];

      if (key != 'All') {
        this.cardsBk.forEach(element => {
          if (key === 'Internal') {
            if (element.client === key)
              tempList.push(element)
          } else {
            if (element.client != 'Internal') 
              tempList.push(element)
          }
        });

        this.cards = tempList;
      } else {
        this.cards = this.cardsBk;
      }

      this.filters.forEach(element => {
        if (element === key)
          document.getElementById('filter_' + element).classList.add('is-active');
        else
          document.getElementById('filter_' + element).classList.remove('is-active');
      });
    },

    resetFilter() {
      this.filters.forEach(element => {
        document.getElementById('filter_' + element).classList.remove('is-active');
      });
      document.getElementById('filter_All').classList.add('is-active');
    }
  }
}
</script>