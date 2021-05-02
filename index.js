//week 5 assignment

class ContactInfo { //this creates contact information to be presented in a uniform way
    constructor(contact, title){
        this.contact = contact;
        this.title = title;
    }

    leadSummary(){
        return `${this.contact} is a ${this.title}. They will be key to winning some deals.`;
    }
}

class Company{
    constructor(company){
        this.company = company;
    }

    leadSummary(){
        return `We are working with ${this.contact} to win some opportunities.`;
    }
}


class Menu{
    constructor(){
        this.companyList = [];
        this.contactList = [];
        this.selectedCompany = null;
    }
    start(){
        let userSelection = this.showMainMenuOptions();
        while (userSelection !=0){
            switch (userSelection){
                case "1":
                    this.addCompany();
                    break;
                case "2":
                    this.addContact();
                    break;
                case "3":
                    this.viewLeads();
                    break;
                case "4":
                    this.closeALead();
                    break;
                default:
                    userSelection = 0;
            }
            userSelection = this.showMainMenuOptions(); //brings users back to menu after prompt ends...continues loop
        }
        alert('Yeah, I dont like doing sales either...'); //zero ends loop, so the message is this...if they see this, they are out of loop
    }

    showMainMenuOptions(){
        return prompt(`
        Welcome to the CRM. Type in the number to the left of the option you want.

            1) Add a Company
            2) Add a Contact
            3) View All Leads
            4) Close a Lead

            or type in '0' to exit.
        `);
    }


    addContact(){
        let contact = prompt("Enter in the contact's name:");
        let title = prompt(`Enter in ${contact}s title:`);
        this.contactList.push(new ContactInfo(contact, title));
    }

    viewLeads(){
        let viewLeadList = '';
        let viewContactList = '';
        for (let i=0; i < this.companyList.length; i++){
            viewLeadList += i + ')' + this.companyList[i].company + '\n';
        }
        for (let i=0; i < this.contactList.length; i++){
            viewContactList += i + ')' + this.contactList[i].contact + '\n';
        }

        alert(`Today we have ${this.companyList.length} leads including: 
        ${viewLeadList} 
        
        and we have to follow up with: 
        
        ${viewContactList}`);
    }

    addCompany(){
        let company = prompt('Please enter the name of the company:');
        this.companyList.push(new Company(company));
    }

    closeALead(){
        let closedCompany = prompt('Please enter in the index of the Lead you want to close');
        if(closedCompany > -1 && closedCompany < this.companyList.length){
            this.companyList.splice(closedCompany, 1);
        }
    } 
}

let menu = new Menu ();
menu.start(); //having the .start prompt the menu to be opened