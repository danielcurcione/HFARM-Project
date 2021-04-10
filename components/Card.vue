<template>
  <div class="card">

    <div v-if="noContent" class="add-button">
      <div class="card-content">
        <img src="../assets/add.svg" width="35px">
      </div>
    </div>

    <div v-else>
      <header class="card-header">
        <p class="card-header-title">
          <span v-if="client === 'Internal'"> {{ client }} </span>
          <span v-else class="external" > {{ client }} </span>
        </p>
        <div class="icon active" v-if="fav === 'X'">
          <img src="../assets/fav-active.svg" width="15px">
        </div>
        <div class="icon active" v-else>
          <img src="../assets/fav.svg" width="15px">
        </div>
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