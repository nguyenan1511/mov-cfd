import Course from "@/components/router/UICourse/Course";

const CourseList = ({ dataCourse = [] }) => {
	return (
		<div className="sccourses__list">
			{dataCourse.map((item: any, index: number) => (
				<Course key={index} {...item} />
			))}
		</div>
	);
};

export default CourseList;
