<template>
  <v-btn color="primary" large :to=to class="ma-1 ma-lg-3" min-width="160">{{ label }}</v-btn>
</template>

<script>
export default {
  name: "HomeButton",
  props: {
    label: String,
    to: String,
  },
};
</script>