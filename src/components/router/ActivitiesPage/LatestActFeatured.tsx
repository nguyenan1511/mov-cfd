import { useMainApi } from "@/components/context/MainApiProvider";
import { useStorage } from "@/components/context/StorageProvider";
import { ArrowIcon } from "@/components/elements/Icon";
import CourseActivity from "@/components/router/ActivitiesPage/CourseActivity";
import { TIME_STALE } from "@/constant";
import { useQuery } from "@tanstack/react-query";

const LatestActFeatured = ({ dataCategory }: any) => {
	const { lang } = useStorage();
	const { getDataActivity } = useMainApi();

	const { data: dataActivity } = useQuery({
		queryFn: async () => {
			const res = await getDataActivity(`?limit=4&orderBy=createdAt&order=-1`);
			if (res) {
				return res?.data?.activities;
			}
			return null;
		},
		queryKey: ["activity"],
		staleTime: TIME_STALE, // 60 seconds
	});

	return (
		<section className="latestactfeatured slidercourses --pt">
			<div className="container">
				<div className="textbox --mb --center">
					<h1 className="heading --h2 textbox --center --capitalize">{dataCategory?.name?.[lang]}</h1>
				</div>
				<div className="slidercourses__wrap">
					<div className="slidercourses__inner" id="slidercourses">
						{dataActivity?.map((item: any, index: number) => <CourseActivity {...item} key={index} />)}
					</div>
					<div className="controlsslider">
						<button className="btn btn-control --prev">
							<ArrowIcon />
						</button>
						<p className="sliderpaging">
							<span className="current">1</span> of <span className="total">0</span>
						</p>
						<button className="btn btn-control --next">
							<ArrowIcon />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LatestActFeatured;
