// src/utils/toast.ts
import { toastController } from '@ionic/core';

interface ToastOptions {
  message: string;
  duration?: number;
  position?: 'top' | 'bottom' | 'middle';
  color?: string;
}

export const showToast = async ({
  message,
  duration = 4000,
  position = 'bottom',
  color = 'primary',
}: ToastOptions) => {
  const toast = await toastController.create({
    message,
    duration,
    position,
    color,
  });
  await toast.present();
};
