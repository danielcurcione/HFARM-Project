<template>
  <div>
    <div>

      <Header :title="slug" />

      <div class="job-description">
        <div class="content">
          <h3>Job Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam praesentium eaque iusto repudiandae facere necessitatibus quo cupiditate eos non delectus voluptatibus ex in nostrum, deserunt, exercitationem inventore ut qui! Magnam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quo dignissimos ad dolor pariatur nemo. Voluptatum consequuntur distinctio omnis, ex libero aspernatur, animi natus odit mollitia tenetur quaerat dolor dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci numquam nesciunt ullam at nemo unde odio et quam autem, consectetur eum consequuntur ex atque omnis laborum dolorem reprehenderit doloribus! Eligendi!
          </p>
        </div>

        <div class="content time">
          <h3>{{ days }} days left</h3>
          <progress class="progress is-success is-small" :value="pastDays" :max="differentDays"></progress>
          <div class="date">
            <p class="start-date">
              Start date: <span>{{ startDate }}</span>
            </p>
            <p class="end-date">
              End date: <span>{{ endDate }}</span>
            </p>
            <p class="end-date">
              Division: <span>SPIRIANT Sales</span>
            </p>
            <p class="end-date">
              Experience: <span>Junior 3-5 years</span>
            </p>
          </div>
        </div>
      </div>

      <!-- <div v-show="noteDialog">
        <NoteDialog :name="noteName"/>
      </div>

      <div class="candidates">
        <Table :data="candidates"/>
      </div> -->
    
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      candidates: [],
      noteDialog: false,
      noteName: '',
      startDate: '2021-02-01',
      endDate: '2021-06-01',
      days: 0,
      differentDays: 0,
      pastDays: 0
    }
  },
  mounted() {
    this.readData();
    this.setDays();
  },
  methods: {
    readData(filter) {
      this.loader = true;
      let url = 'https://api.sheety.co/ec400a6bb2ac250558c262e5fab58060/hfarmData/candidates';
      var list = [];
    
      axios.get(url).then(response => {
        if (filter) {
          response.data.candidates.forEach(element => {
            if (element.candidates.includes(filter))
              list.push(element);
          });
        } else {
          response.data.candidates.forEach(element => {
            list.push(element);
          });
        }

        // this.loader = false;
        this.candidates = list;
      });
    },

    search(s) {
      this.readData(s);
    },

    openDialog (opt, name) {
      this.noteDialog = opt;
      this.noteName = name;
    },

    setDays() {
      const today  = new Date();
      const startDate = this.startDate;
      const endDate    = this.endDate;

      const diffInMs   = new Date(endDate) - new Date(today.toISOString().split('T')[0]);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      this.days = diffInDays;

      const diffInMs2   = new Date(endDate) - new Date(startDate);
      const diffInDays2 = diffInMs2 / (1000 * 60 * 60 * 24);

      this.differentDays = diffInDays2;
      this.pastDays = this.differentDays - this.days;
    }
  },
  async asyncData({ params }) {
    const slug = params.slug
    const type = params.type
    return { slug, type }
  }
}
</script>