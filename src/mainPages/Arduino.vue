<template>
  <div>
    <h1>Arduino Data:</h1>
    <ul>
      <li v-for="dataItem in arduinoData" :key="dataItem">{{ dataItem }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const arduinoData = ref([]);

const socket = new WebSocket('ws://172.16.30.48:8080');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection established');
});

socket.addEventListener('message', (event) => {
  arduinoData.value.push(event.data);
});

socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});
</script>
