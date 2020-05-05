/**
 * This code handles localized strings using i18n and react native.
 * It's been taken from the excellent Ignite Bowser Starter Template.
 */
import Localize from 'react-native-localize';
import i18n from 'i18n-js';
import en from './locales/en.json';

i18n.fallbacks = true;
i18n.translations = {en};

const fallback = {languageTag: 'en', isRTL: false};

const {languageTag} =
  Localize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
  fallback;
i18n.locale = languageTag;
