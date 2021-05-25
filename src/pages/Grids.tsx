import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";

const Grids: React.FC = ({ }) => {
  return (
    <Layout>
      <Head
        title="Grids Examples"
        description="Awesome grids examples!"
        keywords="gatsby, template, static, site, website, grid"
        author="Mateusz Szostek"
      />
      <p>This is awesome gatsby grids page!</p>
    </Layout>
  );
}

export default Grids;