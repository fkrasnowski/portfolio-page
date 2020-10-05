import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import it from "param.macro"
import { Shape } from "../svg"
import { navigate } from "gatsby"
import { Card, CardContainer } from "./card"
import {
  interactive,
  whileMouseHover,
  getStyle,
  afterMouseHover,
} from "styled-benefits"
import { Link } from "../link"

const decorationAnimation = keyframes`
from {
  transform: rotate(0deg) scale(1);
}
to {
  transform: rotate(50deg) scale(23);
}
20% {
  transform: rotate(50deg);
}
100% {
  transform: scale(23)
}
`
const rAnimation = keyframes`
from {
  transform: rotate(0deg) scale(1);
}
to {
  transform: rotate(50deg) scale(23);
}
50% {
  transform: rotate(100deg);
}
100% {
  transform: scale(23)
}
`

const CardFill = interactive(styled.a`
  ${getStyle(Card)};
  height: 100%;
  text-decoration: none;
  transition: 0.1s color, 0.5s transform;
  #cardDecoration {
    position: relative;
    margin-left: 1.3rem;
    transition: 0.5s transform;
  }
  ${whileMouseHover} {
    color: ${it.theme?.colors.primaryText};
    transform: scale(0.98);
    #cardDecoration {
      animation: ${decorationAnimation} 0.5s forwards;
    }
  }
  ${afterMouseHover(0.3)} {
    #cardDecoration {
      animation: ${rAnimation} 0.3s forwards reverse;
    }
  }
`)
const CardContent = styled.div`
  position: relative;
  z-index: 1;
`

export const DecoratedCard = ({ children, decoration, linkTo }) => {
  return (
    <CardContainer>
      <Link to={linkTo}>
        <CardFill>
          <CardContent>{children}</CardContent>
          <Shape id="cardDecoration" type={decoration} />
        </CardFill>
      </Link>
    </CardContainer>
  )
}
