import {PropsWithChildren, FC} from "react";

type BoxType = {
    width?: number
    height?: number
}

export const Box:FC<PropsWithChildren<BoxType>> = ({width, height}) => {
    return <div style={{width: `${width}px`, height: `${height}px`, backgroundColor:'red'}}  />
}
