import { SignOut } from "./SignOut"
import { auth, database } from "../firebase"
import { useEffect, useState } from "react"
import { SendMessage } from "./SendMessage";
import { collection,limit, onSnapshot, orderBy, query } from "firebase/firestore";

export const Line =()=>{
      const[messages,setMessages]=useState([]);

      useEffect(()=>{
            //hint:https://softauthor.com/firebase-firestore-get-document-data-with-real-time-updates/
            const dbRef = collection(database, "messages");
            const q = query(dbRef, orderBy("createdAt"), limit(50));
            const unsubscribe = onSnapshot(q, docsSnap => {
                  setMessages(docsSnap.docs.map(doc => doc.data()))
            });
            return()=>unsubscribe();

      },[])

      return(
            <div>
            <SignOut />
            <div className="msgs">
                  {messages.map(({id,text,photoURL,uid})=>(
                        <div key={id} >
                              <div className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                                    <img src={photoURL} alt="" />
                                    <p>{text}</p>
                              </div>
                        </div>
                  ))}
            </div>
            <SendMessage />
            </div>
      )
}