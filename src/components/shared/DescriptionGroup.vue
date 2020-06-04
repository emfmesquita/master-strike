<template>
  <div v-if="description" :class="{ 'pa-1': padded }">
    <template v-if="Array.isArray(description)">
        <shared-description-component v-for="(descriptionComponent, componetIdx) in description" :key="componetIdx" :descriptionComponent="descriptionComponent" />
    </template>
    <shared-description-component v-else  :descriptionComponent="description" />
  </div>
</template>

<script>

export default {
  name: "DescriptionGroup",
  props: ["description", "padded"],
  data: () => ({})
};
</script>