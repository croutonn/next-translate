export { default as DynamicNamespaces } from './DynamicNamespaces'
export { default as I18nProvider } from './I18nProvider'
export { default as Trans } from './Trans'
export { default as appWithI18n } from './appWithI18n'
export { default as i18nMiddleware } from './i18nMiddleware'
export { default as useTranslation } from './useTranslation'
export { default as withTranslation } from './withTranslation'

console.warn(
  "🚨 [next-translate] Replace all global imports like `import {useTranslate} from 'next-translate'` to specific imports like `import useTranslate from 'next-translate/useTranslate'`. Globals imports will be removed in next releases."
)
