<template>
  <v-btn color="primary" small :to=to class="ma-1" min-width="120">{{ label }}</v-btn>
</template>

<script>
export default {
  name: "HeaderButton",
  props: {
    label: String,
    to: String,
  },
};
</script>