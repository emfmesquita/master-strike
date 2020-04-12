
<template>
  <img class="attack-icon" :style="{ width }" src="../../assets/icons/attack.svg"/>
</template>

<script>

export default {
  name: "AttackIcon",
  props: ["width"],
  data: () => ({})
};
</script>

<style scoped lang="scss">
.attack-icon {
  user-select: none;
}
</style>