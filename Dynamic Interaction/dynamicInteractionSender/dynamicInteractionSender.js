import { LightningElement,api } from 'lwc';

export default class DynamicInteractionSender extends LightningElement {
    @api senderText;
    @api senderText1;

    handlechang(event)
    {
        this.senderText = event.target.value;
    }
    handlechang1(event)
    {
        this.senderText1 = event.target.value;
    }
    handleClick()
    {
        
        this.dispatchEvent( 
            new CustomEvent("sendText",{
                detail:{
                    senderText: this.senderText
                }
            })
            );

            this.dispatchEvent( 
                new CustomEvent("sendText1",{
                    detail:{
                        senderText1: this.senderText1
                    }
                })
                );
        
    }
}