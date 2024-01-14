import { useState, useCallback, useRef, useEffect } from 'react';
import { WebView } from '@/components/blocks/layout/WebView';
import { NavigationBar } from './NavigationBar';
import { WebviewTag } from 'electron';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import {
  visitPage,
  PageState,
  VisitPagePayload,
  selectCurrentPage,
  selectDefaultPage,
  goBack,
  goForward,
} from '@/store/slices/browser';
import { transformToChiaProtocol } from '@/utils/chia-utils';

const Browser: React.FC = () => {
  const dispatch = useDispatch();
  const webviewRef = useRef<WebviewTag>(null);
  const currentPage = useSelector((state: any) => selectCurrentPage(state));
  const defaultPage = useSelector((state: any) => selectDefaultPage(state));
  const [addressBar, setAddressBar] = useState('');

  useEffect(() => {
    if (!currentPage) {
      dispatch(visitPage(defaultPage));
      setAddressBar(transformToChiaProtocol(defaultPage.url));
    } else {
      setAddressBar(transformToChiaProtocol(currentPage.url));
    }
  }, [currentPage, dispatch, defaultPage, setAddressBar]);

  const handleOnDidNavigate = useCallback((location) => {
    setAddressBar(transformToChiaProtocol(location));
  }, []);

  const handleUpdateAddressBar = useCallback(
    (event) => {
      setAddressBar(transformToChiaProtocol(event.target.value));
    },
    [setAddressBar],
  );

  const handleGotoAddress = useCallback(() => {
    if (webviewRef.current && addressBar === currentPage.url) {
      webviewRef.current.reload();
      return;
    }

    const pageState: PageState = {
      scrollPosition: { x: 0, y: 0 },
      formData: {},
    };

    const payload: VisitPagePayload = {
      url: addressBar,
      title: '',
      pageState: pageState,
    };

    dispatch(visitPage(payload));
  }, [addressBar, currentPage, dispatch]);

  const handleGoToPrevPage = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  const handleGoToNextPage = useCallback(() => {
    dispatch(goForward());
  }, [dispatch]);

  const handleGoToHome = useCallback(() => {
    dispatch(visitPage(defaultPage));
  }, [dispatch, defaultPage]);

  if (!currentPage) {
    return <Spinner />;
  }

  return (
    <>
      <NavigationBar
        value={addressBar}
        onChange={handleUpdateAddressBar}
        onEnterDown={handleGotoAddress}
        onRefresh={handleGotoAddress}
        onBack={handleGoToPrevPage}
        onForward={handleGoToNextPage}
        onHome={handleGoToHome}
      />
      <WebView
        ref={webviewRef}
        onDidNavigate={handleOnDidNavigate}
        location={currentPage.url}
      />
    </>
  );
};

export { Browser };
