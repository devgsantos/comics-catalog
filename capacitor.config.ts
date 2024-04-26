import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.comicscatalog.app',
  appName: 'comics-catalog',
  webDir: 'dist/comics-catalog/browser',
  server: {
    androidScheme: 'http',
    cleartext: true,
    url: 'http://192.168.206.37:4200'
  }
};

export default config;
