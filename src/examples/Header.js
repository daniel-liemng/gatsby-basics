import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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

const Header = () => {
  // const data = useStaticQuery(getData)
  // console.log(data)

  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>Title: {data.site.siteMetadata.title}</h1> */}
      {/* <h1>Name: {data.site.siteMetadata.person.name}</h1> */}
      <h1>{title}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Header
