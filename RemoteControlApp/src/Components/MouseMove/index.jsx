import React from 'react';

import {
  Dimensions,
  View,
} from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Image} from 'react-native-svg';

import { styles } from './styles';

export function MouseMove(){
  const { PI, cos, sin } = Math
  const { width } = Dimensions.get("window")
  const size = width - 120
  const strokeWidth = 40
  const r = (size - strokeWidth)/2
  const cx = size / 2
  const cy = size / 2
  const startAngle = []
  const endAngle = []
  const startX = []
  const startY = []
  const endX = []
  const endY = []
  // const d = `M ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${endY}`
  // const de = `M ${startXb} ${startYb} A ${r} ${r} 0 0 1 ${endXb} ${endYb}`
  const d = []

  for (let i = 0; i<=7; i++){
    startAngle[i] = (-15+i*45)*PI/180
    endAngle[i] = (15+i*45)*PI/180
    startX[i] = (cx - r*cos(startAngle[i]))
    startY[i] = (-r*sin(startAngle[i])+cy)
    endX[i] = (cx - r*cos(endAngle[i]))
    endY[i] = (-r*sin(endAngle[i])+cy)
    d[i] = `M ${startX[i]} ${startY[i]} A ${r} ${r} 0 0 1 ${endX[i]} ${endY[i]}`
  }
  /*
  x = cx - r*cos(Teta)
  y = - r*sin(Teta) + cy
  */
 // A rx ry x-axis-rotation large-arc-flag sweep-flag x y

  return (
    <View style={styles.container}>
      <Svg width="500" height="500">
        <Defs>
          <ClipPath id="clip">
          <Path
            d={d[0]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
          </ClipPath>
        </Defs>
        <Path
            d={d[0]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[0]-25}
          y={endY[0]+7}
          width="40"
          height="40"
          href={require("../../Assets/leftVector.png")} ClipPath="url(#clip)" />
        <Path
            d={d[1]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[1]-45}
          y={endY[1]-2}
          width="40"
          height="40"
          href={require("../../Assets/upLeftVector.png")} ClipPath="url(#clip)" />
        <Path
            d={d[2]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[2]-45}
          y={endY[2]-25}
          width="40"
          height="40"
          href={require("../../Assets/upVector.png")} ClipPath="url(#clip)" />
        <Path
            d={d[3]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Path
            d={d[4]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Path
            d={d[5]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Path
            d={d[6]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Path
            d={d[7]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
      </ Svg>
    </View>
    
    // <View style={styles.container}>

    // </View>
  );
}