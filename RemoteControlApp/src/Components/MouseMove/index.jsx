import React, { useState } from 'react';

import {
  Dimensions,
  View,
  Switch
} from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Image} from 'react-native-svg';

import { api } from '../../services/api';

import { styles } from './styles';

export function MouseMove(){
  const [isShort, setIsShort] = useState(false)
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

  async function handleOnClick(number){
    // alert(`Imagem Clicada numero ${number} e ${isShort}`)
    const body = {
      type: "",
      command: ""
    }
    if (isShort){
      body.type = "SmallMove"
    } else {
      body.type = "LongMove"
    }

    switch (number) {
      case 0:
        body.command = "Left"
        break;
      case 1:
        body.command = "UpLeft"
        break;
      case 2:
        body.command = "Up"
        break;
      case 3:
        body.command = "UpRight"
        break;
      case 4:
        body.command = "Right"
        break;
      case 5:
        body.command = "DownRight"
        break;
      case 6:
        body.command = "Down"
        break;
      case 7:
        body.command = "DownLeft"
        break;
      default:
        break;
    }
    const response = await api.post('/python', body)
  }

  function toggleSwitch() {
    setIsShort(previousState => !previousState)
  }

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
      <Switch
        trackColor={{ false: "#767577", true: "#0C9000" }}
        thumbColor={isShort ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isShort}
      />
      <Svg width="500" height="500">
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
          href={require("../../Assets/leftVector.png")}
          onPress={() => handleOnClick(0)}
        />
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
          href={require("../../Assets/upLeftVector.png")}
          onPress={() => handleOnClick(1)}
        />
        <Path
            d={d[2]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[2]-48}
          y={endY[2]-25}
          width="40"
          height="40"
          href={require("../../Assets/upVector.png")}
          onPress={() => handleOnClick(2)}
        />
        <Path
            d={d[3]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
         <Image x={endX[3]-35}
          y={endY[3]-45}
          width="40"
          height="40"
          href={require("../../Assets/upRightVector.png")}
          onPress={() => handleOnClick(3)}
        />
        <Path
            d={d[4]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[4]-15}
          y={endY[4]-48}
          width="40"
          height="40"
          href={require("../../Assets/rightVector.png")}
          onPress={() => handleOnClick(4)}
        />
        <Path
            d={d[5]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[5]+5}
          y={endY[5]-35}
          width="40"
          height="40"
          href={require("../../Assets/downRightVector.png")} 
          onPress={() => handleOnClick(5)}
        />
        <Path
            d={d[6]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[6]+8}
          y={endY[6]-15}
          width="40"
          height="40"
          href={require("../../Assets/downVector.png")} 
          onPress={() => handleOnClick(6)}
        />
        <Path
            d={d[7]}
            fill="#222222"
            stroke="white"
            strokeWidth={strokeWidth}
        />
        <Image x={endX[7]-5}
          y={endY[7]+5}
          width="40"
          height="40"
          href={require("../../Assets/downLeftVector.png")}
          onPress={() => handleOnClick(7)}
        />
      </ Svg>
    </View>
    
    // <View style={styles.container}>

    // </View>
  );
}