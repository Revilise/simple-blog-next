import { database, app } from "../firebase";
import { collection, addDoc, getDocs } from 'firebase/firestore';

class PostsController {
    dbInstance = null;
    constructor() {
       this.dbInstance = collection(database, 'posts');
    }
    getAllPosts = () => {
        return getDocs(this.dbInstance)
            .then(res => res.docs.map((item) => {
                return {...item.data(), id: item.id}
        }))
    }
    getAllPostIds = () => {
        return getDocs(this.dbInstance)
            .then(res => res.docs.map(item => {
                return {id: item.id}
            }))
    }
}

const controller = new PostsController();
export const { getAllPosts, getAllPostIds } = controller;