import React from "react"
import { graphql } from "gatsby"
import MarkdownPage from "./markdown-page"
import { Helmet } from "react-helmet"
import { Button } from "../components/buttons"

export default function ({ data }) {
  const content = data.github.repository.object.text
  const repo = data.github.repository.object.repository
  return (
    <>
      <Helmet>
        <title>{repo.name}</title>
      </Helmet>
      <MarkdownPage
        right={[
          <Button linkTo={repo.url}>
            See on <b>GitHub</b>
          </Button>,
        ]}
        animatedText={repo.name}
        mdContent={content.replace(new RegExp(`# ${repo.name}`), "")}
      />
    </>
  )
}

export const query = graphql`
  query($name: String!) {
    github {
      repository(owner: "fkrasnowski", name: $name) {
        object(expression: "master:README.md") {
          ... on GitHub_Blob {
            text
            repository {
              name
              description
              url
            }
          }
        }
      }
    }
  }
`
