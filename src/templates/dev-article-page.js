import React from "react"
import { graphql } from "gatsby"
import MarkdownPage from "./markdown-page"
import { Button } from "../components/buttons"
import styled from "@emotion/styled"

const HeaderImage = styled.img`
  width: 70%;
`

export default function ({ data }) {
  const article = data.devArticles.article
  return (
    <MarkdownPage
      before={<HeaderImage src={article.cover_image} />}
      right={[
        <Button linkTo="/posts">All Posts</Button>,
        <Button external newTab linkTo={article.url}>
          Read on <b>Dev</b>
        </Button>,
      ]}
      after={[<h1>{article.title}</h1>]}
      mdContent={article.body_markdown.replace(
        /[A-Z]/,
        letter => `<span style='font-size: 500%'>${letter}</span>`
      )}
    />
  )
}

export const query = graphql`
  query($id: Int!) {
    devArticles(article: { id: { eq: $id } }) {
      article {
        title
        body_markdown
        url
        cover_image
      }
    }
  }
`
