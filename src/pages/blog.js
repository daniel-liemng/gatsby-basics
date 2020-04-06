import React from "react"

import styles from "../components/blog.module.css"

import Layout from "../components/layout"

const blog = () => {
  return (
    <Layout>
      <div className={styles.bg}>
        <h1>Blog</h1>
      </div>
    </Layout>
  )
}

export default blog
