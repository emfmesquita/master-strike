<template>
  <span>
    <span v-if="typeof descriptionComponent === 'string'">{{ descriptionComponent }}</span>
    <span class="font-weight-bold" v-else-if="descriptionComponent.bold">{{ descriptionComponent.bold }}</span>
    <span class="font-italic" v-else-if="descriptionComponent.italic">{{ descriptionComponent.italic }}</span>
    <span v-else-if="isIcon" class="description-icon-container">
      <span class="icon-spacer" :style="spacerStyle" />
      <span class="description-icon" :style="iconContainerStyle">
        <span class="description-icon-child">
          <HeroClassIcon v-if="descriptionComponent.hc" :icon="descriptionComponent.hc" :width="hcWidth"/>
          <TeamIcon v-else-if="descriptionComponent.team" :icon="descriptionComponent.team" :width="teamWidth"/>
          <AbilityIcon v-else class="ability-icon" :icon="descriptionComponent.icon" :width="abilityWidth" :spacerWidth="spacerWidth"/>
        </span>
      </span>
    </span>
    <shared-rule v-else-if="descriptionComponent.keyword || descriptionComponent.rule" :rule="descriptionComponent"/>
    <v-divider class="ability-divider" v-else-if="descriptionComponent.divider"/>
  </span>
</template>

<script>
import HeroClassIcon from "../icons/HeroClassIcon.vue";
import TeamIcon from "../icons/TeamIcon.vue";
import AbilityIcon from "../icons/AbilityIcon.vue";

export default {
  name: "DescriptionComponent",
  props: ["descriptionComponent", "dense"],
  components: {
    HeroClassIcon,
    TeamIcon,
    AbilityIcon
  },
  data: () => ({}),
  computed: {
    isIcon() {
      const comp = this.descriptionComponent;
      return comp.hc || comp.team || comp.icon;
    },
    hcWidth() {
      return this.dense ? "18px" : "24px";
    },
    teamWidth() {
      return this.dense ? "20px" : "26px";
    },
    abilityWidth() {
      return this.dense ? "24px" : "32px";
    },
    spacerWidth() {
      return this.dense ? "12px" : "20px";
    },
    spacerStyle() {
      if(!this.isIcon) return {};
      return {
        width: this.dense ? "14px" : "19px"
      }
    },
    iconContainerStyle() {
      if(!this.isIcon) return {};
      return {
        left: this.dense ? "-14px" : "-20px",
        top: this.dense ? "0px" : "-2px"
      }
    }
  }
};
</script>

<style scoped>
.ability-divider {
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0.5);
}

.icon-spacer {
  display: inline-block;
}

.description-icon-container {
  white-space: nowrap;
}

.description-icon {
  position: relative;
  width: 0;
  height: 0;
}

.description-icon-child {
  position: absolute;
}

.ability-icon {
  position: relative;
  top: -6px;
  left: -5px;
}
</style>