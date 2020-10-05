import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import it from "param.macro"

export const Grid = ({ children }) => (
  <div
    css={css`
      display: flex;
      align-items: stretch;
      justify-content: center;
      align-content: stretch;
      flex-wrap: wrap;
      width: 100%;
    `}
  >
    {children?.map?.(child => <GridElement>{child}</GridElement>) ?? (
      <GridElement>{children}</GridElement>
    )}
  </div>
)

export const GridElement = styled.div`
  width: 100%;
  /* height: 100%; */
  flex-basis: 50%;
  flex-grow: 1;
  /* @media (max-width: 680px) {
    flex-basis: 100%;
  } */
`
