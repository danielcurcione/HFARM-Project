<template>
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
      <template v-for="item in data">
        <tr :key="item.id">
          <td> {{ item.candidates }} </td>
          <td> {{ item.seniorLevel }} </td>
          <td> {{ item.callTheyAppliedTo }} </td>
          <td>
            <div v-if="item.notes === 'X'">
              <button class="button is-white" @click="openDialog(true, item.candidates)">
                <img src="../assets/note.svg" width="20px">
              </button>
            </div>
          </td>
          <td>
            <OptionButton />
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    openDialog (opt, name) {
      this.$parent.openDialog(opt, name)
    },
  }
}
</script>