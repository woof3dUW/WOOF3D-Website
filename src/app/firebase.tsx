import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx1V98fN_NV_LtT-RKgu2nVkIb0kyJssc",
  authDomain: "woof3d-website-1a8db.firebaseapp.com",
  projectId: "woof3d-website-1a8db",
  storageBucket: "woof3d-website-1a8db.firebasestorage.app",
  messagingSenderId: "536224486201",
  appId: "1:536224486201:web:c0064a6d4e1c89761a4ee8",
  measurementId: "G-8Y58HYHZ58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const auth = getAuth(app);

export type Project = {
    title: string;
    slides: string[];
    text: string[];
}

export async function fetchProjects() {
    try {
        const querySnapshot = await getDocs(query(collection(db, "projects"), orderBy("title", "asc")));
        const projectArr: Project[] = [];
        querySnapshot.forEach((doc) => {
            projectArr.push(doc.data() as Project);
        });
        return projectArr;
    } catch (error) {
        alert(error);
    }
}

export async function fetchProjectByName(name: string) {
    try {
        const querySnapshot = await getDocs(query(collection(db, "projects"), where("title", "==", name)));
        const project: Project[] = [];
        querySnapshot.forEach((doc) => {
            project.push(doc.data() as Project);
        });
        return project[0];
    } catch (error) {
        alert(error);
    }
}