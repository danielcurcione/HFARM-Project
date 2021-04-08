<template>
  <div class="container">
    <div>

      <Header title="Candidates" />

      <!-- <h1 class="title"> {{ slug }} in {{ type }} </h1> -->

      <div class="job-description">
        
      </div>


      <div v-show="noteDialog">
        <NoteDialog :name="noteName"/>
      </div>

      <div class="candidates">
        <Table :data="items"/>
      </div>
      
    
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
          name: 'Daniel Curcione',
          level: 'Junior',
          client: 'Internal',
          note: 'X'
        }, {
          name: 'Mario Rossi',
          level: 'Executive',
          client: 'Luxottica',
          note: ''
        }, {
          name: 'Luigi Orlando',
          level: 'SR Manager',
          client: 'Internal',
          note: 'X'
        }],
        noteDialog: false,
        noteName: ''
      }
    },
    methods: {
      search(s) {
        if (s === '')
          return; // read data

        var list = [];

        this.items.forEach(element => {
          if (element.name.includes(s))
              list.push(element)
        });

        this.items = list;
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