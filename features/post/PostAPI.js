import {collection, getDocs, query, where} from "firebase/firestore";
import {database} from "../../db/firebase";

const dbInstance = collection(database, 'posts');
const processData = (doc) => {
    const data = doc.data();
    const date = new Date(data.date);
    const content = JSON.parse(data.content);
    const id = doc.id;

    return {...data, date, content, id};
}

export function getPostByUrl(url) {
    const q = query(dbInstance, where("url", "==", url))
    return getDocs(q)
        .then(res => {
            if (res.docs.length) {
                return processData(res.docs[0]);
            }
            return {empty: true};
        })
}