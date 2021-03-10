import Head from "next/head";

const About = ({ sampleProp }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="keywords" content="web development with next" />
      </Head>
      About Page
      <br />
      {sampleProp}
    </>
  );
};
export default About;

export const getStaticProps = () => {
  return {
    props: {
      sampleProp: "(This is a SAMPLE PROP)",
    },
  };
};
