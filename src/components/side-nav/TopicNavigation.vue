<script lang="ts" setup>
type Topics = string[];
const topics: Topics = ['Philosophie', 'Psychologie'];
</script>

<template>
  <v-navigation-drawer permanent="true"
    ><v-list
      ><template v-for="(topic, index) in topics" :key="index"
        ><v-list-item :title="topic" :to="'/' + topic"></v-list-item></template></v-list
  ></v-navigation-drawer>
</template>
