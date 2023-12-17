import React, { FunctionComponent, useEffect } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { Alert } from '@/components/customs';
import { Loading, UpgradeVersion } from '@/components/shared';
import { ThemeContext } from '@/contexts';
import { useFcm } from '@/hooks';
import RootNavigation from '@/navigation/RootNavigation';
import { persistor, store } from '@/redux/store';

const App: FunctionComponent = () => {
  const { requestPermission } = useFcm();

  useEffect(() => {
    requestPermission();
    PushNotification.setApplicationIconBadgeNumber(0);
  }, [requestPermission]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider
          initialMetrics={{
            frame: { x: 0, y: 0, width: 0, height: 0 },
            insets: { top: 0, left: 0, right: 0, bottom: 0 },
          }}
        >
          <ThemeContext>
            <GestureHandlerRootView style={{ flex: 1 }}>
              {/* ALERT */}
              <Alert />

              {/* LOADING API */}
              <Loading />

              {/* MAIN APP */}
              <RootNavigation />

              {/* Modal progressing when upgrade version of app */}
              {/* <UpgradeVersion /> */}
            </GestureHandlerRootView>
          </ThemeContext>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
