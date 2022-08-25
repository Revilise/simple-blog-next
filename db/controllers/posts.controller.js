import { database } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, where, deleteDoc, doc, startAfter, limit } from 'firebase/firestore';
import { typecheck } from "../../js/typeCheck";
import {processors} from "../../js/processors";

class PostsController {
    dbInstance = null;

    constructor() {
       this.dbInstance = collection(database, 'posts');
    }

    getByString = (str, lastSnapshot, setLastSnapshot) => {
        return this.getAll({lastSnapshot, size: 100, setLastSnapshot})
            ?.then(res => res.filter(data => {
                    return [data.title, data.content].some(key =>
                        key.toLowerCase().includes(str.toLowerCase())
                    );
                })
            )
    }

    getAll({lastSnapshot, size, setLastSnapshot}) {
        const _limit = size ?? 10;
        if (lastSnapshot) {
            const q = query(this.dbInstance, orderBy("date", "desc"), startAfter(lastSnapshot), limit(_limit));

            return getDocs(q).then(res => {

                if (typecheck.isFunction(setLastSnapshot)) {
                    setLastSnapshot(res.docs[res.docs.length - 1]);
                }

                return res.docs.map((item) => {
                    const data = processors.parsePostData(item);
                    const content = data.content.blocks[0].text.substring(0, 255) + "...";
                    return {...data, content }
                });
            })
        }
        return null;
    }

    deleteById = async (id) => {
        const ref = doc(database, "posts", id)
        return deleteDoc(ref)
    }
}

const postsController = new PostsController();

export default postsController;