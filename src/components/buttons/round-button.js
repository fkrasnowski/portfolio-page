import React, { useEffect } from "react"
import styled from "@emotion/styled"
import it from "param.macro"
import { interactive, whileMouseHover, whileTap } from "styled-benefits"
import { Link } from "../link"

const Button = interactive(styled.button`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: none;
  margin: 1.5rem;
  background: ${it.theme?.colors.primary};
  cursor: pointer;
  fill: ${it.theme?.colors.text};
  transition: transform 0.2s;

  ${whileMouseHover}, ${whileTap} {
    color: ${it.theme?.colors.primary};
    fill: url(${it.bg});
    transform: scale(0.9);
  }

  @media (max-width: 400px) {
    width: 120px;
    height: 120px;
    margin: 1rem;
  }
`)
export const RoundButton = ({ newTab, label, img, linkTo, bg }) => (
  <Link external to={linkTo} newTab={newTab}>
    <Button aria-label={label} bg={bg}>
      {img}
    </Button>
  </Link>
)
