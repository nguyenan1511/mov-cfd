const Accordion = ({ data = [] }) => {
	return (
		<ul className="accordion">
			{data?.map((item: any, index: number) => (
				<li className="accordion-item is-open" key={index}>
					<h3 className="accordion-button">
						<span>{item?.title}</span>
						<div className="arrow-icon" />
					</h3>
					{item?.description?.map((itemChild: any, indexChild: number) => (
						<p className="accordion-content is-open" key={indexChild}>
							{itemChild}
						</p>
					))}
				</li>
			))}
		</ul>
	);
};

export default Accordion;
