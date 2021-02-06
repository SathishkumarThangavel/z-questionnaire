import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

interface SingleQuestionArgs {
    index: number,
    question: object,
    next: any,
    previous: any
    isLastQuestion: Boolean
}

export default class SingleQuestion extends Component<SingleQuestionArgs> {
    @service('question-answer') QA: any;
    get questionNumber() {
        return this.args.index;
    }

    @action
    previous() {
        this.args.previous();
    }

    @action
    next() {
        this.args.next();
    }
}
