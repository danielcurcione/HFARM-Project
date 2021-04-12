<template>
  <div class="job-description">
    <div class="content">
      <h3>Job Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam praesentium eaque iusto repudiandae facere necessitatibus quo cupiditate eos non delectus voluptatibus ex in nostrum, deserunt, exercitationem inventore ut qui! Magnam.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quo dignissimos ad dolor pariatur nemo. Voluptatum consequuntur distinctio omnis, ex libero aspernatur, animi natus odit mollitia tenetur quaerat dolor dolorem.
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
</template>

<script>
export default {
  data() {
    return {
      startDate: '2021-02-01',
      endDate: '2021-05-01',
      days: 0,
      differentDays: 0,
      pastDays: 0
    }
  },
  mounted() {
    this.generateRandomEnd();
    this.setDays();
  },
  methods: {
    generateRandomEnd() {
      var mounth = Math.floor(Math.random() * (3)) + 5;
      var day = Math.floor(Math.random() * (30));

      if (mounth < 10)
        mounth = '0' + mounth;

      if (day < 10)
        day = '0' + day;

      this.endDate = '2021-' + mounth + '-' + day + '';
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
  }
}
</script>