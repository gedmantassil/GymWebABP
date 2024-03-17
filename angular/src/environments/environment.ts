import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Gymzii',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44336/',
    redirectUri: baseUrl,
    clientId: 'Gymzii_App',
    responseType: 'code',
    scope: 'offline_access Gymzii',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44336',
      rootNamespace: 'Gymzii',
    },
  },
} as Environment;
