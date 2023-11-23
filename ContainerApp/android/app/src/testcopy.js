/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {name as appName} from './app.json';
import App from './App';
const resolveURL = Federated.createURLResolver({
  containers: {
    // eslint-disable-next-line prettier/prettier
     OneApp: Platform.OS === 'ios' ? 'http://localhost:8083/[name][ext]' : 'http://127.0.0.1:8083/[name][ext]',
    // OneApp:
    //   Platform.OS === 'ios'
    //     ? 'http://localhost:8083/OneApp.container.bundle'
    //     : 'http://localhost:8083/[name][ext]',
    //OneApp: 'https://sprightly-trifle-c0164a.netlify.app/index.android.bundle',
  },
});

//https://sprightly-trifle-c0164a.netlify.app/
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  console.log('----------scriptId------', scriptId, caller);
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
    console.log('----------main------', url);
  } else {
    url = resolveURL(scriptId, caller);
    console.log('----------else------', url.toString());
    console.log('http://127.0.0.1:8083/[name][ext]', url);
  }
  if (!url) {
    return undefined;
  }
  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
