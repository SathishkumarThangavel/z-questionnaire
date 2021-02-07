import { action } from '@ember/object';
import Component from '@glimmer/component';

interface MultiChoiceArgs {
    multiple: Boolean,
    choices: any,
    identifier: String
}

export default class MultiChoice extends Component<MultiChoiceArgs> {
    @action
    didSelected() {
        
    }
}
