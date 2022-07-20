import { database, app } from "../firebase";
import { collection, addDoc, getDocs } from 'firebase/firestore';

class PostsController {
    dbInstance = null;
    constructor() {
       this.dbInstance = collection(database, 'posts');
    }
    getAll = () => {
        return getDocs(this.dbInstance)
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
        addDoc(this.dbInstance, {title, content, description, date})
            .catch((err) => console.error(err))
    }
}

const postsController = new PostsController();

export default postsController;