import React from 'react';
import { tr, en } from './translations';

const LocaleContext = React.createContext();

const initialState = { language: 'tr', i18n: tr };

function LocaleProvider(props) {
  const [locale, setLocale] = React.useState(initialState);

  function toggleLanguage() {
    let newLocale =
      locale.language === 'tr'
        ? { language: 'en', i18n: en }
        : { language: 'tr', i18n: tr };
    setLocale(newLocale);
  }

  return (
    <LocaleContext.Provider
      value={{ language: locale.language, toggleLanguage, i18n: locale.i18n }}
      {...props}
    />
  );
}

/** Context e kolay erişilebilmesi için yazdığımız custom hook */

function useLocale() {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error(`useLocale, LocaleProvider altında kullanılmalıdır`);
  }
  return context;
}

export { LocaleProvider, useLocale };
