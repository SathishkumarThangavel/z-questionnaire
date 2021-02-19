import Route from '@ember/routing/route';

export default class Questions extends Route {
  async model() {
    let response = await fetch('/api/questionnaire.json');
    let parsed:any = await response.json();
    return parsed.questionnaire?.questions;
  }
}
