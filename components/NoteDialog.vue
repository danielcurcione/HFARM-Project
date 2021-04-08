<template>
  <div class="note-dialog">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body custom-modal-card-body">
          <button class="delete" aria-label="close" @click="openDialog(false)"></button>
          <div class="field">
            <label class="label">Nota per {{ name }} </label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data() {
    return {

    }
  },
  methods: {
    openDialog(opt) {
      this.$parent.openDialog(opt);
    },
  }
}
</script>