import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
	return (
		<div className={articleStyles.card}>
			<h3>{article.title}</h3>
			<p>{article.body}</p>
		</div>
	);
};

export default ArticleItem;
