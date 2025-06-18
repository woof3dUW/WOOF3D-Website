import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, orderBy, query, updateDoc, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx1V98fN_NV_LtT-RKgu2nVkIb0kyJssc",
  authDomain: "woof3d-website-1a8db.firebaseapp.com",
  projectId: "woof3d-website-1a8db",
  storageBucket: "woof3d-website-1a8db.firebasestorage.app",
  messagingSenderId: "536224486201",
  appId: "1:536224486201:web:c0064a6d4e1c89761a4ee8",
  measurementId: "G-8Y58HYHZ58"
};

// Initialize Firebase.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Used for Firebase authentication.
export const auth = getAuth(app);

export type Project = {
    id: string;
    title: string;
    slides: string[];
    text: string[];
    current: boolean;
}

export type Officer = {
    id: string;
    name: string;
    role: string;
    picture: string;
    bio: string;
    rank: number;
}

// Fetches projects in alphabetical order. Current indicates whether to fetch current projects or past projects. 
// Setting current to null fetches all projects.
export async function fetchProjects(current: boolean | null) {
    try {
        const querySnapshot = current === null ? await getDocs(query(collection(db, "projects"), orderBy("title", "asc")))
            : await getDocs(query(collection(db, "projects"), where("current", "==", current), orderBy("title", "asc")));
        const projectArr: Project[] = [];
        querySnapshot.forEach((doc) => {
            projectArr.push({...(doc.data() as Project), id: doc.id});
        });
        return projectArr;
    } catch (error) {
        alert(error);
    }
}

// Fetches a project by its name. Includes the Firebase document's ID in the returned Project object.
export async function fetchProjectByName(name: string) {
    try {
        const querySnapshot = await getDocs(query(collection(db, "projects"), where("title", "==", name)));
        const project: Project[] = [];
        querySnapshot.forEach((doc) => {
            project.push({...(doc.data() as Project), id: doc.id});
        });
        return project[0];
    } catch (error) {
        alert(error);
    }
}

// Adds a project with the given title, slides, text, and current status.
export async function addProject(title: string, slides: string[], text: string[], current: boolean) {
    try {
        // capitalize the first letter of the title for sorting purposes
        const upperTitle = title[0].toUpperCase() + title.slice(1); 
        await addDoc(collection(db, "projects"), {
            title: upperTitle,
            slides: slides,
            text: text,
            current: current,
        });
    } catch (error) {
        alert(error); 
    } 
}

// Removes a project by its Firebase document ID.
export async function removeProject(id: string) {
    try {
        await deleteDoc(doc(db, "projects", id));
    } catch (error) {
        alert(error);
    }
}

// Updates a project using the given ID, title, slides, text, and current status.
export async function updateProject(id: string, title: string, slides: string[], text: string[], current: boolean) {
    try {
        await updateDoc(doc(db, "projects", id), {
            title: title,
            slides: slides,
            text: text,
            current: current,
        });
    } catch (error) {
        alert(error);
    }
}

// Adds an officer with the given name, role, picture, bio, and rank.
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

// Fetches all officers, ordered by their rank in ascending order. Includes the Firebase document's ID in the returned Officer objects.
export async function fetchOfficers() {
    try {
        const querySnapshot = await getDocs(query(collection(db, "officers"), orderBy("rank", "asc")));
        const officerArr: Officer[] = [];
        querySnapshot.forEach((doc) => {
            officerArr.push({ ...(doc.data() as Officer), id: doc.id });
        });
        return officerArr;
    } catch (error) {
        alert(error);
    }
}

// Removes an officer by their Firebase document ID.
export async function removeOfficer(id: string) {
    try {
        await deleteDoc(doc(db, "officers", id));
    } catch (error) {
        alert(error);
    }
}

// Updates an officer's details using the given ID, name, role, picture, bio, and rank.
export async function updateOfficer(id: string, name: string, role: string, picture: string, bio: string, rank: number) {
    try {
        await updateDoc(doc(db, "officers", id), {
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