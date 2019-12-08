/* eslint-disable no-console */
//https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form/documentation
//Editing a Record
import {
    LightningElement,
    api
} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class editForm extends LightningElement {

    // The record page provides recordId and objectApiName 
    @api recordId;
    @api objectApiName;
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];

    handleSubmit(event) {
        event.preventDefault(); // stop the form from submitting 
        const fields = event.detail.fields;
        fields.NAME_FIELD = 'My Custom Last Name'; // modify a field
        console.log(fields.NAME_FIELD);
        console.log(fields.REVENUE_FIELD);
        console.log(fields.INDUSTRY_FIELD);
        this.template.querySelector('lightning-record-form').submit(fields);
    }
}