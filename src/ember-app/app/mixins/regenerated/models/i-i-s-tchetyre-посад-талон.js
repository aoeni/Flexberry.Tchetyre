import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пассажир: DS.belongsTo('i-i-s-tchetyre-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-tchetyre-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  пассажир: {
    descriptionKey: 'models.i-i-s-tchetyre-посад-талон.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-tchetyre-посад-талон.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосадТалонE', 'i-i-s-tchetyre-посад-талон', {
    пассажир: belongsTo('i-i-s-tchetyre-пассажир', 'Пассажир', {
      кодБрони: belongsTo('i-i-s-tchetyre-код-брони', '', {
        код: attr('Код бронирования', { index: 1 })
      }, { index: -1, hidden: true }),
      фИО: attr('ФИО', { index: 2, hidden: true }),
      местоНаРейс: belongsTo('i-i-s-tchetyre-место-на-рейс', '', {
        место: attr('Место', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    рейс: belongsTo('i-i-s-tchetyre-рейс', 'Рейс', {
      куда: attr('Куда', { index: 5, hidden: true }),
      откуда: attr('Откуда', { index: 6 }),
      дата: attr('Дата', { index: 7 }),
      времяОтпр: attr('Время отправления', { index: 8 }),
      начПосад: attr('Начало посадки', { index: 9 }),
      конецПосад: attr('Конец посадки', { index: 10 }),
      выход: attr('Выход', { index: 11 })
    }, { index: 4, displayMemberPath: 'куда' })
  });

  modelClass.defineProjection('ПосадТалонL', 'i-i-s-tchetyre-посад-талон', {
    пассажир: belongsTo('i-i-s-tchetyre-пассажир', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true }),
    рейс: belongsTo('i-i-s-tchetyre-рейс', 'Куда', {
      куда: attr('Куда', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
