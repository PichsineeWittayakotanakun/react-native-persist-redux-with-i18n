/* eslint-disable react/react-in-jsx-scope */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './localization/i18n';

export function MyProject() {

return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider   I18nextProvider i18n={i18n}>
                <App/>
            </I18nextProvider>
        </PersistGate>
    </Provider>
);
}
AppRegistry.registerComponent(appName, () => MyProject);
