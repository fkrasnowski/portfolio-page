import React, { useState } from "react"
import { css } from "@emotion/core"

//Adopted to React from https://codepen.io/Anon_satyam/pen/QWyqWRP

const line = isOpened => css`
  fill: none;
  stroke-width: 9;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  stroke-dasharray: ${isOpened ? "90 207" : "60 207"};
  stroke-dashoffset: ${isOpened ? "-134" : ""};
`

export const Hamburger = ({ isOpened, toggle }) => {
  return (
    <button
      css={theme => css`
        background: ${theme.colors.text};
        stroke: ${theme.colors.accent};
        border: none;
        cursor: pointer;
        border-radius: 10px;
        padding: 0;
        display: flex;
        margin-right: 0.5rem;
        transform: translateY(-1.1px);
      `}
      aria-label="Menu"
      onClick={toggle}
    >
      <svg height="35.8" viewBox="0 0 100 100">
        <path
          css={line(isOpened)}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path css={line(isOpened)} d="M 20,50 H 80" />
        <path
          css={line(isOpened)}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  )
}
