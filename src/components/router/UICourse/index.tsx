import BannerCourse from "@/components/router/UICourse/BannerCourse";
import CourseList from "@/components/router/UICourse/CourseList";

const UICourse = ({ listCourse, dataCategory }: any) => {
	return (
		<section className="sccourses">
			<div className="container">
				<BannerCourse data={dataCategory} />
				<CourseList dataCourse={listCourse?.courses} />
			</div>
		</section>
	);
};

export default UICourse;
