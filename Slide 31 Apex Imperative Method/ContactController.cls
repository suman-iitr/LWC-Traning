public with sharing class ContactController { 
@AuraEnabled(cacheable=true) 
public static List<Contact> getContactList() 
{ 
return [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 10]; 
} 
}