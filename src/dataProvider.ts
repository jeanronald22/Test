import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(
	import.meta.env.VITE_JSON_SERVER_URL,
	httpClient
);
