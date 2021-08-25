[![Version (latest)](https://img.shields.io/github/v/release/caewok/fvtt-speed-ruler)](https://github.com/caewok/fvtt-speed-ruler/releases/latest)
[![Foundry Version](https://img.shields.io/badge/dynamic/json.svg?url=https://github.com/caewok/fvtt-speed-ruler/releases/latest/download/module.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=blueviolet)](https://github.com/caewok/fvtt-speed-ruler/releases/latest)
[![License](https://img.shields.io/github/license/caewok/fvtt-speed-ruler)](LICENSE)

# Speed Ruler

This module allows the default Foundry measurement ruler to track speed of a token being measured. When you start a Ruler measurement from a token on the map, that token's speed is taken into account, and the highlighted ruler area changes color. For example, in the default setup, measuring with the ruler would highlight green squares within the token's base movement, yellow squares between the token's base and dash movement range, and red squares beyond that point.

This module also provides the option for users or systems to define their own speed sets, which in turn can be used by other modules. This functionality was originally part of Drag Ruler(https://github.com/manuelVo/foundryvtt-drag-ruler). 

# Installation
Add this [Manifest URL](https://github.com/caewok/fvtt-speed-ruler/releases/latest/download/module.json) in Foundry to install.

## Dependencies
- [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper)
- [libRuler](https://github.com/caewok/fvtt-lib-ruler)

## Modules that provide additional functionality
- [Elevation Ruler](https://github.com/caewok/fvtt-elevation-ruler): Color highlighting will account for 

## Known conflicts
- [Terrain Ruler](https://github.com/manuelVo/foundryvtt-terrain-ruler)
- [Drag Ruler](https://github.com/manuelVo/foundryvtt-drag-ruler)

I hope to have a future compatibility fix, based in libRuler, that allows Terrain Ruler and Drag Ruler to play nicely with Speed Ruler.

In general, modules that overwrite or extend the Ruler Class without using libRuler may cause the Speed Ruler module to fail to display or calculate correctly. 

