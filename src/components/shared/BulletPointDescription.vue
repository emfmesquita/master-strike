<template>
  <ul :class="classes">
    <li v-for="(point, idx) in points" :key="idx">
      <shared-description-group :description="point" :padded="padded" />
    </li>
  </ul>
</template>

<script>

export default {
  name: "BulletPointDescription",
  props: ["points", "padded", "noBullets"],
  data: () => ({}),
  computed: {
    classes() {
      return {
        "no-bullets": this.noBullets
      }
    }
  }
};
</script>

<style scoped>
.no-bullets {
  list-style-type: none;
}
</style>