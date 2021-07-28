import { currentSpeedProvider,
         getRangesFromSpeedProvider,
         getUnreachableColorFromSpeedProvider,
         initApi,
         registerModule,
         registerSystem} from "./api.js";
import { registerSpeedRuler } from "./patching.js";
import { registerSettings } from "./settings.js";

import {SpeedProvider} from "./speed_provider.js"

export const MODULE_ID = 'speedruler';

export function log(...args) {
  try {
    const isDebugging = game.modules.get('_dev-mode')?.api?.getPackageDebugValue(MODULE_ID);
    if (isDebugging) {
      console.log(MODULE_ID, '|', ...args);
    }
  } catch (e) {}
}

Hooks.once('init', async function() {
  log('Initializing.');
  registerSettings();
  initApi();
  window.speedRuler = {
		registerModule,
		registerSystem,
	};

});

// setup is after init; before ready. 
// setup is called after settings and localization have been initialized, 
// but before entities, packs, UI, canvas, etc. has been initialized
Hooks.once('setup', async function() {
  log("Setup.");
});

// modules ready
// ready is called once everything is loaded up and ready to go.
Hooks.once('ready', async function() {
  log('Readying.')

  if(game?.user?.isGM === undefined || game.user.isGM) {
    if(!game.modules.get('lib-wrapper')?.active) ui.notifications.error("'Speed Ruler' requires the 'libWrapper' module. Please install and activate this dependency.");
    if(!game.modules.get('libruler')?.active) ui.notifications.error("'Speed Ruler' requires the 'libRuler' module. Please install and activate this dependency.");
  }

});

// https://github.com/League-of-Foundry-Developers/foundryvtt-devMode
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(MODULE_ID);
});

Hooks.once('libRulerReady', async function() {
  log("libRuler is ready to go.");
  registerSpeedRuler();

  // tell modules that the Speed Ruler is set up
  Hooks.callAll('speedRulerReady', SpeedProvider);
});
