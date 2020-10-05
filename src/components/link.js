import React from "react"
import { Link as GatsbyLink } from "gatsby"
import useScrollTo from "use-scroll-to"

export const Link = props => {
  const { to, external, newTab, currentPage, scrollTo, onClick, label } = props
  const scroll = useScrollTo(scrollTo, { minus: 90 })

  return external ? (
    <a
      {...props}
      href={to}
      target={newTab ? "_blank" : "_self"}
      rel="noopener"
      aria-label={label}
    />
  ) : (
    <a
      href={to}
      onClick={e => {
        e.preventDefault()
        if (onClick) onClick(e)
        if (to === currentPage) scroll()
        else setTimeout(scroll, 100)
      }}
    >
      <GatsbyLink {...props} to={to !== currentPage ? to : null} />
    </a>
  )
}
