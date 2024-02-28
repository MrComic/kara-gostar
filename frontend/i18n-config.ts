export const i18n = {
    defaultLocale: 'fa',
    locales: ['fa','en','cs'],
} as const;

export type Locale = typeof i18n['locales'][number];
