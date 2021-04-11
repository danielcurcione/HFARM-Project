<template>
  <div class="candidates-items">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th width="20%">Candidates</th>
          <th width="15%">Client</th>
          <th width="20%">Senior level</th>
          <th width="25%">Call they applied to</th>
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
              <td width="20%"> {{ item.candidates }} </td>
              <td width="15%" :class="'client-input ' + item.client"> {{ item.client }} </td>
              <td width="20%"> {{ item.seniorLevel }} </td>
              <td width="25%"> {{ item.callTheyAppliedTo }} </td>
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