<template>
  <article class="job-card" :class="{'reverse': reverse}">
    <a :href="job.url">
      <img :src="getImg(job.logo)" class="job-card-logo" :alt="job.title">
    </a>

    <div class="job-card-body">
      <header>
        <h3 :class="{'reverse': reverse}">
          {{ job.title }}
        </h3>
        <h5 :class="{'reverse': reverse}">
          <span>
            {{ job.start | formatdate({ month: 'long', year: 'numeric' }) }} 
          </span>
          -
          <span v-if="job.end">
            {{ job.end | formatdate({ month: 'long', year: 'numeric' }) }} 
          </span>
          <span v-else>
            now
          </span>

        </h5>
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
      return false // this.index % 2 === 1
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
h3, h5 {
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
  flex-wrap: wrap;
  
  li {
    padding-right: 1em;
  }
}

.tech-logo {
  width: 32px;
  height: 32px;
}
</style>