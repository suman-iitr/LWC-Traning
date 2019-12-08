import { LightningElement, wire } from "lwc";
import { CurrentPageReference } from "lightning/navigation";
import { fireEvent } from "c/pubsub";

export default class nameSearch extends LightningElement {
  @wire(CurrentPageReference) pageRef;

  handleKeyUp(evt) {
    const isEnterKey = evt.keyCode === 13;
    if (isEnterKey) {
      fireEvent(this.pageRef, "enterName", evt.target.value);
    }
  }
}
