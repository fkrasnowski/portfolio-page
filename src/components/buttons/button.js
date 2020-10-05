import React from "react"
import styled from "@emotion/styled"
import it from "param.macro"
// import { Link } from "gatsby"
import { Link } from "../link"
import useScrollTo from "use-scroll-to"

// Logic for buttons
const Btn = props => {
  const { linkTo, scrollTo, external, currentPage, newTab } = props
  return (
    <Link
      to={linkTo}
      scrollTo={scrollTo}
      external={external}
      currentPage={currentPage}
      newTab={newTab}
    >
      <button {...props} />
    </Link>
  )
}

export const Button = styled(Btn)`
  background: ${it.theme.colors.primary};
  color: ${it.theme.colors.text};
  border: none;
  border-radius: ${it.theme.corner[0]};
  margin: 0.5rem;
  padding: ${it.theme.padding[1]} ${it.theme.padding[0]};
  font-size: 1rem;
  :hover {
    background: ${it.theme.colors.text};
    color: ${it.theme.colors.primaryText};
  }
  transition: transform 0.4s, opacity 0.2s;
`
