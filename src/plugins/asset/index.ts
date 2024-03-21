import { AppConfig, IsLocal } from "@/modules/config/AppConfig";

const asset = (src: string, isEnabledCDN?: boolean) => {
	isEnabledCDN = false;
	const isEnableBasePath = false;

	if (isEnabledCDN) {
		src = src.replace(`${AppConfig.getBasePath("/public")}`, "");
		return `${process.env.NEXT_PUBLIC_CDN_BASE_PATH}/public${process.env.NEXT_PUBLIC_VERSION_CDN}${src}`;
	}
	if (isEnableBasePath) {
		src = src.replace(`/${AppConfig.getBasePath()}`, "");
		return `/${AppConfig.getBasePath(src)}`;
	}

	if (IsLocal()) return src;

	return AppConfig.getBaseUrl(src);
};

export default asset;
