import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tchetyre',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tchetyre',
          title: 'Tchetyre'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
