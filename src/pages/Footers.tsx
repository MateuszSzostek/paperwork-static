import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";

const Footers : React.FC = () => {
  return (
    <Layout>
       <Head 
          title="Footers Examples"
          description="Awesome footers examples!"
          keywords="gatsby, template, static, site, website, footer"
          author="Mateusz Szostek" 
        />
        <p>This is awesome gatsby fotters page!</p>
    </Layout>
  );
}

export default Footers;