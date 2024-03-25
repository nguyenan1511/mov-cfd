import Link from "next/link";
import React from "react";

const ListCourseHome = () => {
	return (
		<section className="slidercourses --ptb">
			<div className="container">
				<div className="slidercourses__wrap">
					<div className="slidercourses__inner" id="slidercourses">
						<div className="course">
							<div className="course__img">
								<Link href="course-detail.html">
									<img src="/img/course-img1.jpg" alt="course-img" />
								</Link>
							</div>
							<div className="course__info">
								<h3 className="title heading --h3 --black-cl">Các khoá học sắp khai giảng</h3>
								<h2 className="heading --h1">
									<span className="heading --h3">Practical Application Course Level 2 (PAC2)</span>
									Ứng dụng thực hành
								</h2>
								<p className="desc">
									Khoá học dành cho những người thực hành đã có kinh nghiệm trước đó trong lĩnh vực
									ABA
								</p>
								<div className="teacher small">
									<div className="teacher__img">
										<img src="/img/img-lectur.jpg" alt="" />
									</div>
									<div className="teacher__info">
										<p className="teacher__info-name">Doan Nguyen</p>
										<p className="teacher__info-rank">THS.NCS</p>
									</div>
								</div>
								<Link href="course-detail.html" className="btn btn-fill">
									Xem thêm
								</Link>
							</div>
						</div>
						<div className="course">
							<div className="course__img">
								<Link href="course-detail.html">
									<img src="/img/course-img1.jpg" alt="course-img" />
								</Link>
							</div>
							<div className="course__info">
								<h3 className="title heading --h3 --black-cl">Các khoá học sắp khai giảng</h3>
								<h2 className="heading --h1">
									<span className="heading --h3">Practical Application Course Level 1 (PAC1)</span>
									Ứng dụng thực hành
								</h2>
								<p className="desc">
									Khoá học dành cho những người thực hành đã có kinh nghiệm trước đó trong lĩnh vực
									ABA
								</p>
								<div className="teacher small">
									<div className="teacher__img">
										<img src="/img/img-lectur.jpg" alt="" />
									</div>
									<div className="teacher__info">
										<p className="teacher__info-name">Doan Nguyen</p>
										<p className="teacher__info-rank">THS.NCS</p>
									</div>
								</div>
								<Link href="course-detail.html" className="btn btn-fill">
									Xem thêm
								</Link>
							</div>
						</div>
						<div className="course">
							<div className="course__img">
								<Link href="course-detail.html">
									<img src="/img/course-img1.jpg" alt="course-img" />
								</Link>
							</div>
							<div className="course__info">
								<h3 className="title heading --h3 --black-cl">Các khoá học sắp khai giảng</h3>
								<h2 className="heading --h1">
									<span className="heading --h3">Practical Application Course Level 2 (PAC2)</span>
									Ứng dụng thực hành
								</h2>
								<p className="desc">
									Khoá học dành cho những người thực hành đã có kinh nghiệm trước đó trong lĩnh vực
									ABA
								</p>
								<div className="teacher small">
									<div className="teacher__img">
										<img src="/img/img-lectur.jpg" alt="" />
									</div>
									<div className="teacher__info">
										<p className="teacher__info-name">Doan Nguyen</p>
										<p className="teacher__info-rank">THS.NCS</p>
									</div>
								</div>
								<Link href="course-detail.html" className="btn btn-fill">
									Xem thêm
								</Link>
							</div>
						</div>
						<div className="course">
							<div className="course__img">
								<Link href="course-detail.html">
									<img src="/img/course-img1.jpg" alt="course-img" />
								</Link>
							</div>
							<div className="course__info">
								<h3 className="title heading --h3 --black-cl">Các khoá học sắp khai giảng</h3>
								<h2 className="heading --h1">
									<span className="heading --h3">Practical Application Course Level 3 (PAC3)</span>
									Ứng dụng thực hành
								</h2>
								<p className="desc">
									Khoá học dành cho những người thực hành đã có kinh nghiệm trước đó trong lĩnh vực
									ABA
								</p>
								<div className="teacher small">
									<div className="teacher__img">
										<img src="/img/img-lectur.jpg" alt="" />
									</div>
									<div className="teacher__info">
										<p className="teacher__info-name">Doan Nguyen</p>
										<p className="teacher__info-rank">THS.NCS</p>
									</div>
								</div>
								<Link href="course-detail.html" className="btn btn-fill">
									Xem thêm
								</Link>
							</div>
						</div>
						<div className="course">
							<div className="course__img">
								<Link href="course-detail.html">
									<img src="/img/course-img1.jpg" alt="course-img" />
								</Link>
							</div>
							<div className="course__info">
								<h3 className="title heading --h3 --black-cl">Các khoá học sắp khai giảng</h3>
								<h2 className="heading --h1">
									<span className="heading --h3">Practical Application Course Level 4 (PAC4)</span>
									Ứng dụng thực hành
								</h2>
								<p className="desc">
									Khoá học dành cho những người thực hành đã có kinh nghiệm trước đó trong lĩnh vực
									ABA
								</p>
								<div className="teacher small">
									<div className="teacher__img">
										<img src="/img/img-lectur.jpg" alt="" />
									</div>
									<div className="teacher__info">
										<p className="teacher__info-name">Doan Nguyen</p>
										<p className="teacher__info-rank">THS.NCS</p>
									</div>
								</div>
								<Link href="course-detail.html" className="btn btn-fill">
									Xem thêm
								</Link>
							</div>
						</div>
					</div>
					<div className="controlsslider">
						<button className="btn btn-control --prev">
							<svg
								width={20}
								height={8}
								viewBox="0 0 20 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64644ZM20 3.5L1 3.5L1 4.5L20 4.5L20 3.5Z"
									fill="#003CA4"
								/>
							</svg>
						</button>
						<p className="sliderpaging">
							<span className="current">1</span> of <span className="total">0</span>
						</p>
						<button className="btn btn-control --next">
							<svg
								width={20}
								height={8}
								viewBox="0 0 20 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64644ZM20 3.5L1 3.5L1 4.5L20 4.5L20 3.5Z"
									fill="#003CA4"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ListCourseHome;
