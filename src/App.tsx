import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { loadLocaleData } from '@/translations';
import '@/App.css';
import { setLocale } from '@/store/slices/app';
import { IndeterminateProgressOverlay } from '@/components';
import { AppRouter } from '@/routes';

function App() {
  const dispatch = useDispatch();
  const appStore = useSelector((state: any) => state.app);
  const [translationTokens, setTranslationTokens] = useState<object>();

  useEffect(() => {
    if (appStore.locale) {
      const processTranslationTokens = async () => {
        const tokens = loadLocaleData(appStore.locale);
        console.log('tokens', tokens);
        setTranslationTokens(tokens);
      };

      processTranslationTokens();
    } else {
      console.log('setting locale:', navigator.language);
      dispatch(setLocale(navigator.language));
    }
  }, [appStore.locale, dispatch]);

  if (!translationTokens) {
    return <IndeterminateProgressOverlay />;
  }

  return (
    <div style={{ height: '100%' }}>
      <IntlProvider
        locale={appStore.locale}
        defaultLocale="en"
        //@ts-ignore
        messages={translationTokens.default}
      >
        <AppRouter />
      </IntlProvider>
    </div>
  );
}

export default App;
