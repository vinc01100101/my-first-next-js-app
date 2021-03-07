import headerStyles from "../styles/Header.module.css";

const Header = () => {
	return (
		<>
			<h1 className={headerStyles.title}>
				<span>WebDev</span> News
			</h1>
			<p>Keep up to date with the web dev news.</p>
		</>
	);
};
export default Header;
