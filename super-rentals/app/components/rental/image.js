import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    // constructor(...args) {
    //     super(...args); //gives us access to all of the parents methods and we can call those function on the parent
    //     this.isLarge = false;
    // }
    @tracked isLarge = false;

    @action toggleSize() {
        this.isLarge = !this.isLarge;
      }
}
