import { database, app } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, where, getDoc } from 'firebase/firestore';
import {translitRuEn} from "../../tools/tools";

class PostsController {
    dbInstance = null;
    constructor() {
       this.dbInstance = collection(database, 'posts');
    }
    getOne = (id) => {
        const q = query(this.dbInstance, where("id", "==", id))
        return getDocs(q)
            .then(res => {
                const data = res.docs[0].data();
                const date = new Date();
                date.setUTCDate(data.date)
                return {...data, date: date.toDateString()};
            })
    }
    getAll = () => {
        const q = query(this.dbInstance, orderBy("date", "desc"));
        return getDocs(q)
            .then(res => res.docs.map((item) => {
                const data = item.data();
                const date = new Date();
                date.setUTCDate(data.date);
                // todo: add "time" column to firebase
                return {...data, date: date.toDateString()}
        }))
    }
    getIds = () => {
        const q = query(this.dbInstance, orderBy("date", "desc"));
        return getDocs(q)
            .then(res => res.docs.map((item) => {
                // todo: add "time" column to firebase
                return item.data().id
            }))
    }
    post = ({title, content, description, date}) => {

        const d = new Date();
        d.setUTCDate(date);
        const id = `${translitRuEn(title)}__${d.getDay()}_${d.getMonth()}_${d.getSeconds()}`
        return addDoc(this.dbInstance, {title, content, description, date, id})
            .then((res) => res)
            .catch((err) => {
                console.error(err)
            })
    }
}

const postsController = new PostsController();

export default postsController;