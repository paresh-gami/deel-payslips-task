import React, { useEffect, useState } from 'react';
import { IonToggle, IonLabel, IonItem } from '@ionic/react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(prefersDark.matches);
    prefersDark.addEventListener('change', (mediaQuery) => setIsDarkMode(mediaQuery.matches));
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <IonItem>
      <IonLabel>Dark Mode</IonLabel>
      <IonToggle
        checked={isDarkMode}
        onIonChange={(e) => setIsDarkMode(e.detail.checked)}
      />
    </IonItem>
  );
};

export default ThemeToggle;
