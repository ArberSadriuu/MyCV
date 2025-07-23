import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => i18n.changeLanguage('sq')}>Shqip</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  );
}

export default App;
