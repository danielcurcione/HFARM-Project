<template>
  <div class="candidates-items">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th width="2%"></th>
          <th width="23%">Candidates</th>
          <th width="10%">Client</th>
          <th width="30%">Application</th>
          <th width="15%">Senior level</th>
          <th width="10%">Notes</th>
          <th width="10%"></th>
        </tr>
      </thead>
    </table>

    <div class="scoll-table">
      <table class="table is-fullwidth table-items">
        <tbody>
          <template v-for="item in data">
            <tr :key="item.id" style="margin-top: 5px">
              <td width="2%">
                <div class="icon-refused" v-if="item.availability === 'Refused'"></div>
                <div class="icon-availability" v-else></div>
              </td>
              <td width="23%"> {{ item.candidates }} </td>
              <td width="10%" :class="'client-input ' + item.client"> {{ item.client }} </td>
              <td width="30%">
                <nuxt-link :to="'/' + item.client + '/' + item.application" style="color:black; text-decoration: underline">
                  {{ item.application }} &#8599
                </nuxt-link>
              </td>
              <td width="15%"> {{ item.seniorLevel }} </td>
              <td width="10%">
                <div v-if="item.notes === 'X'">
                  <button class="button is-white" @click="openDialog(true, item.candidates)">
                    <img src="../assets/note.svg" width="20px">
                  </button>
                </div>
              </td>
              <td width="10%">
                <div>
                  <button class="button is-white" @click="removeCandidate(item.id)">
                    <img src="../assets/trash.svg" width="20px">
                  </button>
                </div>
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
  props: ['data'],
  methods: {
    openDialog (opt, name) {
      this.$parent.openDialog(opt, name)
    },

    removeCandidate(id) {
      this.$parent.removeCandidate(id);
    }
  }
}
</script>