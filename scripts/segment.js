import { getSetting } from "./settings.js";
import { log } from "./module.js";
import { getRangesFromSpeedProvider, 
         getUnreachableColorFromSpeedProvider } from "./api.js";
/*
 * For a given position, return the color for the ruler highlight.
 * @param {Object} position Object with x and y indicating the pixels at the grid position.
 * @return {String} Hex color

 */
export function speedRulerColorForPosition(wrapped, position) {  
  // do we have a starting token?
  // TO-DO: Move to Segment Property setup
  //        Store the token info, such as speed, speed multiplier
  if(!getSetting("speed-ruler-active")) return wrapped(position);

  const starting_token = this.ruler._getMovementToken();
  if(!starting_token) return wrapped(position);

  // Don't apply colors if the current user does not have at least observer permissions
  // If this is a pc and alwaysShowSpeedForPCs is enabled we show the color anyway
  if(token.actor.permission < CONST.ENTITY_PERMISSIONS.OBSERVER && 
    !(token.actor.data.type === "character" && 
      getSetting("alwaysShowSpeedForPCs"))) {
      return wrapped(position); 
  }

  const ranges = getRangesFromSpeedProvider(starting_token);
  log(`starting_token ${starting_token.id} ranges`, ranges);
  if(ranges.length === 0) return wrapped(position);
  
  const distance = this.totalPriorDistance + this.measureDistance(position);
  const currentRange = ranges.reduce((minRange, currentRange) => {
		if (distance <= currentRange.range && currentRange.range < minRange.range)
			return currentRange
		return minRange
	}, {range: Infinity, color: getUnreachableColorFromSpeedProvider()})

  
  // TO-DO: Pull info from token
  log(`distance is ${distance}; color chosen is ${currentRange?.color}`);
//   const color = distance <= 30 ? 0x00FF00 :
//                 (distance > 30 && distance <= 60) ? 0xFFFF00 :
//                 0xFF0000;

  return currentRange.color;
}


 
