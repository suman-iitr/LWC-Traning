import { LightningElement, track } from 'lwc';

export default class createRecordForm extends LightningElement {
   @track accountId;
   handleSuccess(event) {
       this.accountId = event.detail.id;
   }
}