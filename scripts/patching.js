import { MODULE_ID, log } from "./module.js";
import { speedRulerColorForPosition } from "./segment.js";

export function registerSpeedRuler() {
  libWrapper.register(MODULE_ID, 'window.libRuler.RulerSegment.prototype.colorForPosition', speedRulerColorForPosition, 'MIXED');
}
