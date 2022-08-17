import { database } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, where, deleteDoc, doc } from 'firebase/firestore';
import {translateRuEn} from "../../js/translateRuEn";

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
                        const content = JSON.parse(data.content);
                        return {...data, date, content, id: doc.id};
                    }
                    return {empty: true}
                }
            )
    }
    getByString = (str) => {
        return this.getAll().then(res => res.filter(data => {
            return [data.title, data.content].some(key =>
                    key.toLowerCase().includes(str.toLowerCase())
                );
        }))
    }
    getAll = () => {
        const q = query(this.dbInstance, orderBy("date", "desc"));
        return getDocs(q)
            .then(res => res.docs.map((item) => {
                const data = item.data();
                const contentObj = JSON.parse(data.content)
                const content = contentObj.blocks[0].text.substring(0, 255) + "..."
                return {...data, content}
        }))
    }
    post = ({title, content}) => {
        const date = Number(new Date());

        // todo: можно писать путь author/title с указанием полной даты.
        //  Тогда разные авторы смогут постить одинаковые называния.

        const url = `${translateRuEn(title)}_${date}`
        return addDoc(this.dbInstance, {title, content: JSON.stringify(content), date, url})
    }
    deleteById = async (id) => {
        const ref = doc(database, "posts", id)
        return deleteDoc(ref)
    }
}

const postsController = new PostsController();

export default postsController;