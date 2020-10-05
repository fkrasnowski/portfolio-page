import React from "react"
import {
  HeatGradient,
  MilkibloodGradient,
  WaterGradient,
  Gradient,
} from "./gardients"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

export function Triangle({ id }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="98"
      height="96"
      fill="url(#heat-gradient)"
      viewBox="0 0 98 96"
      id={id}
    >
      <HeatGradient />
      <path
        // fill="#C4C4C4"
        d="M23.852 11.2c1.506-6.763 9.768-9.359 14.872-4.673l53.584 49.201c5.103 4.686 3.22 13.14-3.39 15.216L19.517 92.749c-6.61 2.076-12.989-3.781-11.482-10.544L23.852 11.2z"
      ></path>
    </svg>
  )
}

export function Circle({ id }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="url(#milkiblood-gradient)"
      viewBox="0 0 100 100"
      id={id}
    >
      <MilkibloodGradient />
      <circle cx="50" cy="50" r="41"></circle>
    </svg>
  )
}

export function Square({ id }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="url(#water-gradient)"
      viewBox="0 0 100 100"
      id={id}
    >
      <WaterGradient />
      <rect
        width="74"
        height="74"
        x="29.44"
        y="1.883"
        rx="9"
        transform="rotate(21.863 29.44 1.883)"
      />
    </svg>
  )
}

export function Pentagon({ id }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="url(#sunshine-gradient)"
      viewBox="0 0 100 100"
      transform="scale(1.2)"
      id={id}
    >
      <Gradient />
      <path d="M55.23 12.835a9 9 0 0110.186 2.863L87.913 44.18a9 9 0 01.425 10.572L68.201 84.95a9 9 0 01-9.923 3.671l-34.942-9.82a9 9 0 01-6.558-8.302L15.32 34.232a9 9 0 015.87-8.803l34.04-12.594z"></path>
    </svg>
  )
}

export const Shape = ({ type, id }) => {
  switch (type) {
    case "circle":
      return <Circle id={id} />
    case "triangle":
      return <Triangle id={id} />
    case "square":
      return <Square id={id} />
    case "pentagon":
      return <Pentagon id={id} />
    default:
      return <Triangle id={id} />
  }
}

export function Wave({ scaleY }) {
  const theme = useTheme()
  const h = 400
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height={h + "px"}
      // style={{ scaleY: h }}
      fill={theme.colors.accent}
      preserveAspectRatio="none"
      viewBox="0 0 294 138"
      css={css`
        position: relative;
        top: -${h / 2}px;
        transition: height 0.05s;
        z-index: -1;
        margin-bottom: -200px;
      `}
      style={{ transform: `scaleY(${scaleY})` }}
    >
      <path d="M0-5h295.5s.434 101.589-3.047 114.5c-3.482 12.911-5.969 15.678-15.419 0s-24.868-29.428-44.266 0c-19.397 29.428-64.16 45.19-91.018 0-26.858-45.19-35.254-41.53-74.605 0-20.669 23.02-29.734 24.16-40.287 0C17.97 93.826 11.935 95.335 0 109.5V-5z"></path>
    </svg>
  )
}
