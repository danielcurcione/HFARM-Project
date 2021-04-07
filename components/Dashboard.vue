<template>
  <div>
    
    <div class="content grid">
      <div class="card-item" @click="openDialog(true)">
        <Card :noContent="true"/>
      </div>
      <div class="card-item">
        <nuxt-link to="/Internal/PosizioneN">
          <Card title="Posizione n" client="Internal" fav=""/>
        </nuxt-link>
      </div>
      <div v-for="item in data" :key="item.title" class="card-item">
        <Card :title="item.name" :client="item.client" :fav="item.favorite"/>
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