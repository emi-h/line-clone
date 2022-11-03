import { SignOut } from "./SignOut"
import { database } from "../firebase"
import { useEffect, useState } from "react"
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import { SendMessage } from "./SendMessage";

export const Line =()=>{
      const[messages,setMessages]=useState([]);

      // Firebaseからデータを取得する関数
      const getData =async()=>{
            // データ取得（クエリver） Doc:https://firebase.google.com/docs/firestore/query-data/queries
            // データの制限　Doc：https://firebase.google.com/docs/firestore/query-data/order-limit-data#order_and_limit_data
            const messagesRef = collection(database, 'messages');
            const q = query(messagesRef, orderBy("createdAt"), limit(50));
            const querySnapshot = await getDocs(q);
            setMessages(querySnapshot.docs.map((doc)=>doc.data()));

            // データ取得　Doc:https://firebase.google.com/docs/firestore/quickstart#auth-required
            // const querySnapshot = await getDocs(collection(database, "messages"));
            // console.log(querySnapshot.docs[0]._document.data.value.mapValue.fields.text.stringValue);
            // querySnapshot.docs.forEach((doc) => {
            // console.log(`${doc._document.data.value.mapValue.fields.text.stringValue}`);
            // });
      }

      // マウント時のみ実行
      useEffect(()=>{
            getData();
      },[])

      return(
            <div>
            <SignOut />
            <div className="msgs">
                  {messages.map(({id,text,photoURL})=>(
                        <div key={id}>
                              <img src={photoURL} alt="" />
                              <p>{text}</p>
                              <p>{id}</p>
                        </div>
                  ))}
            </div>
            <SendMessage />
            </div>
      )
}