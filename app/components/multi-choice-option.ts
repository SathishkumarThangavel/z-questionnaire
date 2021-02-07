import { action } from '@ember/object';
import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';

interface MultiChoiceOptionArgs {
    choice: any,
    index: number,
    identifier: string,
    selected: boolean,
    onChange: any
}

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

export default class MultiChoiceOption extends Component<MultiChoiceOptionArgs> {
    get questionAnswer() {
        return getOwner(this).lookup('service:question-answer');
    }

    get keyLetter() {
        return alphabets[this.args.index];
    }

    @tracked isOptionSelected = this.args.selected;
    
    get isSelected() {
        return this.isOptionSelected;
    }

    @action
    onSelected() {
        this.isOptionSelected = true;
        this.args.onChange(this.args.choice?.value, this.args.index);
    }
}
