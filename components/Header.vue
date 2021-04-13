<template>
  <div>
    
    <div class="content">
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <h2 class="title"> {{ title }} </h2>
        </div>

        <!-- Right side -->
        <div class="level-right" v-show="searchFilter === 'true'">
          <div class="level-item">
            <div class="filters">
              <div class="tabs is-toggle is-toggle-rounded is-small">
                <ul>
                  <template v-for="item in sortData">
                    <li :key="item" :id="'filter_' + item">
                      <a @click="changeTab(item)"> <span> {{ item }} </span> </a>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input id="searchInput" class="input" type="text" placeholder="Search...">
              </p>
              <p class="control">
                <button class="button" @click="search()">
                  <img src="../assets/search.svg" width="15px">
                </button>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  props: ['title', 'searchFilter', 'sortData'],
  methods: {
    search() {
      var s = document.getElementById("searchInput").value;
      this.$parent.search(s);
    },

    changeTab(key) {
      this.$parent.changeTab(key);
    }
  }
}
</script>