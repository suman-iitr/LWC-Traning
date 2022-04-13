import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import mychannel from '@salesforce/messageChannel/mychannel__c';

export default class Testing  extends  LightningElement {

    @wire(MessageContext)
    messageContext;

    handleClick()
    {
        console.log("after click");
        let txtval = this.template.querySelector("lightning-input");
        let finalval = txtval.value;
        console.log(finalval);
        const payload = { recordId: finalval };
        publish(this.messageContext, mychannel, payload);
    }

    
    
}