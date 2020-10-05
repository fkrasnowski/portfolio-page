import React from "react"
import styled from "@emotion/styled"
import it from "param.macro"
import { withProps } from "styled-benefits"
import { Button } from "./buttons"
import useWindowSize from "../api/use-window-size"
import { Hamburger } from "./hamburger"

const Bar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${it.justify};
`

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 4rem;
  margin-top: -4rem;
  top: 0;
  position: sticky;
  /* background: ${it.theme.colors.accent}; */
  padding: 0.5rem;
  z-index: 5;
`
const BelowNavBar = styled.div`
  position: sticky;
  top: 0;
  margin: -4rem 0;
  height: 4rem;
  width: 100%;
  z-index: 2;
  background: ${it.theme.colors.accent};
`

const RevealMenu = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  visibility: visible;
  width: 100%;
  height: 100vh;
  background: ${it.theme.colors.accent};
  z-index: 4;
  transition: all 0.2s;
  ${Button} {
    transform: scale(1.5);
    margin: 1rem;
  }
  ${withProps({ isHidden: true })} {
    visibility: hidden;
    opacity: 0;
    ${Button} {
      transform: scale(1);
      opacity: 0;
    }
  }
`
export const NavBar = ({ left, center, right, rightHidden, rightToggle }) => {
  const { width } = useWindowSize()
  console.log(width)
  return (
    <>
      <BelowNavBar />
      <Nav>
        <Bar justify="flex-start">{left}</Bar>
        <Bar justify="center">{center}</Bar>
        <Bar justify="flex-end">
          {" "}
          {width > 800 ? (
            right
          ) : (
            <Hamburger isOpened={!rightHidden} toggle={rightToggle} />
          )}
        </Bar>
      </Nav>
      <RevealMenu isHidden={rightHidden}>{right}</RevealMenu>
    </>
  )
}
