import { database, app } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

class PostsController {
    dbInstance = null;
    constructor() {
       this.dbInstance = collection(database, 'posts');
    }
    getAll = () => {

        const q = query(this.dbInstance, orderBy("date", "desc"));

        return getDocs(q)
            .then(res => res.docs.map((item) => {
                const data = item.data();
                const date = new Date();
                date.setUTCDate(data.date);

                return {...data, date: date.toDateString(), id: item.id}
        }))
    }
    getAllIds = () => {
        return getDocs(this.dbInstance)
            .then(res => res.docs.map(item => {
                return {id: item.id}
            }))
    }
    post = ({title, content, description, date}) => {
        return new Promise((res, rej) => {
            addDoc(this.dbInstance, {title, content, description, date})
                .then(() => res())
                .catch((err) => {
                    console.error(err)
                    rej();
                })
        })
    }
}

const postsController = new PostsController();

export default postsController;