import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tchetyre-код-брони-l');
  this.route('i-i-s-tchetyre-код-брони-e',
  { path: 'i-i-s-tchetyre-код-брони-e/:id' });
  this.route('i-i-s-tchetyre-код-брони-e.new',
  { path: 'i-i-s-tchetyre-код-брони-e/new' });
  this.route('i-i-s-tchetyre-место-на-рейс-l');
  this.route('i-i-s-tchetyre-место-на-рейс-e',
  { path: 'i-i-s-tchetyre-место-на-рейс-e/:id' });
  this.route('i-i-s-tchetyre-место-на-рейс-e.new',
  { path: 'i-i-s-tchetyre-место-на-рейс-e/new' });
  this.route('i-i-s-tchetyre-пассажир-l');
  this.route('i-i-s-tchetyre-пассажир-e',
  { path: 'i-i-s-tchetyre-пассажир-e/:id' });
  this.route('i-i-s-tchetyre-пассажир-e.new',
  { path: 'i-i-s-tchetyre-пассажир-e/new' });
  this.route('i-i-s-tchetyre-посад-талон-l');
  this.route('i-i-s-tchetyre-посад-талон-e',
  { path: 'i-i-s-tchetyre-посад-талон-e/:id' });
  this.route('i-i-s-tchetyre-посад-талон-e.new',
  { path: 'i-i-s-tchetyre-посад-талон-e/new' });
  this.route('i-i-s-tchetyre-рейс-l');
  this.route('i-i-s-tchetyre-рейс-e',
  { path: 'i-i-s-tchetyre-рейс-e/:id' });
  this.route('i-i-s-tchetyre-рейс-e.new',
  { path: 'i-i-s-tchetyre-рейс-e/new' });
});

export default Router;
