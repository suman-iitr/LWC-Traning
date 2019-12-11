import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class navigations extends  NavigationMixin(LightningElement) {

    navigateToHome()
    {
        this[NavigationMixin.Navigate]({
            // Pass in pageReference
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }

    navigateToContact()
    {
        this[NavigationMixin.Navigate]({
            // Pass in pageReference
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        });
    }

    navigateToCaseList()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Case',
                actionName: 'list'
            },
            state: {
                filterName: '00B2E00000Ac8MjUAJ'
            }
        });

    }

    navigateToNewRecordPage() {
        // Opens the new Account record modal
        // to create an Account.
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }

}