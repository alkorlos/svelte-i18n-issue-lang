import '$lib/i18n';
import { locale, waitLocale } from 'svelte-i18n';

export const load = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/\w+?(?=\/|$)/) || 'en'}`;
	locale.set(lang);

	await waitLocale();
}