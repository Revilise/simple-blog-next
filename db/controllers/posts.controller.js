import { database } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, where, deleteDoc, doc } from 'firebase/firestore';
import {translitRuEn} from "../../tools/tools";

class PostsController {
    dbInstance = null;
    constructor() {
       this.dbInstance = collection(database, 'posts');
    }
    getOne = (url) => {
        console.log(url, 'from function')
        const q = query(this.dbInstance, where("url", "==", url))
        return getDocs(q)
            .then(res => {
                    const doc = res.docs[0];
                    if (doc) {
                        const data = doc.data();
                        const date = new Date();
                        date.setUTCDate(data.date)
                        return {...data, date: date.toDateString(), id: doc.id};
                    }
                    return {empty: true}
                }
            )
    }
    getAll = () => {
        const q = query(this.dbInstance, orderBy("date", "desc"));
        return getDocs(q)
            .then(res => res.docs.map((item) => {
                const data = item.data();
                const date = new Date();
                date.setUTCDate(data.date);
                return {...data, date: date.toDateString()}
        }))
    }
    post = ({title, content, description, date}) => {
        const d = new Date();
        d.setUTCDate(date);
        const url = `${translitRuEn(title)}__${d.getDay()}_${d.getMonth()}_${d.getSeconds()}`
        return addDoc(this.dbInstance, {title, content, description, date, url})
    }
    deleteById = async (id) => {
        const ref = doc(database, "posts", id)
        return deleteDoc(ref)
    }
}

const postsController = new PostsController();

export default postsController;