//eventParent.js
import { LightningElement, track } from 'lwc';

export default class EventParent extends LightningElement {
@track child;

handleevent(event)
{
    // eslint-disable-next-line no-console
    console.log(event.detail);
    this.child = event.detail;
}
}