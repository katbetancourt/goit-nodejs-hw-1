const yargs = require("yargs");
const contacts = require("./contacts");

const argv = yargs
  .command({
    command: "list",
    describe: "List all contacts",
    handler: () => {
      contacts.listContacts();
    },
  })
  .command({
    command: "get",
    describe: "Get contact by ID",
    builder: {
      id: {
        describe: "Contact ID",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      contacts.getContactById(argv.id);
    },
  })
  .command({
    command: "add",
    describe: "Add a new contact",
    builder: {
      name: {
        describe: "Contact name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Contact email",
        demandOption: true,
        type: "string",
      },
      phone: {
        describe: "Contact phone",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      contacts.addContact(argv.name, argv.email, argv.phone);
    },
  })
  .command({
    command: "remove",
    describe: "Remove contact by ID",
    builder: {
      id: {
        describe: "Contact ID",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      contacts.removeContact(argv.id);
    },
  })
  .help().argv;
