
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.39b62c3405474f79afc24f4117feb9d4',
  appName: 'vibe-sphere-apk-export',
  webDir: 'dist',
  server: {
    url: 'https://39b62c34-0547-4f79-afc2-4f4117feb9d4.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
