import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


interface MultiChoiceArgs {
    multiple: Boolean,
    choices: any,
    identifier: any
    next: any,
}

export default class MultiChoice extends Component<MultiChoiceArgs> {

    @service questionAnswer: any;

    @tracked id = this.args.identifier;

    get ansObj() {
        return this.id && this.questionAnswer.get(this.args.identifier);
    }

    get selectedChoices() {
        return this.ansObj?.selected || [];
    }

    get choices() {
        return this.args.choices.map((choice: any) => {
            if (this.selectedChoices.includes(choice.value)) {
                choice.selected = true;
            } else {
                choice.selected = false;
            }
        return choice;
        });
    }

    @action
    onChange(value: string = '', index: any) {
        this.questionAnswer.set({ id: this.args.identifier, selected: [value]})
        this.validateSelected(index);

    }

    // TODO: This is a temporary hack, find proper way to handle this
    @action
    validateSelected(index: any) {
        const ele = document.getElementsByClassName('option-button');

        for (let i=0;i<ele.length;i++ ) {
            if (i !== index && ele[i].classList.value.includes('selected')) {
                ele[i].classList.remove('selected');
            } else if (i === index) {
                ele[i].classList.add('selected');
            }
        }
        setTimeout(() => { this.args.next()}, 700);
    }
}
