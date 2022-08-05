import { database } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, where, deleteDoc, doc } from 'firebase/firestore';
import {translitRuEn} from "../../tools/tools";

class PostsController {
    dbInstance = null;
    constructor() {
       this.dbInstance = collection(database, 'posts');
    }
    getOne = (url) => {
        const q = query(this.dbInstance, where("url", "==", url))
        return getDocs(q)
            .then(res => {
                    const doc = res.docs[0];
                    if (doc) {
                        const data = doc.data();
                        const date = new Date(data.date);
                        return {...data, date, id: doc.id};
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
                return {...data}
        }))
    }
    post = ({title, content, description}) => {
        const date = Number(new Date());

        // todo: можно писать путь author/title с указанием полной даты.
        //  Тогда разные авторы смогут постить одинаковые называния.

        const url = `${translitRuEn(title)}_${date}`
        return addDoc(this.dbInstance, {title, content, description, date, url})
    }
    deleteById = async (id) => {
        const ref = doc(database, "posts", id)
        return deleteDoc(ref)
    }
}

const postsController = new PostsController();

export default postsController;