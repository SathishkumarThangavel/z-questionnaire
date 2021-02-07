import Component from '@glimmer/component';
import { action } from "@ember/object";

interface AppFooterArgs {
    index: number,
    next: any,
    previous: any
    isLastQuestion: Boolean
}

export default class AppFooter extends Component<AppFooterArgs> {

    @action
    async previous() {
        this.args.previous();
    }

    @action
    async next() {
        this.args.next();
    }
}
