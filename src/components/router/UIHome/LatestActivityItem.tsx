import { useStorage } from "@/components/context/StorageProvider";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

const LatestActivityItem = ({ image, slug, title, updatedAt }: any) => {
	const { lang } = useStorage();

	const href = slug?.[lang] ? `/activities/${slug?.[lang]}` : "#";
	return (
		<div className="card">
			<div className="card__img">
				<Link href={href} aria-label="article detail">
					<img src={image} alt="img-event" />
				</Link>
			</div>
			<div className="card__info">
				<h3>
					<Link href={href} className="heading --h4 line-clamp-2 min-h-[54px]" aria-label="article detail">
						{title?.[lang]}
					</Link>
				</h3>
				<p className="date">{dayjs(updatedAt || "")?.format("DD/MM/YYYY")}</p>
			</div>
		</div>
	);
};

export default LatestActivityItem;
