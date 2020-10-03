<template>
  <article class="job-card" :class="{'reverse': reverse}">
    <img :src="getImg(job.logo)" class="job-card-logo" :alt="job.title">

    <div class="job-card-body">
      <header>
        <h3 :class="{'reverse': reverse}">
          {{ job.title }}
        </h3>
      </header>
      <div>
        <p class="job-description">
          {{ job.description }}
        </p>
        <ul class="technologies-list" :class="{'reverse': reverse}">
          <li v-for="tech in job.technologies" :key="`tech-${job.id}-${tech.id}`">
            <img class="tech-logo" :src="getImg(tech.logo)" :alt="tech.name" :title="tech.name" >
          </li>
        </ul>
      </div>
    </div>

  </article>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
    }
  },
  computed: {
    reverse() {
      return this.index % 2 === 1
    }
  },
  methods: {
    getImg(filename) {
      return require(`../assets/${filename}`)
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
  text-align: left;
}

.job-card {
  width: 70%;
  display: flex;
  padding: 1em;
  border: solid 1px #ebebeb;
  border-radius: 16px;
  margin: 1em;

  &-logo {
    width: 96px;
    height: 96px;
    border-radius: 8px;
  }

  &-body {
    padding: 0 1em;
  }
}

.job-description {
  text-align: left;
}

.reverse {
  flex-direction: row-reverse;
  text-align: right;
}

.technologies-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding-right: 1em;
  }
}

.tech-logo {
  width: 32px;
  height: 32px;
}
</style>