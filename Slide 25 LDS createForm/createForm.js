import {LightningElement,api} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class createForm extends LightningElement {

    // objectApiName is "Account" when this component is placed on an account record page
    @api objectApiName; 
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }

}