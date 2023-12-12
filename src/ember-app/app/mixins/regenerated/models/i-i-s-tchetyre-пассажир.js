import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  кодБрони: DS.belongsTo('i-i-s-tchetyre-код-брони', { inverse: null, async: false }),
  местоНаРейс: DS.belongsTo('i-i-s-tchetyre-место-на-рейс', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-tchetyre-пассажир.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодБрони: {
    descriptionKey: 'models.i-i-s-tchetyre-пассажир.validations.кодБрони.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  местоНаРейс: {
    descriptionKey: 'models.i-i-s-tchetyre-пассажир.validations.местоНаРейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПассажирE', 'i-i-s-tchetyre-пассажир', {
    фИО: attr('ФИО', { index: 0 }),
    местоНаРейс: belongsTo('i-i-s-tchetyre-место-на-рейс', 'Место на рейс', {
      место: attr('Место', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'место' }),
    кодБрони: belongsTo('i-i-s-tchetyre-код-брони', 'Код брони', {
      код: attr('Код', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'код' })
  });

  modelClass.defineProjection('ПассажирL', 'i-i-s-tchetyre-пассажир', {
    фИО: attr('ФИО', { index: 0 }),
    местоНаРейс: belongsTo('i-i-s-tchetyre-место-на-рейс', 'Место', {
      место: attr('Место', { index: 1 })
    }, { index: -1, hidden: true }),
    кодБрони: belongsTo('i-i-s-tchetyre-код-брони', 'Код', {
      код: attr('Код', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
