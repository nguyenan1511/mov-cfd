import { useStorage } from "@/components/context/StorageProvider";
import { Logo } from "@/components/elements/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
	const { setLang, lang } = useStorage();

	const router = useRouter();

	const changeLang = (lang: string) => {
		router.push(router.asPath, undefined, {
			locale: lang === "vi" ? "vi" : "en",
		});
		setLang(lang);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__left">
					<Link href="/">
						<Logo />
					</Link>
				</div>
				<ul className="header__menu">
					<li>
						<Link href="/about" className="itemmenu">
							About MOV
						</Link>
					</li>
					<li>
						<Link href="/courses" className="itemmenu active">
							Our Programs
						</Link>
					</li>
					<li>
						<Link href="/activities" className="itemmenu">
							Activities
						</Link>
					</li>
					<li>
						<Link href="/knowledge-Hubs" className="itemmenu">
							Knowledge Hubs
						</Link>
					</li>
				</ul>
				<div className="header__right">
					<Link href="/contact" className="btn-contact btn btn-fill">
						Contact Us
					</Link>
					<div className="selecboxlang">
						<button
							className={`btn btn-lang ${lang == "en" ? "active" : ""}`}
							onClick={() => changeLang("en")}
						>
							EN
						</button>
						<button
							className={`btn btn-lang ${lang == "vi" ? "active" : ""}`}
							onClick={() => changeLang("vi")}
						>
							VN
						</button>
					</div>
				</div>
				{/* addclass --close khi bấm vào */}
				<div className="btnmenu">
					<div className="btnmenu__line" />
					<div className="btnmenu__line" />
				</div>
			</div>
		</header>
	);
};

export default Header;
