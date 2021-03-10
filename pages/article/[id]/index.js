// import { useRouter } from "next/router";
import articleStyles from "../../../styles/Article.module.css";

const article = ({ article }) => {
  // this can also be used to parse the query/params
  // const router = useRouter();
  // const { id } = router.query;

  // const { body, title } = article;
  return (
    <div className={articleStyles.card}>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
};

export default article;

// this will be called on the server upon request
// export const getServerSideProps = async (context) => {
//   console.log("Running getServerSideProps()");
//   const res = await fetch(
//     `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   console.log("data fetched from the server side");
//   return {
//     props: {
//       article,
//     },
//   };
// };

//this will be called after the paths are generated from getStaticPaths
export const getStaticProps = async (context) => {
  console.log("Running getStaticProps()");
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  console.log("data fetched");
  return {
    props: {
      article,
    },
  };
};

//this will be called first before the getStaticProps to prepare the paths
export const getStaticPaths = async () => {
  console.log("Running getStaticPaths()");
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
