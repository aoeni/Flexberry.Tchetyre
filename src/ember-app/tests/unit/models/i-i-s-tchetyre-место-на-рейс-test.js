import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tchetyre-место-на-рейс', 'Unit | Model | i-i-s-tchetyre-место-на-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tchetyre-инф-бронь',
    'model:i-i-s-tchetyre-код-брони',
    'model:i-i-s-tchetyre-место-на-рейс',
    'model:i-i-s-tchetyre-пассажир',
    'model:i-i-s-tchetyre-посад-талон',
    'model:i-i-s-tchetyre-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
