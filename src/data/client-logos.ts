/**
 * Logo images: favicons served via Google’s public favicon endpoint for each
 * brand’s verified primary domain (official sites from public listings /
 * Restaurantji, Namaste SF site, Bullvino’s, The Chaga Co., etc.).
 *
 * Source reference for domains is noted per entry; swap `webDomain` if a
 * brand moves—URL pattern stays the same.
 */
function faviconSrc(webDomain: string, size = 256) {
	return `https://www.google.com/s2/favicons?domain=${webDomain}&sz=${size}`;
}

export type ClientLogo = {
	readonly name: string;
	readonly icon: string;
	readonly sourceUrl: string;
};

export const clientLogosNorthOps: ClientLogo[] = [
	{
		name: "Total Fire Protection",
		...(() => {
			const webDomain = "tfp1.com";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://www.${webDomain}/` };
		})(),
	},
	{
		name: "Namaste Indian Cuisine SF",
		...(() => {
			const webDomain = "namasteindiabistro.com";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://${webDomain}/` };
		})(),
	},
	{
		name: "La Estancia",
		...(() => {
			const webDomain = "laestanciamexicanrestaurantca.com";
			return {
				icon: faviconSrc(webDomain),
				sourceUrl: `https://${webDomain}/`,
			};
		})(),
	},
	{
		name: "Bullvinos",
		...(() => {
			const webDomain = "bullvinos.com";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://www.${webDomain}/` };
		})(),
	},
	{
		name: "The Chaga Company",
		...(() => {
			const webDomain = "thechagaco.com";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://${webDomain}/` };
		})(),
	},
	{
		name: "OpenLA",
		...(() => {
			const webDomain = "openlastore.com";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://www.${webDomain}/` };
		})(),
	},
	{
		name: "Chocolat",
		...(() => {
			const webDomain = "socolachocolates.com";
			return {
				icon: faviconSrc(webDomain),
				sourceUrl: `https://www.${webDomain}/`,
			};
		})(),
	},
	{
		name: "El Palomar",
		...(() => {
			const webDomain = "elpalomarsantacruz.com";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://${webDomain}/` };
		})(),
	},
	{
		name: "Cilantros",
		...(() => {
			const webDomain = "cilantroswatsonville.com";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://${webDomain}/` };
		})(),
	},
	{
		name: "Onyx Lifestyle Club",
		...(() => {
			const webDomain = "onyxlifestyle.club";
			return { icon: faviconSrc(webDomain), sourceUrl: `https://${webDomain}/` };
		})(),
	},
];

/** Case-study row that represents two sibling brands uses El Palomar’s site favicon. */
export function logoUrlForClientName(name: string): string | undefined {
	const hit = clientLogosNorthOps.find((c) => c.name === name);
	if (hit) return hit.icon;
	if (
		name === "El Palomar + Cilantro" ||
		name === "El Palomar + Cilantros"
	)
		return faviconSrc("elpalomarsantacruz.com");
	return undefined;
}
