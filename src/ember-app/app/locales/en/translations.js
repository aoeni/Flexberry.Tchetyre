import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTchetyreКодБрониLForm from './forms/i-i-s-tchetyre-код-брони-l';
import IISTchetyreМестоНаРейсLForm from './forms/i-i-s-tchetyre-место-на-рейс-l';
import IISTchetyreПассажирLForm from './forms/i-i-s-tchetyre-пассажир-l';
import IISTchetyreПосадТалонLForm from './forms/i-i-s-tchetyre-посад-талон-l';
import IISTchetyreРейсLForm from './forms/i-i-s-tchetyre-рейс-l';
import IISTchetyreКодБрониEForm from './forms/i-i-s-tchetyre-код-брони-e';
import IISTchetyreМестоНаРейсEForm from './forms/i-i-s-tchetyre-место-на-рейс-e';
import IISTchetyreПассажирEForm from './forms/i-i-s-tchetyre-пассажир-e';
import IISTchetyreПосадТалонEForm from './forms/i-i-s-tchetyre-посад-талон-e';
import IISTchetyreРейсEForm from './forms/i-i-s-tchetyre-рейс-e';
import IISTchetyreИнфБроньModel from './models/i-i-s-tchetyre-инф-бронь';
import IISTchetyreКодБрониModel from './models/i-i-s-tchetyre-код-брони';
import IISTchetyreМестоНаРейсModel from './models/i-i-s-tchetyre-место-на-рейс';
import IISTchetyreПассажирModel from './models/i-i-s-tchetyre-пассажир';
import IISTchetyreПосадТалонModel from './models/i-i-s-tchetyre-посад-талон';
import IISTchetyreРейсModel from './models/i-i-s-tchetyre-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tchetyre-инф-бронь': IISTchetyreИнфБроньModel,
    'i-i-s-tchetyre-код-брони': IISTchetyreКодБрониModel,
    'i-i-s-tchetyre-место-на-рейс': IISTchetyreМестоНаРейсModel,
    'i-i-s-tchetyre-пассажир': IISTchetyreПассажирModel,
    'i-i-s-tchetyre-посад-талон': IISTchetyreПосадТалонModel,
    'i-i-s-tchetyre-рейс': IISTchetyreРейсModel
  },

  'application-name': 'Tchetyre',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tchetyre',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tchetyre',
          title: 'Tchetyre'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        tchetyre: {
          caption: 'Tchetyre',
          title: 'Tchetyre',
          'i-i-s-tchetyre-код-брони-l': {
            caption: 'Код брони',
            title: ''
          },
          'i-i-s-tchetyre-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-tchetyre-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          },
          'i-i-s-tchetyre-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-tchetyre-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tchetyre-код-брони-l': IISTchetyreКодБрониLForm,
    'i-i-s-tchetyre-место-на-рейс-l': IISTchetyreМестоНаРейсLForm,
    'i-i-s-tchetyre-пассажир-l': IISTchetyreПассажирLForm,
    'i-i-s-tchetyre-посад-талон-l': IISTchetyreПосадТалонLForm,
    'i-i-s-tchetyre-рейс-l': IISTchetyreРейсLForm,
    'i-i-s-tchetyre-код-брони-e': IISTchetyreКодБрониEForm,
    'i-i-s-tchetyre-место-на-рейс-e': IISTchetyreМестоНаРейсEForm,
    'i-i-s-tchetyre-пассажир-e': IISTchetyreПассажирEForm,
    'i-i-s-tchetyre-посад-талон-e': IISTchetyreПосадТалонEForm,
    'i-i-s-tchetyre-рейс-e': IISTchetyreРейсEForm
  },

});

export default translations;
