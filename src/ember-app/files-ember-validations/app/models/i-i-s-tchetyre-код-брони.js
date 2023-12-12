import {
  defineNamespace,
  defineProjections,
  Model as КодБрониMixin
} from '../mixins/regenerated/models/i-i-s-tchetyre-код-брони';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КодБрониMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
