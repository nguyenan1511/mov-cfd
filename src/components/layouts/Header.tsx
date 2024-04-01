import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import { Logo } from "@/components/elements/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, memo, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

const LISTMENU = [
	{
		link: "/about",
		name: {
			vi: "Về chúng tôi",
			en: "About MOV",
		},
	},
	{
		link: "/courses/?category=6606cf166aca9e7d24048cb5",
		path: "/courses",
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
			en: "Knowledge Hub",
		},
	},
];

const Header = ({ classNameHeader = "", scrollTopPos }: any) => {
	const { setLang, lang } = useStorage();
	const [fixHeader, setFixHeader] = useState(false);

	const { width } = useWindowSize();

	const { dataProgram } = useMainApi();

	const [openMenu, setOpenMenu] = useState(false);

	const { pathname, push, asPath } = useRouter();

	const [showDropdownMobile, setShowDropdownMobile] = useState(false);

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

	useEffect(() => {
		if (typeof window == "undefined") return;
		if (width > 1100) {
			const btnMenu = document.querySelector(".btnmenu") as any;
			const menuMobile = document.querySelector(".menumobile") as any;
			btnMenu?.classList.remove("--close");
			menuMobile?.classList.remove("--active");
		}
	}, [width]);

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
							<Fragment key={index}>
								{item?.path === "/courses" ? (
									<li>
										<div
											className={`itemmenu relative ${
												pathname?.includes(item.link) || pathname?.includes(item?.path)
													? "active"
													: ""
											}`}
										>
											{item?.name?.[lang]}
										</div>
										{item?.path === "/courses" && (
											<ul>
												{dataProgram?.map((itemSub: any, indexSub: number) => (
													<li
														className={itemSub?.countNumberCateg > 0 ? "active" : ""}
														key={indexSub}
													>
														<Link href={`/courses?category=${itemSub?.id}`}>
															{itemSub?.name?.[lang]}
														</Link>
													</li>
												))}
											</ul>
										)}
									</li>
								) : (
									<li>
										<Link
											href={item?.link}
											className={`itemmenu relative ${
												pathname?.includes(item.link) || pathname?.includes(item?.path)
													? "active"
													: ""
											}`}
										>
											{item?.name?.[lang]}
										</Link>
									</li>
								)}
							</Fragment>
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
								<Fragment key={index}>
									{item?.path === "/courses" ? (
										<li className="active">
											<div
												onClick={() => setShowDropdownMobile(!showDropdownMobile)}
												className={`itemmenu relative cursor-pointer ${
													pathname?.includes(item.link) ||
													pathname?.includes(item?.path) ||
													showDropdownMobile
														? "active"
														: ""
												}`}
											>
												{item?.name?.[lang]}
											</div>
											{item?.path === "/courses" && (
												<ul>
													{dataProgram?.map((itemSub: any, indexSub: number) => (
														<li
															className={itemSub?.countNumberCateg > 0 ? "active" : ""}
															key={indexSub}
														>
															<Link href={`/courses?category=${itemSub?.id}`}>
																{itemSub?.name?.[lang]}
															</Link>
														</li>
													))}
												</ul>
											)}
										</li>
									) : (
										<li className="itemmenu">
											<Link
												href={item?.link}
												className={`itemmenu ${
													pathname?.includes(item.link) || pathname?.includes(item?.path)
														? "active"
														: ""
												}`}
											>
												{item?.name?.[lang]}
											</Link>
										</li>
									)}
								</Fragment>
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
