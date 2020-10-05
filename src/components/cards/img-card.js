import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import it from "param.macro"
import { Card } from "./card"
import useWindowSize from "../../api/use-window-size"
import { FeedCard } from "./feed-card"

const TextCard = styled(Card)`
  width: 33%;
  height: 100%;
  background: ${it.theme.colors.accent};
  opacity: 0.9;
  transition: opacity 0.2s;
`

const CardLayout = styled(Card)`
  height: 300px;
  width: 100%;
  background: url(${it.img});
  background-position: top center;
  background-size: cover;
  overflow: hidden;
`
const CardContainer = styled.div`
  width: 100%;
  padding: ${it.theme.padding[0]};
`

export const ImgCard = ({ children }) => {
  const { width } = useWindowSize()
  return (
    <CardContainer>
      {width >= 1200 && (
        <CardLayout img="/me.jpg">
          <TextCard>{children}</TextCard>
        </CardLayout>
      )}
      {width < 1200 && <FeedCard img="/me.jpg">{children}</FeedCard>}
    </CardContainer>
  )
}
