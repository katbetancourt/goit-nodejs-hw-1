
const argv = require("yargs").argv;
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');


listContacts(); 
getContactById(1); 
removeContact(2); 
addContact('John Doe', 'john@example.com', '123456789'); 


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
