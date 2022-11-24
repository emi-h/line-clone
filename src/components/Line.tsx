import { SignOut } from "./SignOut"
import { auth, database } from "../firebase"
import { FC, useEffect, useState } from "react"
import { SendMessage } from "./SendMessage";
import { collection,CollectionReference,DocumentData,limit, onSnapshot, orderBy, Query, query, QuerySnapshot, Unsubscribe } from "firebase/firestore";
import React from "react"

export const Line:FC =()=>{
      const[messages,setMessages]=useState<DocumentData[]>([]);
      console.log(messages);
      

      useEffect(()=>{
            //hint:https://softauthor.com/firebase-firestore-get-document-data-with-real-time-updates/
            const dbRef:CollectionReference<DocumentData> = collection(database, "messages");
            const q:Query<DocumentData> = query(dbRef, orderBy("createdAt"), limit(50));
            const unsubscribe: Unsubscribe = onSnapshot(q, docsSnap => {
                  setMessages(docsSnap.docs.map(doc => doc.data()))
            });
            return()=>unsubscribe();
      },[])


      const CurrentUserUid =auth.currentUser?.uid

      return(
            <div>
            <SignOut />
            <div className="msgs">
                  {messages.map(({id,text,photoURL,uid})=>(
                        <div key={id} >
                              <div className={`msg ${uid === CurrentUserUid ? "sent" : "received"}`}>
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