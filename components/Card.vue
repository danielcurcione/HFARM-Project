<template>
  <div class="card">

    <div v-if="noContent" class="add-button">
      <div class="card-content">
        <img src="../assets/add.svg" width="40px" height="40px">
      </div>
    </div>

    <div v-else>
      <header class="card-header">
        <p class="card-header-title">
          {{ client }}
        </p>
        <button class="button is-white">
          <div class="icon active" v-if="fav === 'X'">
            <img src="../assets/fav-active.svg" width="20px" height="20px">
          </div>
          <div class="icon active" v-else>
            <img src="../assets/fav.svg" width="20px" height="20px">
          </div>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          {{ title }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['title', 'client', 'fav', 'noContent'],
}
</script>