import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

function Feature({ title, description }) {
  return (
    <div className="col col--8">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const customFields = siteConfig.customFields ?? {};
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Head title={siteConfig.title} />
      <header className="hero shadow--lw">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <Link
            className="button button--secondary button--outline button--lg"
            to="docs/"
          >
            はじめに
          </Link>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {customFields.features?.map((props, i) => (
                <Feature key={i} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
