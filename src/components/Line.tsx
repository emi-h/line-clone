import {
  collection,
  CollectionReference,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  Query,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import React from "react";

import { auth, database } from "../firebase";
import { SendMessage } from "./SendMessage";
import { SignOut } from "./SignOut";

export const Line: FC = () => {
  const [messages, setMessages] = useState<DocumentData[]>([]);

  useEffect(() => {
    //hint:https://softauthor.com/firebase-firestore-get-document-data-with-real-time-updates/
    const dbRef: CollectionReference<DocumentData> = collection(
      database,
      "messages"
    );
    const q: Query<DocumentData> = query(
      dbRef,
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe: Unsubscribe = onSnapshot(q, (docsSnap) => {
      setMessages(docsSnap.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  const CurrentUserUid = auth.currentUser?.uid;

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, photoURL, text, uid }) => (
          <div key={id}>
            <div
              className={`msg ${uid === CurrentUserUid ? "sent" : "received"}`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};
