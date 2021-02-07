import Component from '@glimmer/component';

interface FormFieldArgs {
    type: String,
    identifier: String,
    required: Boolean,
    question: any
}

export default class FormField extends Component<FormFieldArgs> {
    get isMultiChoice() {
        return this.args.type === 'multiple-choice';
    }

    get isTextArea() {
        return this.args.type === 'text' && this.args.question.multiline;
    }

    get isTextField() {
        return this.args.type === 'text' && !this.args.question.multiline;
    }

}
