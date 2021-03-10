import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>FirstNextApp</title>
        <meta name="keywords" content="web development with next" />
      </Head>
      Hello NEXT!
      <ArticleList articles={articles} />
    </div>
  );
}

//for static props, called upon compilation
export const getStaticProps = async (ctx) => {
  console.log("Running getStaticProps()");
  const res = await fetch("http://jsonplaceholder.typicode.com/posts?_limit=7");
  const articles = await res.json();
  console.log("data fetched");
  return {
    props: { articles },
  };
};
