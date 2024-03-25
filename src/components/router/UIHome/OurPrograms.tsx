import Link from "next/link";
import React from "react";

const OurPrograms = () => {
	return (
		<section className="ourprograms">
			<div className="container">
				<div className="textbox --mb --center">
					<h2 className="heading --h2 textbox --center">Our Programs</h2>
				</div>
				<div className="scknowledgehub__list list-textbox-card">
					<div className="textbox-card">
						<h3 className="title">
							<Link href="#" className="heading --h4">
								Practical Application Curriculum (PAC) Handout
							</Link>
						</h3>
						<p className="text --small">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium
						</p>
						<Link href="article-detail.html" className="btn-card btn btn-fill">
							Xem thêm
						</Link>
					</div>
					<div className="textbox-card">
						<h3 className="title">
							<Link href="#" className="heading --h4">
								VANA Training Program
							</Link>
						</h3>
						<p className="text --small">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium
						</p>
						<Link href="article-detail.html" className="btn-card btn btn-fill">
							Xem thêm
						</Link>
					</div>
					<div className="textbox-card">
						<h3 className="title">
							<Link href="#" className="heading --h4">
								VB-MAPP/VBA with PaTTAn
							</Link>
						</h3>
						<p className="text --small">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium
						</p>
						<Link href="article-detail.html" className="btn-card btn btn-fill">
							Xem thêm
						</Link>
					</div>
					<div className="textbox-card">
						<h3 className="title">
							<Link href="#" className="heading --h4">
								Advance Professional Development
							</Link>
						</h3>
						<p className="text --small">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium
						</p>
						<Link href="article-detail.html" className="btn-card btn btn-fill">
							Xem thêm
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurPrograms;
