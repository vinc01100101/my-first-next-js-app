import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home(props) {
	return (
		<div>
			<Head>
				<title>FirstNextApp</title>
				<meta name="keywords" content="web development with next" />
			</Head>
			Hello NEXT!
			<ArticleList articles={props.articles} />
		</div>
	);
}

export const getStaticProps = async (ctx) => {
	const res = await fetch(
		"http://jsonplaceholder.typicode.com/posts?_limit=7"
	);
	const articles = await res.json();
	return {
		props: { articles },
	};
};
