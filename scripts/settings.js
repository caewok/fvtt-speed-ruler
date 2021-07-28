import { MODULE_ID, log } from "./module.js";

import { availableSpeedProviders, 
         currentSpeedProvider, 
         getDefaultSpeedProvider, 
         updateSpeedProvider } from "./api.js";
         
import { SpeedProvider } from "./speed_provider.js";

import { SpeedProviderSettings } from "./speed_provider_settings_class.js";

export function getSetting(settingName) {
  return game.settings.get(MODULE_ID, settingName);
}

export function registerSettings() {
  log("Registering Speed Ruler settings.");
  
  game.settings.register(MODULE_ID, "speed-ruler-active", {
    name: "speedruler.settings.speedRulerActive.name",
    hint: "speedruler.settings.speedRulerActive.hint",
    scope: "user",
    config: true,
    default: true,
    type: Boolean
  });
  
  game.settings.register(settingsKey, "alwaysShowSpeedForPCs", {
		name: "speedruler.settings.alwaysShowSpeedForPCs.name",
		hint: "speedruler.settings.alwaysShowSpeedForPCs.hint",
		scope: "world",
		config: true,
		type: Boolean,
		default: true,
	})
  
  // This setting will be modified by the api if modules register to it
	game.settings.register(MODULE_ID, "speedProvider", {
		scope: "world",
		config: false,
		type: String,
		default: getDefaultSpeedProvider(),
		onChange: updateSpeedProvider,
	});

	game.settings.registerMenu(MODULE_ID, "speedProviderSettings", {
		name: "speedruler.settings.speedProviderSettings.name",
		hint: "speedruler.settings.speedProviderSettings.hint",
		label: "speedruler.settings.speedProviderSettings.button",
		icon: "fas fa-tachometer-alt",
		type: SpeedProviderSettings,
		restricted: false,
	});
}

