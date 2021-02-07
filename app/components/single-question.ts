import Component from '@glimmer/component';
import { action } from "@ember/object";

interface SingleQuestionArgs {
    index: number,
    question: any,
    next: any,
    previous: any,
    submit: any,
    isLastQuestion: Boolean,
}

export default class SingleQuestion extends Component<SingleQuestionArgs> {

    get questionNumber() {
        return this.args.index + 1;
    }

    get isTextField() {
        return !this.args.isLastQuestion && this.args.question?.question_type === 'text';
    }

    @action
    async previous() {
        this.args.previous();
    }

    @action
    async next() {
        this.args.next();
    }
}
