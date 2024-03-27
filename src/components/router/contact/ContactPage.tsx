import { useStorage } from "@/components/context/StorageProvider";
import Link from "next/link";

const ContactPage = ({ dataPage }: any) => {
	console.log("🚀dataPage---->", dataPage);
	const { lang } = useStorage();

	return (
		<section className="sccontactus --ptb">
			<div className="container">
				<div className="textbox sccontactus__textbox --center">
					<h1 className="heading --h1">{lang == "vi" ? "Liên hệ" : "Contact Us"} </h1>
				</div>
				<div className="sccontactus__box course">
					<div className="course__img">
						<Link href="#">
							<img src="/img/contact-img.jpg" alt="contact-img" />
						</Link>
					</div>
					<div className="sccontactus__box-contactinfo course__info">
						<div className="address">
							<span className="label">
								<strong>{dataPage?.data?.[lang]?.company}</strong>
							</span>
						</div>
						<div className="phones">
							<p className="label">
								<strong className="mr-[10px]">{lang === "vi" ? "Địa chỉ" : "Company Address"}:</strong>
								{dataPage?.data?.[lang]?.address}
							</p>
							<p className="phone flex flex-col">
								<strong className="mr-[10px]">{lang === "vi" ? "Thông tin liên hệ" : "Email"}:</strong>
								{dataPage?.data?.[lang]?.email}
							</p>
						</div>
						<div
							className="emails"
							dangerouslySetInnerHTML={{ __html: dataPage?.data?.[lang]?.generalInfo }}
						>
							{/* <div className="emailbox">
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
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
