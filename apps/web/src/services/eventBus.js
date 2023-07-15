import Vue from "vue";

export const bus = new Vue();

bus.E = {
  SCREEN_RESIZE: "screenResize",
  SCREEN_RESIZE_WIDTH: "screenResizeWidth",
  SCREEN_RESIZE_HEIGHT: "screenResizeHeight",
  TOGGLE_SIDE_BAR: "toggleSideBar"
}