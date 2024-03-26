import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import { TIME_STALE } from "@/constant";
import asset from "@/plugins/asset";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { memo } from "react";

const Footer = () => {
	const { getDataPage } = useMainApi();

	const { lang } = useStorage();

	const { data: dataFooter } = useQuery({
		queryFn: async () => {
			const res = await getDataPage("FOOTER");
			return res?.data;
		},
		queryKey: ["FOOTER"],
		staleTime: TIME_STALE, // 60 seconds
	});

	const srcollTop = () => {
		const scrollToNew = document.getElementById("topPage");
		if (scrollToNew) scrollToNew.scrollIntoView({ block: "start", behavior: "smooth" });
	};

	return (
		<footer className="footer">
			<div className="footer__top">
				<div className="container">
					<div className="footer__top-left">
						<Link href="/" className="">
							<img src={asset("/img/logo-main.svg")} alt="icon-logo" />
						</Link>
					</div>
					<div className="footer__top-center">
						<p className="text">{dataFooter?.data?.[lang]?.name}</p>
						<p className="copyright">{dataFooter?.data?.[lang]?.powerBy}</p>
					</div>
					<div className="footer__top-info">
						<Link href={`mailto:${dataFooter?.data?.[lang]?.email}`}>
							{dataFooter?.data?.[lang]?.email}
						</Link>
						<Link href={`tel:${dataFooter?.data?.[lang]?.email}`}>{dataFooter?.data?.[lang]?.phone}</Link>
						<Link href="contact.html">{lang == "vi" ? "Liên hệ" : "Contact Us"}</Link>
					</div>
					<div className="footer__top-social">
						<Link href={dataFooter?.data?.[lang]?.fb || "#"} target="_blank">
							Facebook
						</Link>
						<Link href={dataFooter?.data?.[lang]?.linkdIn || "#"} target="_blank">
							Linkedin
						</Link>
						<Link href={dataFooter?.data?.[lang]?.youtube || "#"} target="_blank">
							Youtube
						</Link>
					</div>
				</div>
			</div>
			<button className="footer__backtotop" onClick={srcollTop}>
				{lang == "vi" ? "Trở lên đầu" : "Back to top"}
			</button>
		</footer>
	);
};

export default memo(Footer);
