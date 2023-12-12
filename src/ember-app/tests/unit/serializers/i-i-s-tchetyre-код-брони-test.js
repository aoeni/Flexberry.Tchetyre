import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tchetyre-код-брони', 'Unit | Serializer | i-i-s-tchetyre-код-брони', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tchetyre-код-брони',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tchetyre-класс-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
