const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts file:", err);
      return;
    }
    try {
      const contacts = JSON.parse(data);
      console.log("Contacts list:");
      console.table(contacts);
    } catch (error) {
      console.error("Error parsing contacts JSON:", error);
    }
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts file:", err);
      return;
    }
    try {
      const contacts = JSON.parse(data);
      const contact = contacts.find((c) => c.id === contactId);
      if (contact) {
        console.log("Contact found:");
        console.table(contact);
      } else {
        console.log("Contact not found.");
      }
    } catch (error) {
      console.error("Error parsing contacts JSON:", error);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts file:", err);
      return;
    }
    try {
      let contacts = JSON.parse(data);
      const index = contacts.findIndex((c) => c.id === contactId);
      if (index !== -1) {
        contacts.splice(index, 1);
        fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
          if (err) {
            console.error("Error writing contacts file:", err);
            return;
          }
          console.log("Contact removed successfully.");
        });
      } else {
        console.log("Contact not found.");
      }
    } catch (error) {
      console.error("Error parsing contacts JSON:", error);
    }
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contacts file:", err);
      return;
    }
    try {
      let contacts = JSON.parse(data);
      const newContact = { id: Date.now().toString(), name, email, phone };
      contacts.push(newContact);
      fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (err) => {
        if (err) {
          console.error("Error writing contacts file:", err);
          return;
        }
        console.log("Contact added successfully.");
      });
    } catch (error) {
      console.error("Error parsing contacts JSON:", error);
    }
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
