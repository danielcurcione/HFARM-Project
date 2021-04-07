<template>
  <div class="container">
    <div>

      <Header title="Candidates" />

      <!-- <h1 class="title"> {{ slug }} in {{ type }} </h1> -->

      <br>

      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Candidates</th>
            <th>Senior level</th>
            <th>Call they applied to</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in items">
            <tr :key="item.name">
              <th> {{ item.name }} </th>
              <td> {{ item.level }} </td>
              <td> {{ item.client }} </td>
              <td>
                <div v-if="item.note === 'X'">
                  <button class="button is-white">
                    <img src="../../assets/note.svg" width="20px">
                  </button>
                </div>
              </td>
              <td>
                <button class="button is-white">
                  <img src="../../assets/edit.svg" width="20px">
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
        {
          name: 'Daniel Curcione',
          level: 'Junior',
          client: 'Me stesso',
          note: 'X'
        },
        {
          name: 'Mario Rossi',
          level: 'Executive',
          client: '',
          note: ''
        },
        {
          name: 'Luigi Orlando',
          level: 'SR Manager',
          client: '',
          note: 'X'
        },
        ]
      }
    },
    methods: {
      search(s) {
        if (s === '') {
          // read data
          return;
        }

        var list = [];

        this.items.forEach(element => {
          if (element.name.includes(s))
              list.push(element)
        });

        this.items = list;
      }
    },
    async asyncData({ params }) {
      const slug = params.slug
      const type = params.type
      return { slug, type }
    }
  }
</script>