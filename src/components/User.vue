<script>
import ScoreLineChart from "@/components/ScoreLineChart.vue";
import DurationLineChart from "@/components/DurationLineChart.vue";
export default {
  components: { ScoreLineChart, DurationLineChart },
};
</script>

<template>
  <main>
    <div class="userContent">
      <h3>Bienvenido {{ "user.username" }}</h3>
      <hr />
      <h5>Puntuaciones de las sesiones de estudio:</h5>
      <br />
      <div class="chart">
        <ScoreLineChart />
      </div>
      <br />
      <br />
      <h5>Duraciones de las sesiones de estudio:</h5>
      <br />
      <div class="chart">
        <DurationLineChart />
      </div>
      <br />
      <br />
      <div class="exitButton">
          <b-button variant="primary" href="/">Salir</b-button>
      </div>
    </div>
  </main>
</template>

<style>
.userContent {
  justify-content: center;
  padding: 2%;
}
.chart {
  width: 40rem;
  height: 30rem;
  border: solid;
}
</style>