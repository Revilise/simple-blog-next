import {processors} from "../../js/processors";
import {addDoc, collection} from "firebase/firestore";
import {database} from "../../db/firebase";

const dbInstance = collection(database, 'posts');

export function createNewRecord({title, content}){
    const date = Number(new Date());
    const url = `${processors.translateRuEn(title)}_${date}`
    return addDoc(dbInstance, {title, content: JSON.stringify(content), date, url})
}