import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const PATH_DB = path.join(__dirname, "../db/db.json");


export const generateContacts = async (count = 5) => {
  try {
    const contacts = (await readContacts()) || []; 
    const newContacts = Array.from({ length: count }, () => createFakeContact());
    const updated = [...contacts, ...newContacts];
    await writeContacts(updated);
    console.log(`${count} kişi eklendi. Toplam kişi sayısı: ${updated.length}`);
  } catch (error) {
    console.error("Kişiler oluşturulurken hata oluştu:", error.message);
  }
};

generateContacts(5);
