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
        <tr :key="item.name">
          <td> {{ item.name }} </td>
          <td> {{ item.level }} </td>
          <td> {{ item.client }} </td>
          <td>
            <div v-if="item.note === 'X'">
              <button class="button is-white" @click="openDialog(true, item.name)">
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