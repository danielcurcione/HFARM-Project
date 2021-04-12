<template>
  <div>
    <div>

      <Header :title="slug" />

      <JobDescription />

      <div v-show="noteDialog">
        <NoteDialog :name="noteName"/>
      </div>

      <article class="message is-warning" v-if="noData">
        <div class="message-body">
          In questa selezione non esistono ancora dei candidati.
        </div>
      </article>

      <div class="candidates" style="padding-top: 0" v-else>
        <CallTable :data="candidates"/>
      </div>
    
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      noData: false,
      candidates: [],
      noteDialog: false,
      noteName: ''
    }
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData() {
      this.loader = true;
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates';
      var list = [];
    
      axios.get(url).then(response => {
        if (this.slug) {
          response.data.candidates.forEach(element => {
            if (element.application.includes(this.slug) && element.client.includes(this.type))
              list.push(element);
          });
        } else {
          response.data.candidates.forEach(element => {
            list.push(element);
          });
        }

        this.candidates = list;

        if (list.length > 0)
          this.noData = false;
        else
          this.noData = true;
      });
    },

    openDialog (opt, name) {
      this.noteDialog = opt;
      this.noteName = name;
    },

    removeCandidate(id) {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates/' + id;
      
      axios.delete(url).then((response) => {
        this.readData();
      }, (error) => {
        console.log(error);
      });
    },
  },
  async asyncData({ params }) {
    const slug = params.slug
    const type = params.type

    return { slug, type }
  }
}
</script>