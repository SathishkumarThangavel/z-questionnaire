import Service from '@ember/service';
import { A } from '@ember/array';

export default class QuestionAnswer extends Service {
  answers:any = A([]);

  set(answer: any) {
    const index = this.answers.findIndex((obj:any) => obj.id === answer.id);

    if (index > -1) {
      this.answers[index] = answer;
    } else {
      this.answers.pushObject(answer);
    }
  }

  get(identifier: any) {
    return this.answers.find((answer: any) => answer.id === identifier) || {};
  }
  
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'question-answer': QuestionAnswer;
  }
}
