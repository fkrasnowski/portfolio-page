import React, { createRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { PinnedCards } from "../components/pinned-cards"
import { Header } from "../components/header"
import { RoundButton } from "../components/buttons"
import { Padding } from "../components/padding"
import { ImgCard } from "../components/cards"
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/svg"
import { Flex } from "../components/flex"

export const projectsRef = createRef()
export const aboutRef = createRef()
export const contactRef = createRef()

export default function Home({ data }) {
  console.log(data)

  return (
    <>
      <Layout>
        <Header
          before="My name's"
          animatedText="Franciszek Krasnowski"
          after="and I am IT hothead"
          currentPage="/"
        />
        <main>
          <h2 ref={projectsRef} id="projects">
            Some projects
          </h2>
          <PinnedCards data={data} />
          <Padding h="4rem" />
          <h2 ref={aboutRef}>That's me</h2>
          <ImgCard img="/me.jpg">
            Big fan of the functional programming style - I know how to write
            "hello world" in C 💪. I'm looking for a good beer 🍻. Picking and
            brewing herbs makes me mellow 🌿.
          </ImgCard>
          <Padding h="4rem" />
          <h2 ref={contactRef}>Contact me</h2>
          <Flex wrap="wrap" w>
            <Flex>
              <RoundButton
                img={<LinkedInIcon />}
                bg="#water-gradient"
                linkTo="https://linkedin.com/in/franciszek-krasnowski"
                label="LinkedIn"
                newTab
              />
              <RoundButton
                img={<GitHubIcon />}
                bg="#heat-gradient"
                linkTo="https://github.com/fkrasnowski"
                label="GitHub"
                newTab
              />
            </Flex>
            <RoundButton
              img={<MailIcon />}
              bg="#milkiblood-gradient"
              linkTo="mailto:krasnowskifranciszek@outlook.com"
              label="Mail"
            />
          </Flex>
          <Padding h="4rem" />
        </main>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    github {
      user(login: "fkrasnowski") {
        pinnedItems(first: 4, types: REPOSITORY) {
          nodes {
            ... on GitHub_Repository {
              name
              description
            }
          }
        }
      }
    }
  }
`
