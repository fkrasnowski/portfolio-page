import React, { createRef, useEffect, useState } from "react"
import styled from "@emotion/styled"
import it from "param.macro"
import useVisbilityPercentage from "use-visibility-percentage"
import { Logo, Wave } from "./svg"
import { LeonText } from "./leon-text"
import { NavBar } from "./nav-bar"
import { Button } from "../components/buttons"
import { Link } from "./link"
import { aboutRef, projectsRef, contactRef } from "../pages/index"

const StyledHeader = styled.header`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* color: ${it.theme.colors.text}; */
  background: ${it.theme.colors.accent};
  padding: ${it.theme.padding[0]};
  padding-top: 8rem;
  font-size: 2.5rem;
  @media (max-width: 800px){
    font-size: 2rem;
  }
  z-index:3;
`
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 3;
  margin: -1rem 0px;
`

const NavBarRightSection = ({ currentPage, closeMenu }) => [
  <Button
    scrollTo={projectsRef}
    linkTo="/"
    currentPage={currentPage}
    onClick={closeMenu}
  >
    Projects
  </Button>,
  <Button
    scrollTo={aboutRef}
    linkTo="/"
    currentPage={currentPage}
    onClick={closeMenu}
  >
    About
  </Button>,
  <Button linkTo="/posts" currentPage={currentPage} onClick={closeMenu}>
    Posts
  </Button>,
  <Button
    scrollTo={contactRef}
    linkTo="/"
    currentPage={currentPage}
    onClick={closeMenu}
  >
    Contact
  </Button>,
]

const LogoLink = styled(Link)`
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export const Header = ({
  left = (
    <LogoLink to="/" label="home">
      <Logo />
    </LogoLink>
  ),
  right,
  before,
  after,
  animatedText,
  currentPage,
}) => {
  const [ref, percentage] = useVisbilityPercentage({
    offsetTop: 50,
  })
  const percentageCut = percentage.toPrecision(3)
  const drawValue = percentage + 0.15
  const [isMenuHidden, setMenuHidden] = useState(true)

  return (
    <>
      <NavBar
        left={left}
        right={
          right || (
            <NavBarRightSection
              currentPage={currentPage}
              closeMenu={() => setMenuHidden(true)}
            />
          )
        }
        rightHidden={isMenuHidden}
        rightToggle={() => setMenuHidden(v => !v)}
      />
      <StyledHeader ref={ref}>
        <HeaderContent style={{ opacity: percentageCut }}>
          {before}
          {!!animatedText && (
            <LeonText drawValue={drawValue}>{animatedText}</LeonText>
          )}
          {after}
        </HeaderContent>
      </StyledHeader>
      <Wave scaleY={percentageCut} />
    </>
  )
}
