import React from "react"
import Layout from "../components/layout"
import { Header } from "../components/header"
import { graphql } from "gatsby"
import it from "param.macro"
import { FeedCard } from "../components/cards"
import { BadgeLine, Badge } from "../components/badge"
import useWindowSize from "../api/use-window-size"
import { Link } from "../components/link"

const tagColors = {
  node: {
    bg: "#43853D",
    text: "black",
  },
  javascript: {
    bg: "#F7E018",
    text: "black",
  },
  typescript: {
    bg: "#2F74C0",
    text: "white",
  },
  react: {
    bg: "#5FD5F4",
    text: "#212121",
  },
  gatsby: {
    bg: "#633194",
    text: "white",
  },
  html: {
    bg: "#E4E4E4",
    text: "white",
  },
  css: {
    bg: "#EFEFEF",
    text: "white",
  },
  graphql: {
    bg: "white",
    text: "#DE33A6",
  },
  github: {
    bg: "white",
    text: "black",
  },
  redux: {
    bg: "#7247B5",
    text: "white",
  },
}

export default ({ data }) => {
  const articles = data.allDevArticles.nodes.map(it.article)
  const { width } = useWindowSize()
  return (
    <Layout>
      <Header animatedText="Posts" currentPage="/posts" />
      <main>
        {articles.map(({ title, description, cover_image, tags, slug }) => (
          <Link to={`/posts/${slug}`}>
            <FeedCard img={cover_image}>
              <h3>{title}</h3>

              {width > 800 && description}
              <BadgeLine>
                {tags?.map(tag => (
                  <Badge bg={tagColors[tag]?.bg} color={tagColors[tag]?.text}>
                    {tag}
                  </Badge>
                ))}
              </BadgeLine>
            </FeedCard>
          </Link>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allDevArticles {
      nodes {
        article {
          id
          slug
          title
          cover_image
          tags
          slug
          description
        }
      }
    }
  }
`
