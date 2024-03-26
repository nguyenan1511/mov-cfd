import { ArrowIcon } from "@/components/elements/Icon";
import Course from "@/components/router/UICourse/Course";

const ListCourseHome = ({ dataCourse }: any) => {
	return (
		<section className="slidercourses --ptb">
			<div className="container">
				<div className="slidercourses__wrap">
					<div className="slidercourses__inner" id="slidercourses">
						{dataCourse?.length > 0 &&
							dataCourse?.map((item: any, index: number) => <Course key={index} {...item} />)}
					</div>
					<div className="controlsslider">
						<button className="btn btn-control --prev" aria-label="prev">
							<ArrowIcon />
						</button>
						<p className="sliderpaging">
							<span className="current">1</span> of <span className="total">0</span>
						</p>
						<button className="btn btn-control --next" aria-label="next">
							<ArrowIcon />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ListCourseHome;
