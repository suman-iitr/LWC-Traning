/* eslint-disable no-console */

import { LightningElement } from 'lwc';

export default class usingJavaScript extends LightningElement {

    greeting = "hello from JS file";

    handleChange(event) {
        this.greeting = event.target.value;
        console.log("Greeting: ", this.greeting);
        }

}