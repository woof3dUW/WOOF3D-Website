"use client";

import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPage() {
    // Indicates whether the user is signed in or not.
    const [signedIn, setSignedIn] = useState<boolean>(false);
    // The email field for the sign-in form.
    const [email, setEmail] = useState<string>("");
    // The password field for the sign-in form.
    const [password, setPassword] = useState<string>("");

    // Runs on page start, checks if the user is signed in.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setSignedIn(user !== null);
        });
    }, []);

    // Handles the sign-in form submission.
    const onSubmitClick = (event: React.FormEvent<HTMLFormElement>) => {
        // check if email and password are empty
        if (email.length === 0) alert("You must enter an email");
        else if (password.length === 0) alert("You must enter a password");
        else {
            // sign in with Firebase authentication
            signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                setSignedIn(user !== null);
            })
            .catch(error => {
                alert(error);
            });
            event.preventDefault();
        };
    }   

    return (
        <div className="Container">
            <main className="MainContent">
                <div className="Section">
                    {signedIn
                        ? 
                        <div className="w-full flex flex-col items-center gap-4">
                            <h1 className="Head">Select a page to edit</h1>
                            <div className="flex flex-row gap-4">
                                <Link className="SmallButton" href="/admin/officers">Officers</Link>
                                <Link className="SmallButton" href="/admin/projects">Projects</Link>
                            </div>
                            <button className="SmallButton mt-8" onClick={() => signOut(auth)}>Sign Out</button>
                        </div>
                        : 
                        <div className="w-full flex flex-col items-center">
                            <form className="flex flex-col items-center w-1/4 gap-2" onSubmit={onSubmitClick}>
                                <input className="Input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                <input className="Input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                <button className="SmallButton" type="submit">Sign In</button>
                            </form>
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}