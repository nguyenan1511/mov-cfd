import { useStorage } from "@/components/context/StorageProvider";

const ContactPage = ({ dataPage }: any) => {
	const { lang } = useStorage();

	return (
		<section className="sccontactus --ptb">
			<div className="container">
				<div className="textbox sccontactus__textbox --center">
					<h1 className="heading --h1">{lang == "vi" ? "Liên hệ" : "Contact Us"} </h1>
				</div>
				<div className="sccontactus__box course">
					<div className="course__img">
						<a href="course-detail.html">
							<img src="/img/contact-img.jpg" alt="contact-img" />
						</a>
					</div>
					<div className="sccontactus__box-contactinfo course__info">
						<div className="address">
							<span className="label">
								<strong>{dataPage?.data?.[lang]?.blockNo}</strong>
							</span>
							<p className="text">{dataPage?.data?.[lang]?.address}</p>
						</div>
						<div className="phones">
							<p className="phone flex flex-col">
								{dataPage?.data?.[lang]?.phone.map((item: any, index: number) => (
									<strong key={index}>{item}</strong>
								))}
							</p>
							<p className="phone">
								<strong>{dataPage?.data?.[lang]?.generalInfo}</strong>
							</p>
						</div>
						<div className="emails">
							<div className="emailbox">
								<span className="label">
									<strong>{lang == "vi" ? "Course" : "Khoá học"}</strong>
								</span>
								<p className="text">{dataPage?.data?.[lang]?.course}</p>
							</div>
							<div className="emailbox">
								<span className="label">
									<strong>{lang == "vi" ? "Thông tin chung" : "General info"}</strong>
								</span>
								<p className="text">{dataPage?.data?.[lang]?.generalInfo}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
