import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КлассБилетаEnum from '../enums/i-i-s-tchetyre-класс-билета';

export default FlexberryEnum.extend({
  enum: КлассБилетаEnum,
  sourceType: 'IIS.Tchetyre.КлассБилета'
});
