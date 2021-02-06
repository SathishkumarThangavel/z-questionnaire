import Service from '@ember/service';
import { A } from '@ember/array';

export default class QuestionAnswer extends Service {
  answers:any = A([]);

  add(answer: any) {
    this.answers.pushObject(answer);
  }

  update(answer: any) {
    const index = this.answers.findIndex((obj:any) => obj.id === answer.id);
    this.answers[index] = answer;
  }
  
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'question-answer': QuestionAnswer;
  }
}
