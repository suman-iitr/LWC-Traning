import {LightningElement,track} from 'lwc';

export default class publicPropertySet extends LightningElement {

    @track stringValue = 'Milk';

    handleStringChange(event) {
        this.stringValue = event.target.value;
    }

}