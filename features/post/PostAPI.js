import {collection, getDocs, query, where} from "firebase/firestore";
import {processors} from '../../js/processors'
import {database} from "../../db/firebase";

const dbInstance = collection(database, 'posts');

export function getPostByUrl(url) {
    const q = query(dbInstance, where("url", "==", url))
    return getDocs(q)
        .then(res => {
            if (res.docs.length) {
                return processors.parsePostData(res.docs[0]);
            }
            return {empty: true};
        })
}