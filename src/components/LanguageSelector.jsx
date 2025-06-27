// LanguageSelector.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='text-white p-2'>
      <button onClick={() => changeLanguage('en')} className='mr-2'>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
};

export default LanguageSelector;
