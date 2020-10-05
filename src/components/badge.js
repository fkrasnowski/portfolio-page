import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import it from "param.macro"

export const Badge = styled.div`
  background: ${it.bg || it.theme.colors.primary};
  color: ${it.color};
  padding: ${it.theme.padding[1]} ${it.theme.padding[0]};
  margin: ${it.theme.padding[1]};
  border-radius: ${it.theme.corner[0]};
  @media (max-width: 800px) {
    font-size: 0.8rem;
    padding: 0.1rem 0.5rem;
  }
`

export const BadgeLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: ${it.theme.padding[0]};
`
