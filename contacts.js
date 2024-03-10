// Importa los módulos fs y path para trabajar con el sistema de archivos.
const fs = require("fs");
const path = require("path");

// Crea una variable contactsPath y escribe en ella la ruta al archivo contacts.json.
const contactsPath = path.join(__dirname, "db", "contacts.json");

// Añade funciones para trabajar con la colección de contactos.
function listContacts() {
  // Lee el archivo contacts.json y muestra los contactos.
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.parse(data));
  });
}

function getContactById(contactId) {
  // Lee el archivo contacts.json, busca el contacto con el ID proporcionado y lo muestra.
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find((contact) => contact.id === contactId);
    console.log(contact);
  });
}

function removeContact(contactId) {
  // Lee el archivo contacts.json, elimina el contacto con el ID proporcionado y guarda los cambios.
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContacts, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Contacto eliminado exitosamente.");
      }
    );
  });
}

function addContact(name, email, phone) {
  // Lee el archivo contacts.json, agrega un nuevo contacto, y guarda los cambios.
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    const newContact = {
      id: contacts.length + 1,
      name,
      email,
      phone,
    };
    const updatedContacts = [...contacts, newContact];
    fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContacts, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Contacto añadido exitosamente.");
      }
    );
  });
}

// Exporta las funciones creadas mediante module.exports.
module.exports = { listContacts, getContactById, removeContact, addContact };
