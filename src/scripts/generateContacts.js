import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    
    const contacts = await readContacts();

    
    const newContacts = Array.from({ length: number }, () => createFakeContact());


    const updatedContacts = [...contacts, ...newContacts];

  
    await writeContacts(updatedContacts);

    console.log(`${number} yeni kişi eklendi. Toplam kişi sayısı: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Kişiler oluşturulurken hata oluştu:', error);
  }
};

generateContacts(5);
