<template>
<div class="dashboard">
  <div class="content count-calls">
    <h6>Active Projects</h6>
    <div class="numbers">
      <span class="tot"> {{ calls }} </span>
      <span class="new">+1</span>
      <div class="image">
        <img src="../assets/jobs.svg">
      </div>
    </div>
    <nuxt-link to="/candidates">
      <h4>View all &#8599</h4>
    </nuxt-link>
  </div>

  <div class="content count-calls" style="margin-left: 20px">
    <h6>Candidates</h6>
    <div class="numbers">
      <span class="tot"> {{ candidates }} </span>
      <span class="new">+4</span>
      <div class="image">
        <img src="../assets/people.svg">
      </div>
    </div>
    <nuxt-link to="/candidates">
      <h4>View all &#8599</h4>
    </nuxt-link>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      calls: 0,
      candidates: 0
    }
  },
  mounted() {
    this.count();
  },
  methods: {
    count() {
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/cards';
    
      axios.get(url).then(response => {
        var cards = response.data.cards;
        this.calls = cards.length;
      })

      let url2 = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates';
    
      axios.get(url2).then(response => {
        var candidates = response.data.candidates;
        this.candidates = candidates.length;
      })
    },
  }
}
</script>