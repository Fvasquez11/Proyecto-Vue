<script>
import LineChart from "@/components/LineChart.vue";
export default {
  components: { LineChart },
  data() {
    return {
      user: {
        id: 1,
        username: "zmorrott0",
        sessions: [
          { id: 1, date: "02/11/2021", score: 3.9, duration: 60 },
          { id: 2, date: "09/14/2021", score: 1.6, duration: 13 },
          { id: 3, date: "10/19/2021", score: 4.1, duration: 47 },
          { id: 4, date: "03/10/2021", score: 1.2, duration: 32 },
          { id: 5, date: "02/06/2022", score: 1.5, duration: 56 },
          { id: 6, date: "04/18/2021", score: 1.2, duration: 55 },
          { id: 7, date: "12/14/2021", score: 1.2, duration: 42 },
          { id: 8, date: "09/26/2021", score: 4.3, duration: 32 },
          { id: 9, date: "02/01/2021", score: 3.5, duration: 17 },
          { id: 10, date: "08/07/2021", score: 2.9, duration: 55 },
        ],
      },
    };
  },
  computed: {
    dataLabels: function () {
      let labels = this.user.sessions.map((session) => session.date);
      return labels;
    },
    scores: function () {
      let scores = this.user.sessions.map((session) => session.score);
      return scores;
    },
    data: function () {
      let data = {
        labels: this.dataLabels,
        datasets: [
          {
            label: "Scores",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: this.scores,
          },
        ],
      };
      return data;
    },
    config: function () {
      let configuration = {
        type: "line",
        data: this.data,
        options: {},
      };
      return configuration;
    },
    myChart: function () {
      let myChart = new Chart(document.getElementById("myChart"), this.config);
      return myChart;
    },
  },
};
</script>

<template>
  <main>
    <div class="userContent">
      <h3>Bienvenido {{ user.username }}</h3>
      <hr />
      <h5>Puntuaciones de las sesiones de estudio:</h5>
      <div class="chart">
        <canvas id="myChart" width="400" height="200"></canvas>
      </div>
      <h5>Duraciones de las sesiones de estudio:</h5>
      <div class="chart">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    </div>
  </main>
</template>

<style>
.userContent {
  padding: 2%;
}
.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 40%;
}
</style>