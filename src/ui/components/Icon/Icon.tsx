import React from 'react'
import { G, Path, Polygon, Svg } from 'react-native-svg'

import IconList, { SVGProps } from './IconList'
import IconTypes from './IconTypes'

interface IconProps {
  icon: IconTypes
  fill?: any
  width: number
  height: number
  style?: any
}

export const Icon: React.FC<IconProps> = ({
  icon,
  fill = 'black',
  width = 10,
  height = 10,
  style,
}) => {
  const haveSVG = IconList.hasOwnProperty(icon)
  const svg: SVGProps | null = haveSVG ? IconList[icon] : null

  if (!svg) {
    return null
  }

  return (
    <Svg width={width} height={height} viewBox={svg.viewbox} style={style}>
      <G fill={fill}>
        {svg.paths ? <Path d={svg.paths} /> : null}
        {svg.points ? <Polygon points={svg.points} /> : null}
      </G>
    </Svg>
  )
}

export default Icon
