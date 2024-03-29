import { useStorage } from "@/components/context/StorageProvider";
import CourseCategoryItem from "@/components/router/UIHome/CourseCategoryItem";

const OurPrograms = ({ dataProgram }: any) => {
	const { lang } = useStorage();

	return (
		<section className="ourprograms --pb wow fadeInUp">
			<div className="container">
				<div className="textbox --mb --center">
					<h2 className="heading --h2 textbox --center">
						{lang == "vi" ? "Chương trình của chúng tôi" : "Our Programs"}
					</h2>
				</div>
				<div className="scknowledgehub__list list-textbox-card">
					{dataProgram?.map((item: any, index: number) => <CourseCategoryItem key={index} {...item} />)}
				</div>
			</div>
		</section>
	);
};

export default OurPrograms;
