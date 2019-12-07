/* eslint-disable no-console */
import { LightningElement,track } from 'lwc';

export default class testTrack extends LightningElement {

     @track greeting = "hello world";

    handleChange(event)
    {
        this.greeting = event.target.value;
        console.log(this.greeting);
    }
}