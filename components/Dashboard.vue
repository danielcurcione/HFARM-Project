<template>
  <div>
    
    <div class="content grid">
      <div class="card-item" @click="openDialog(true)">
        <Card :noContent="true"/>
      </div>
      <div v-for="item in data" :key="item.title" class="card-item">
        <nuxt-link to="/Internal/PosizioneN">
          <Card :title="item.name" :client="item.client" :fav="item.favorite"/>
        </nuxt-link>
      </div>
    </div>

    <div class="add-dialog" v-show="addDialog">
      <AddDialog />
    </div>
    
  </div>
</template>

<script>
import Card from '../components/Card';
import AddDialog from '../components/AddDialog';

export default {
  props: ['data'],
  data() {
    return {
      addDialog: false,
    }
  },
  methods: {
    openDialog (opt) {
      this.addDialog = opt;
    },

    readData() {
      this.$parent.readData();
    }
  },
  components: {
    Card, AddDialog
  }
}
</script>