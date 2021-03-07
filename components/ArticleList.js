import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const ArticleList = (props) => {
	return (
		<div className={articleStyles.grid}>
			{props.articles.map((article, i) => {
				return <ArticleItem key={i} article={article} />;
			})}
		</div>
	);
};

export default ArticleList;
