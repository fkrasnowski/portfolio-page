import React, { useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import it from "param.macro"

export const Flex = styled.div`
  display: flex;
  flex-flow: ${it.column ? "column" : "row"} ${it.wrap};
  align-items: ${it.align || "center"};
  justify-content: ${it.justifyContent || "center"};
  width: ${it.w};
  height: ${it.h};
`
