import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<Header />
				<h1>Welcome to Next</h1>
				{children}
			</div>
		</>
	);
};

export default Layout;
