import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';


export default class apexImperativeMethod extends LightningElement {

    @track contacts;
    @track error;

    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.contacts = undefined;
            });
    }
}