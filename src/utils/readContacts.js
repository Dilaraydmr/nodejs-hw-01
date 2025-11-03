import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export async function readContacts() {
  try {
  
    const data = await fs.readFile(PATH_DB, "utf-8");

  
    if (!data.trim()) return [];


    return JSON.parse(data);
  } catch (error) {
 
    if (error.code === "ENOENT") {
      console.warn("Uyarı: db.json dosyası bulunamadı, yeni oluşturulacak.");
      return [];
    }
    console.error("Dosya okunurken hata oluştu:", error.message);
    return [];
  }
}
