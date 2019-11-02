import React from 'react'
import { Svg, G, Path, Polygon } from 'react-native-svg'

import IconList, { IconTypes, SVGProps } from './IconList'

interface IconProps {
  icon: IconTypes
  fill?: any
  width: number
  height: number
}

export const Icon: React.FC<IconProps> = ({
  icon,
  fill = 'black',
  width = 10,
  height = 10,
}) => {
  const haveSVG = IconList.hasOwnProperty(icon)
  const svg: SVGProps | null = haveSVG ? IconList[icon] : null

  if (!svg) {
    return null
  }

  return (
    <Svg width={width} height={height} viewBox={svg.viewbox}>
      <G fill={fill}>
        {svg.paths ? <Path d={svg.paths} /> : null}
        {svg.points ? <Polygon points={svg.points} /> : null}
      </G>
    </Svg>
  )
}

export default Icon
