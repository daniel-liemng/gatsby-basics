import React from "react"

import { graphql } from "gatsby"

import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"

const examples = ({ data }) => {
  // console.log(props)

  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>Examples</p>
      <Header />
      <HeaderStatic />
      <h2>{author}</h2>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        person {
          name
          age
        }
        author
        data
        description
        title
      }
    }
  }
`

export default examples
