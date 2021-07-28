import { MODULE_ID, log } from "./module.js";

export function getSetting(settingName) {
  return game.settings.get(MODULE_ID, settingName);
}

export function registerSettings() {
  log("Registering Speed Ruler settings.");
  game.settings.register(MODULE_ID, "speed-ruler-active", {
    name: 'Use Speed Ruler',
    hint: "When selected, use the Speed Ruler to color the ruler highlighting when starting measurement from a token.",
    scope: "user",
    config: true,
    default: true,
    type: Boolean
  });
}