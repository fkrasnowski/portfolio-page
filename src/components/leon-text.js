import React, { useEffect, useRef } from "react"
import LeonSans from "../api/leon"
import { Flex } from "./flex"
import gsap from "gsap"
import useWindowSize from "../api/use-window-size"
const sw = 400
const sh = 100
const pixelRatio = 2

const drawLeon = (ctx, leon, drawValue) => {
  ctx.clearRect(0, 0, sw, sh)
  leon.drawing.forEach(e => {
    gsap.set(e, { value: drawValue })
  })

  leon.draw(ctx)
}
export const LeonWord = ({ children, weight, drawValue }) => {
  const canvasRef = useRef()
  const { width: windowWidth } = useWindowSize()
  const ctxRef = useRef()
  const leonRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctxRef.current = ctx

    let size = 80
    if (windowWidth <= 800) size = 60
    if (windowWidth <= 500) size = 40
    const sw = (size * children.length) / pixelRatio

    canvas.width = sw * pixelRatio
    canvas.height = sh * pixelRatio
    canvas.style.width = sw + "px"
    canvas.style.height = sh + "px"
    // canvas.style.background = "pink"
    ctx.scale(pixelRatio, pixelRatio)

    const leon = new LeonSans({
      text: children,
      color: ["white"],
      size,
      weight: weight || 500,
    })

    const x = (sw - leon.rect.w) / 2
    const y = (sh - leon.rect.h) / 2

    leon.position(x, y)
    drawLeon(ctx, leon, drawValue)
    leonRef.current = leon
  }, [windowWidth, children, drawValue, weight])
  useEffect(() => {
    const ctx = ctxRef.current
    const leon = leonRef.current

    drawLeon(ctx, leon, drawValue)
  })
  return <canvas ref={canvasRef} />
}

export const LeonText = props => (
  <Flex wrap="wrap">
    {props.children?.split?.(" ").map(word => (
      <LeonWord {...props}>{word}</LeonWord>
    ))}
  </Flex>
)
