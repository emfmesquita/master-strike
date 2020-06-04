<template>
  <ul>
    <li v-for="(point, idx) in points" :key="idx">
      <shared-description-group :description="point" :padded="padded" />
    </li>
  </ul>
</template>

<script>

export default {
  name: "BulletPointDescription",
  props: ["points", "padded"],
  data: () => ({})
};
</script>