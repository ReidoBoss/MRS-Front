<template>
  <div>
    <h1>Arduino Data:</h1>
    <ul>
      <li v-for="dataItem in arduinoData" :key="dataItem">{{ dataItem }}</li>
    </ul>
    <input type="text" v-model="messageToSend" placeholder="Type message to send">
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const arduinoData = ref([]);
const messageToSend = ref('');

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

const sendMessage = () => {
  socket.send(messageToSend.value);
  messageToSend.value = ''; 
};
</script>
