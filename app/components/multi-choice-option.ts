import Component from '@glimmer/component';

interface MultiChoiceOptionArgs {
    choice: Object,
    index: number
}

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

export default class MultiChoiceOption extends Component<MultiChoiceOptionArgs> {
    get keyLetter() {
        return alphabets[this.args.index];
    }
}
