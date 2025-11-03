import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log("Toplam kişi:", contacts.length);
};

countContacts();
