import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";

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

export type Officer = {
    name: string;
    role: string;
    picture: string;
    bio: string;
    rank: number;
}

export async function fetchProjects(current: boolean) {
    try {
        const querySnapshot = await getDocs(query(collection(db, "projects"), where("current", "==", current), orderBy("title", "asc")));
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

export async function addProject(title: string, slides: string[], text: string[], current: boolean) {
    try {
        await addDoc(collection(db, "projects"), {
            title: title,
            slides: slides,
            text: text,
            current: current
        });
    } catch (error) {
        alert(error); 
    } 
}

export async function addOfficer(name: string, role: string, picture: string, bio: string, rank: number) {
    try {
        await addDoc(collection(db, "officers"), {
            name: name,
            role: role,
            picture: picture,
            bio: bio,
            rank: rank
        });
    } catch (error) {
        alert(error); 
    } 
}

export async function fetchOfficers() {
    try {
        const querySnapshot = await getDocs(query(collection(db, "officers"), orderBy("rank", "asc")));
        const officerArr: Officer[] = [];
        querySnapshot.forEach((doc) => {
            officerArr.push(doc.data() as Officer);
        });
        return officerArr;
    } catch (error) {
        alert(error);
    }
}