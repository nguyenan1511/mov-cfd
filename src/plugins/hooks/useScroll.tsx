import type { MutableRefObject } from "react";
import { useEffect, useState } from "react";

interface IuseScroll {
	ref: MutableRefObject<HTMLElement>;
	onChange: (scrollTop: number, scrollLeft: number) => void;
}

const useScroll = ({ ref, onChange }: IuseScroll) => {
	//

	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	useEffect(() => {
		if (typeof window == "undefined") return;
		// effect
		let req: number;
		const animate = () => {
			if (!ref.current) return;
			const { scrollLeft, scrollTop } = ref.current;

			const _top = Math.ceil(scrollTop);
			const _left = Math.ceil(scrollLeft);

			setTop(_top);
			setLeft(_left);

			if (_top != top || _left != left) if (onChange) onChange(_top, _left);

			req = window.requestAnimationFrame(animate);
		};
		animate();

		return () => {
			// cleanup
			if (req) window.cancelAnimationFrame(req);
		};
	}, [ref, onChange]);

	return [top, left];
};

export default useScroll;
