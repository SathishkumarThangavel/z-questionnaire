import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

interface QuestionnaireFormArgs {
    questions: any
}

export default class QuestionnaireForm extends Component<QuestionnaireFormArgs> {
    @tracked questionIndex = 0;

    get currentQuestion() { 
        return this.args.questions[this.questionIndex];
    }
    
    get isLastQuestion() {
        return !this.args.questions[this.questionIndex+1];
    }

    @action
    showNext() {
        // ToDo implement Jump Logic
        this.questionIndex++;
    }

    @action
    showPrevious() {
        this.questionIndex--;
    }
}
