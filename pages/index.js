import Head from "next/head";

export default function Home(props) {
	return (
		<div>
			<Head>
				<title>FirstNextApp</title>
				<meta name="keywords" content="web development with next" />
			</Head>
			Hello NEXT!
			{props.articles.map((article, i) => {
				return (
					<div key={i}>
						<h3>{article.title}</h3>
						<p>{article.body}</p>
					</div>
				);
			})}
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
