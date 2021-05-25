import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head"

const Blog : React.FC = () => {
  return (
    <Layout>
      <Head 
          title="Blog Examples"
          description="Awesome blog examples!"
          keywords="gatsby, template, static, site, website, blog"
          author="Mateusz Szostek" 
        />
        <p>This is awesome gatsby blog page!</p>
    </Layout>
  );
}

export default Blog;