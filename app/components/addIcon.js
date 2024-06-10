import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function AddIcon(props) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} stroke={props.color} strokeWidth={1.5} />
      <Path
        d="M15 12h-3m0 0H9m3 0V9m0 3v3"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default AddIcon
