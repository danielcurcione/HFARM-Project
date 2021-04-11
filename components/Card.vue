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
        <div class="icon" v-if="fav === 'X'" @click="addToFav(false)">
          <img src="../assets/fav-active.svg" width="15px">
        </div>
        <div class="icon" v-else @click="addToFav(true)">
          <img src="../assets/fav.svg" width="15px">
        </div>
        <div class="icon" @click="remove()">
          <img src="../assets/trash.svg" width="15px">
        </div>
      </header>
      <nuxt-link :to="'/' + client + '/' + title" style="color: black;">
        <div class="card-content">
          <div class="content">
              {{ title }} &#8599
          </div>
        </div>
      </nuxt-link>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'client', 'fav', 'noContent'],
  data() {
    return {
      card: {
        name: this.title,
        client: this.client,
        favorite: this.favorite,
        id: this.id
      }
    }
  },
  methods: {
    addToFav (opt) {
      if (opt)
        this.card.favorite = "X"
      else
        this.card.favorite = ""

      this.$parent.addToFav(this.card);
    },

    remove() {
      this.$parent.remove(this.card);
    }
  }
}
</script>