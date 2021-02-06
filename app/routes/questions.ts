import Route from '@ember/routing/route';
import questionnaire from '../constants';

export default class Questions extends Route {
  model() {
    return questionnaire.questions;
  }
}
