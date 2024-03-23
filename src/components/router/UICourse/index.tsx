import { useMainApi } from "@/components/context/MainApiProvider";
import BannerCourse from "@/components/router/UICourse/BannerCourse";
import CourseList from "@/components/router/UICourse/CourseList";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";

const UICourse = ({ dataPage = {} }) => {
	const { getListCourse } = useMainApi();

	const { data: dataCourse } = useQuery({
		queryFn: () => getListCourse(),
		queryKey: ["course"],
		staleTime: TIME_STALE, // 60 seconds
	});

	return (
		<section className="sccourses">
			<div className="container">
				<BannerCourse data={(dataPage as any)?.data} />
				<CourseList dataCourse={dataCourse?.data?.courses} />
			</div>
		</section>
	);
};

export default UICourse;
