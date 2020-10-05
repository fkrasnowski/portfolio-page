import React from "react"
import styled from "@emotion/styled"
import it from "param.macro"

export const Card = styled.div`
  display: flex;
  align-items: center;
  background: ${it.theme.colors.primary};
  border-radius: ${it.theme.corner[0]};
  overflow: hidden;
  color: ${it.theme.colors.text};
  padding: ${it.theme.padding[0]};
`

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${it.theme.padding[0]};
`
