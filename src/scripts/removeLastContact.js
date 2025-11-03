import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) return console.log("Silinecek kişi yok.");
  const removed = contacts.pop();
  await writeContacts(contacts);
  console.log("Silinen kişi:", removed);
};

removeLastContact();
