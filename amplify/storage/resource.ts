import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'portfolio-storage',
  access: (allow) => ({
    'uploads/*': [
      allow.guest.to(['read']),
    ]})
});