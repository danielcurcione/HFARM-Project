<template>
  <div>
    <div>

      <Header title="Candidates" searchFilter="true" :sortData="filters"/>

      <div v-show="noteDialog">
        <NoteDialog :name="noteName"/>
      </div>

      <div class="candidates">
        <CandidatesTable :data="candidates"/>
      </div>


      

      <!-- <div class="myloader" v-show="loader">
        <div class="dot-falling"></div>
      </div> -->
      <!-- <div class="candidates" v-show="!loader">
        <Table :data="candidates"/>
      </div> -->
    
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      candidates: [],
      noteDialog: false,
      noteName: '',
      filters: ['All', 'Available', 'Refused']
    }
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData(filter) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates';
      var list = [];
    
      axios.get(url).then(response => {
        if (filter) {
          response.data.candidates.forEach(element => {
            if (element.candidates.includes(filter))
              list.push(element);
          });
        } else {
          response.data.candidates.forEach(element => {
            list.push(element);
          });
        }

        this.candidatesBk = list;
        this.candidates = list;
        this.resetFilter();
      });
    },

    search(s) {
      this.readData(s);
    },

    removeCandidate(id) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates/' + id;
      
      axios.delete(url).then((response) => {
        this.readData();
      }, (error) => {
        console.log(error);
      });
    },

    openDialog (opt, name) {
      this.noteDialog = opt;
      this.noteName = name;
    },

    changeTab(key) {
      var tempList = [];

      if (key != 'All') {
        this.candidatesBk.forEach(element => {
          if (element.availability === key) {
            tempList.push(element);
          }
        });

        this.candidates = tempList;
      } else {
        this.candidates = this.candidatesBk;
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
  },
  async asyncData({ params }) {
    const slug = params.slug
    const type = params.type
    return { slug, type }
  }
}
</script>