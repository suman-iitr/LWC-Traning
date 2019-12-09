//eventChild.js
import { LightningElement } from 'lwc';

export default class EventChild extends LightningElement {

    handleClick(event) {
        
        const label = event.target.label;
        const raiseEvent = new CustomEvent("childclick", { detail: label });
        this.dispatchEvent(raiseEvent);
    }
}