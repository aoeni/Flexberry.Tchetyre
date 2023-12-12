import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tchetyre.caption'),
          title: i18n.t('forms.application.sitemap.tchetyre.title'),
          children: [{
            link: 'i-i-s-tchetyre-код-брони-l',
            caption: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-код-брони-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-tchetyre-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-место-на-рейс-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-tchetyre-пассажир-l',
            caption: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-пассажир-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-tchetyre-рейс-l',
            caption: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-рейс-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-tchetyre-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.tchetyre.i-i-s-tchetyre-посад-талон-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})