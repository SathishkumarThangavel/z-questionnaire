import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

interface QuestionnaireFormArgs {
    questions: any,
    submit: any
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
    async showNext() {
        // ToDo implement Jump Logic
        this.questionIndex++;
        await this.prevTransition();
    }

    @action
    async showPrevious() {
        this.questionIndex--;
        await this.nextTransition();
    }

    @action
    nextTransition() {
        const ele = document.getElementsByClassName('question-container')[0];
        ele.classList.remove('prev-question');
        ele.classList.add('next-question');
        setTimeout(() => { ele.classList.remove('next-question'); }, 100);
    }

    @action
    async prevTransition() {
        const ele = document.getElementsByClassName('question-container')[0];
        ele.classList.remove('next-question');
        ele.classList.add('prev-question');
        setTimeout(() => { ele.classList.remove('prev-question'); }, 600);
    }
}
