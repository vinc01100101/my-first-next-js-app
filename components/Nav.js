import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
	const x = 1;
	return (
		<nav
			style={{ background: x < 1 ? "red" : "black" }}
			className={navStyles.nav}
		>
			<ul className={navStyles.ul}>
				<li className={navStyles.li}>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
