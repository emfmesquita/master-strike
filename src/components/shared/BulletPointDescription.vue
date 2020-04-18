<template>
  <ul>
    <li v-for="(point, idx) in points" :key="idx">
      <shared-description-group :description="point" />
    </li>
  </ul>
</template>

<script>

export default {
  name: "BulletPointDescription",
  props: ["points"],
  data: () => ({})
};
</script>