import EmberRouter from '@ember/routing/router';
import config from 'z-questionnaire/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('questions');
  this.route('thankyou');
});
