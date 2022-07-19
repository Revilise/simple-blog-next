import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get } from "firebase/database";

const firebaseConfig = {
    databaseURL: "https://simple-blog-84f45.europe-west3.firebaseio.com",
};
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export function getPostById(id) {
    get(ref(database, 'posts/post/'+id)).then(result => {
        if (result.exists()) {
            console.log(`value: ${result.val()}`);
            return;
        }
        console.log("no such values")
    })
}
