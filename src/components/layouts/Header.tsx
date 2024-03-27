import { useStorage } from "@/components/context/StorageProvider";
import { Logo } from "@/components/elements/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";

const LISTMENU = [
	{
		link: "/about",
		name: {
			vi: "Về chúng tôi",
			en: "About MOV",
		},
	},
	{
		link: "/courses",
		name: {
			vi: "Khóa Học",
			en: "Our Programs",
		},
	},
	{
		link: "/activities",
		name: {
			vi: "Hoạt động",
			en: "Activities",
		},
	},
	{
		link: "/knowledge",
		name: {
			vi: "Kiến thức",
			en: "Knowledge Hubs",
		},
	},
];

const Header = ({ classNameHeader = "", scrollTopPos }: any) => {
	const { setLang, lang } = useStorage();
	const [fixHeader, setFixHeader] = useState(false);

	const router = useRouter();

	const [openMenu, setOpenMenu] = useState(false);

	const { pathname, push, asPath } = useRouter();

	const changeLang = (lang: string) => {
		push(asPath, undefined, {
			locale: lang === "vi" ? "vi" : "en",
		});
		setLang(lang);
	};

	const checkHeader = () => {
		if (window.scrollY > 80) {
			setFixHeader(true);
		} else {
			setFixHeader(false);
		}
	};

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		window.addEventListener("scroll", checkHeader);
		return () => window.removeEventListener("scroll", checkHeader);
	}, [scrollTopPos]);

	return (
		<>
			<header className={`header ${fixHeader ? "" : classNameHeader}`}>
				<div className="container">
					<div className="header__left">
						<Link href="/" aria-label="Read more about Seminole tax hike">
							<Logo />
						</Link>
					</div>
					<ul className="header__menu">
						{LISTMENU.map((item: any, index: number) => (
							<li key={index}>
								<Link
									href={item?.link}
									className={`itemmenu ${pathname?.includes(item.link) ? "active" : ""}`}
								>
									{item?.name?.[lang]}
								</Link>
							</li>
						))}
					</ul>
					<div className="header__right">
						<Link href="/contact" className="btn-contact btn btn-fill">
							{lang == "vi" ? "Liên hệ" : " Contact Us"}
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
					<div className={`btnmenu ${openMenu ? "--close" : ""}`} onClick={() => setOpenMenu(!openMenu)}>
						<div className="btnmenu__line" />
						<div className="btnmenu__line" />
					</div>
				</div>
			</header>
			<nav className={`menumobile ${openMenu ? "--active" : ""}`}>
				<div className="container">
					<div className="menumobile__inner">
						<ul>
							{LISTMENU.map((item: any, index: number) => (
								<li key={index}>
									<Link
										href={item?.link}
										className={`itemmenu ${pathname?.includes(item.link) ? "active" : ""}`}
									>
										{item?.name?.[lang]}
									</Link>
								</li>
							))}
						</ul>
						<Link href="/contact" className="btn-contact btn btn-fill">
							{lang == "vi" ? "Liên hệ" : "Contact Us"}
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
				</div>
			</nav>
		</>
	);
};

export default memo(Header);
