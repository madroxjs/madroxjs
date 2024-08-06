import accessiblity from "./accessiblity.mjs"
import animation from "./animation.mjs"
import backgrounds from "./backgrounds.mjs"
import borders from './borders'
import colors from './colors'
import effects from './effects'
import filters from './filters'
import grid from './grid'
import interactivity from './interactivity'
import layout from './layout'
import sizing from './sizing'
import spacing from './spacing'
import svg from './svg'
import tables from './tables'
import transforms from './transforms'
import typography from './typography'


export default {
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
  colors: colors.default,
}

export {
  accessiblity,
  animation,
  backgrounds,
  borders,
  colors,
  effects,
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