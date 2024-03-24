import AboutContent from "@/components/router/UIAbout/AboutContent";
import CoreTeamsAbout from "@/components/router/UIAbout/CoreTeamsAbout";
import HeroAbout from "@/components/router/UIAbout/HeroAbout";
import Volunteers from "@/components/router/UIAbout/Volunteers";

const UIAbout = () => {
	return (
		<>
			<HeroAbout />
			<AboutContent />
			<CoreTeamsAbout />
			<Volunteers />
		</>
	);
};

export default UIAbout;
