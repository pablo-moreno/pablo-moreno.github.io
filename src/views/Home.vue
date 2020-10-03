<template>
  <div class="home">
    <navbar />
    <header class="avatar-header">
      <avatar />

      <h1>
        Hi, I'm Pablo Moreno
      </h1>

      <h3>
        Full Stack Engineer at <a href="https://www.wegow.com">Wegow</a>
      </h3>

    </header>

    <div class="skills">
      <div class="skills-bar-chart">
        <a name="skills">
          <h3 class="no-margin">
            Skills
          </h3>
        </a>
        <bar-chart :items="skills" />
      </div>
    </div>

    <div class="job-experience">
      <job-card v-for="(job, index) in jobs" 
               :job="job" :index="index" 
               :key="job.id" />
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import BarChart from "@/components/BarChart"
import Navbar from "@/components/Navbar"
import JobCard from '@/components/JobCard'

import { SKILLS, JOBS } from '../constants'

export default {
  name: "Home",
  components: {
    Avatar,
    BarChart,
    JobCard,
    Navbar,
  },
  data() {
    return {
      skills: SKILLS,
      jobs: JOBS,
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar-header {
  padding-top: 80px;
}

.skills {
  display: flex;
  justify-content: center;

  &-bar-chart {
    width: 60%;
  
  
    @media screen and (max-width: 640px) {
      width: 80%;        
    }
  }
}

.job-experience {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.no-margin {
  margin: 0;
}
</style>
