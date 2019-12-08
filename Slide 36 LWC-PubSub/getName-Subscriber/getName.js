/* eslint-disable no-console */
import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class getName extends LightningElement {

    @track name;
  @wire(CurrentPageReference) pageRef;
 
  connectedCallback() {
    registerListener("enterName", this.handleName, this);
  }
 
  disconnectedCallback() {
    unregisterAllListeners(this);
  }
 
  handleName(name) {
    console.log("Name is" + name);
    this.name = name;
  }
}