<template>
  <div class="candidates-items call-table">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th width="20%">Candidates</th>
          <th width="15%">Senior level</th>
          <th width="35%">Status</th>
          <th width="10%">Notes</th>
          <th width="10%"></th>
        </tr>
      </thead>
    </table>

    <div>
      <table class="table is-fullwidth table-items">
        <tbody>
          <template v-for="item in data">
            <tr :key="item.id">
              <td width="20%"> {{ item.candidates }} </td>
              <td width="15%"> {{ item.seniorLevel }} </td>
              <td width="35%" class="status-cell">
                <div class="select is-rounded">
                  <select @change="onStatusChange($event, item)" id="ClientSelect">
                    <template v-for="value in status">
                      <option :key="value" :value="value" v-if="value === item.status" selected> {{ value }} </option>
                      <option :key="value" :value="value" v-else> {{ value }} </option>
                    </template>
                  </select>
                </div>
              </td>
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
  data() {
    return {
      status: ['Scouting','Technical interview','Preliminary interview','Assessment'],
    }
  },
  methods: {
    openDialog (opt, name) {
      this.$parent.openDialog(opt, name)
    },

    removeCandidate(id) {
      this.$parent.removeCandidate(id);
    },

    onStatusChange(event, item) {
      item.status = event.target.value;
      this.$parent.editStatusCandidate(item);
    }
  }
}
</script>