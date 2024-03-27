import { useStorage } from "@/components/context/StorageProvider";
import React from "react";

const Partners = ({ dataPartner = [] }: any) => {
	const { lang } = useStorage();
	return (
		<section className="partners">
			<div className="container">
				<div className="heading --h3">{lang == "vi" ? "Đối tác của MOV" : "Partners of MOV"} </div>
				<div className="partners__list">
					{dataPartner?.map((item: any, index: any) => (
						<div className="partners__list-item" key={index}>
							<img srcSet={`${item?.image} 2x`} alt="" />
						</div>
					))}
					{/* <div className="partners__list-item">
						<img srcSet="/img/logo-brand-1.png 2x" alt="" />
					</div>

					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-2.png 2x" alt="" />
					</div>
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-3.png 2x" alt="" />
					</div>
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-4.png 2x" alt="" />
					</div>
					<div className="partners__list-item">
						<img srcSet="/img/logo-brand-5.png 2x" alt="" />
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Partners;
