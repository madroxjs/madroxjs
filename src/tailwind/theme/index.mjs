import accessiblityPrimitive from "./accessiblity.mjs"
import animationPrimitive from "./animation.mjs"
import backgroundsPrimitive from "./backgrounds.mjs"
import bordersPrimitive from './borders'
import colorsPrimitive from './colors'
import effectsPrimitive from './effects'
import filtersPrimitive from './filters'
import gridPrimitive from './grid'
import interactivityPrimitive from './interactivity'
import layoutPrimitive from './layout'
import sizingPrimitive from './sizing'
import spacingPrimitive from './spacing'
import svgPrimitive from './svg'
import tablesPrimitive from './tables'
import transformsPrimitive from './transforms'
import typographyPrimitive from './typography'

import extendPrimitive from './extend'

const extend = extendPrimitive.default
const colors = colorsPrimitive.default
const accessiblity = accessiblityPrimitive.default
const animation = animationPrimitive.default
const backgrounds = backgroundsPrimitive.default
const borders = bordersPrimitive.default
const effects = effectsPrimitive.default
const filters = filtersPrimitive.default
const grid = gridPrimitive.default
const interactivity = interactivityPrimitive.default
const layout = layoutPrimitive.default
const sizing = sizingPrimitive.default
const spacing = spacingPrimitive.default
const svg = svgPrimitive.default
const tables = tablesPrimitive.default
const transforms = transformsPrimitive.default
const typography = typographyPrimitive.default

console.log(extend)

export default {
  extend,
  colors,
  ...accessiblity,
  ...animation,
  ...backgrounds,
  ...borders,
  ...effects,
  ...filters,
  ...grid,
  ...interactivity,
  ...layout,
  ...sizing,
  ...spacing,
  ...svg,
  ...tables,
  ...transforms,
  ...typography,
}

export {
  accessiblity,
  animation,
  backgrounds,
  borders,
  colors,
  effects,
  extend,
  filters,
  grid,
  interactivity,
  layout,
  sizing,
  spacing,
  svg,
  tables,
  transforms,
  typography,
}