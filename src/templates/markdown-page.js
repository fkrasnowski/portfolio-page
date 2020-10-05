import React from "react"
import Layout from "../components/layout"
import { Remarkable } from "remarkable"
import hljs from "highlight.js"
import "highlight.js/styles/night-owl.css"
import { Header } from "../components/header"
import { Padding } from "../components/padding"

const md = new Remarkable({
  html: true,
  langPrefix: "lang lang-",
  highlight(str, lang) {
    return hljs.highlight(lang, str).value
  },
})

export default function ({ animatedText, before, after, mdContent, right }) {
  return (
    <>
      <Layout>
        <Header
          animatedText={animatedText}
          before={before}
          after={after}
          right={right}
        />
        <main>
          <article
            dangerouslySetInnerHTML={{
              __html: md.render(mdContent),
            }}
          ></article>
        </main>
        <Padding h="5rem" />
      </Layout>
    </>
  )
}
