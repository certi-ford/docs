import type {Config} from '@docusaurus/types';
import config from './docusaurus.config';

// Copy of the site served at https://certi.life/docs/ through the certi.life nginx proxy.
// CI builds it into build/docs, so GitHub Pages serves it at docs.certi.life/docs/ next to the root site.
// noIndex while certi.life/docs is under verification: docs.certi.life stays the indexed original.
export default {
  ...config,
  url: 'https://certi.life',
  baseUrl: '/docs/',
  noIndex: true,
  // The local search plugin drops noindex pages from its index unless told otherwise.
  themes: config.themes?.map((theme) =>
    Array.isArray(theme) && theme[0] === '@easyops-cn/docusaurus-search-local'
      ? [theme[0], {...(theme[1] as object), forceIgnoreNoIndex: true}]
      : theme,
  ),
} satisfies Config;
