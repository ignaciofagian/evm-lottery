/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import { IntlProvider, createIntl } from 'react-intl';
import appLocales from './../lang/index';

const initialState = {
	locale: 'es',
	changeLocale: (_newLocale: 'en' | 'es') => {},
};

export let intlInstance = createIntl(appLocales.es);

const I18nContext = createContext(initialState);

function I18nProvider({ children }: any) {
	const [locale, setLocale] = useState<'en' | 'es'>('es');
	const localeConfig = appLocales[locale];

	useEffect(() => {
		const lang = localStorage.getItem('lang');
		if (lang === 'es' || lang === 'en') {
			setLocale(lang);
		}
	}, []);

	const changeLocale = (newLocale: 'en' | 'es') => {
		setLocale(newLocale);

		intlInstance = createIntl(appLocales[newLocale]);

		localStorage.setItem('lang', newLocale);
	};

	const value = {
		locale,
		changeLocale,
	};

	return (
		<I18nContext.Provider value={value}>
			<IntlProvider locale={localeConfig.locale} messages={localeConfig.messages}>
				{children}
			</IntlProvider>
		</I18nContext.Provider>
	);
}

export { I18nProvider, I18nContext };
