import React from "react";
import styled from "styled-components";


const StyledLoader = styled.div<Pick<ILoaderProps, 'size' | 'color'| 'margintop'>>`
  display: block;
  margin: ${props => props.margintop || "0"} auto;
  width: ${props => props.size || "20px"};
  height: ${props => props.size || "20px"};;

  &:after {
    content: " ";
    display: block;
    width: ${props => props.size || "20px"};;
    height: ${props => props.size || "20px"};;
    border-radius: 50%;
    border: 2px solid ${props => props.color || "#fff"};
    border-color: ${props => props.color || "#fff"} transparent ${props => props.color || "#fff"} transparent;
    animation: rotateAnim 1.2s linear infinite;
  }

  @keyframes rotateAnim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`

interface ILoaderProps {
  color?: string,
  size?: string,
  margintop?: string
}

export function Loader({ color, size, margintop }: ILoaderProps) {
  return (
    <StyledLoader color={color} size={size} margintop={margintop}/>
  )
}