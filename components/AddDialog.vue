<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Aggiungi nuova</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Nome</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>
        <div class="field">
          <label class="label">Cliente</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              Aggiungi ai preferiti
            </label>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Conferma</button>
        <button class="button">Annulla</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {

}
</script>