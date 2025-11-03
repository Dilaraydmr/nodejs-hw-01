import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  const updated = [...contacts, newContact];
  await writeContacts(updated);
  console.log("1 kişi eklendi. Toplam kişi sayısı:", updated.length);
};

addOneContact();
