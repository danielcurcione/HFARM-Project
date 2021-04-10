<template>
  <div>
    <div>

      <Header title="Candidates" />

      <div v-show="noteDialog">
        <NoteDialog :name="noteName"/>
      </div>

      <div class="candidates">
        <Table :data="candidates"/>
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
      // loader: false
    }
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData(filter) {
      this.loader = true;
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

        // this.loader = false;
        this.candidates = list;
      });
    },

    search(s) {
      this.readData(s);
    },

    openDialog (opt, name) {
      this.noteDialog = opt;
      this.noteName = name;
    },
  },
  async asyncData({ params }) {
    const slug = params.slug
    const type = params.type
    return { slug, type }
  }
}
</script>