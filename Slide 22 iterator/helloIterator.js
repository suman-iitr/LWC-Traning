import { LightningElement } from 'lwc';

export default class helloIterator extends LightningElement {

    contacts = [
        {
            Id: 1,
            Name: 'Suman Halder',
            Title: 'Developer',
        },
        {
            Id: 2,
            Name: 'Snehashis Ghosh',
            Title: 'Developer Lead',
        },
        {
            Id: 3,
            Name: 'Mark Waugh',
            Title: 'CEO',
        },
    ];

}