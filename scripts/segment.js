/*
 * For a given position, return the color for the ruler highlight.
 * @param {Object} position Object with x and y indicating the pixels at the grid position.
 * @return {String} Hex color

 */
export function speedRulerColorForPosition(wrapped, position) {  
  // do we have a starting token?
  // TO-DO: Move to Segment Property setup
  //        Store the token info, such as speed, speed multiplier
  const starting_token = this.ruler._getMovementToken();
  if(!starting_token) return wrapped(position);

  const distance = this.totalPriorDistance + this.measureDistance(position);
  
  // TO-DO: Pull info from token
  const color = distance < 30 ? 0x00FF00 :
                distance > 30 && distance < 60 ? 0xFFFF00 :
                0xFF0000;
  
  return color;
}
 