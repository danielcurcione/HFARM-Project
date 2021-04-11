<template>
  <div>
    
    <div class="content grid">
      <div class="card-item" @click="openDialog(true)">
        <Card :noContent="true"/>
      </div>
      <div v-for="item in data" :key="item.id" class="card-item">
        <!-- <nuxt-link :to="'/' + item.client + '/' + item.name"> -->
          <Card :id="item.id" :title="item.name" :client="item.client" :fav="item.favorite"/>
        <!-- </nuxt-link> -->
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
import { SpringSpinner } from 'epic-spinners'

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
    },

    addToFav(obj) {
      this.$parent.addToFav(obj);
    },

    remove(obj) {
      this.$parent.remove(obj);
    }
  },
  components: {
    Card, AddDialog, SpringSpinner
  }
}
</script>