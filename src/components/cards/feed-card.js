import React from "react"
import styled from "@emotion/styled"
import it from "param.macro"
import { interactive, whileMouseHover, whileTap } from "styled-benefits"

const Image = styled.img`
  border-radius: ${it.theme.corner[0]};
  max-width: 300px;
  flex-grow: 1;
  margin-left: 1rem;
  margin-bottom: 1rem;
  transition: all 0.2s;
`

const CardContainer = interactive(styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1.3rem;
  margin: 2rem 0;
  text-decoration: none;
  background: ${it.theme?.colors.primary};
  border-radius: ${it.theme?.corner[0]};
  transition: all 0.2s;
  ${whileMouseHover}, ${whileTap} {
    transform: scale(0.98);
    ${Image} {
      transform: scale(1.05);
    }
  }
  /* overflow: hidden; */
  color: ${it.theme?.colors.text};
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    ${Image} {
      margin-left: 0rem;
    }
  }
`)

const Content = styled.div`
  flex-grow: 1;
`
export const FeedCard = props => {
  return (
    <CardContainer {...props}>
      <Content>{props.children}</Content>
      <Image src={props.img} />
    </CardContainer>
  )
}
