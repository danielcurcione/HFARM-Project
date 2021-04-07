<template>
  <div>
    
    <div class="content">
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <h1 class="title"> {{ title }} </h1>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input id="searchInput" class="input" type="text" placeholder="Search...">
              </p>
              <p class="control">
                <button class="button" @click="search()">
                  Search
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
  props: ['title'],
  methods: {
    search() {
      var s = document.getElementById("searchInput").value;
      this.$parent.search(s);
    }
  }
}
</script>