import { FC, useState } from "react"
import { serverTimestamp,addDoc,collection } from "firebase/firestore";
import { auth, database } from "../firebase";
import SendIcon from '@mui/icons-material/Send';
import React from "react"

export const SendMessage:FC =()=>{
      const[text,setText]=useState("")
      const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            setText(e.target.value)
      }
      const handleSendMessage = async(e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            //現在ログインしているユーザーの情報を取得
            const uid = auth.currentUser?.uid;
            const photoURL =auth.currentUser?.photoURL;
            // データ追加
            try {
                  const docRef = await addDoc(collection(database, "messages"), {
                    text,
                    photoURL,
                    uid,
                    // Ref:https://stackoverflow.com/questions/69519447/how-to-get-server-timestamp-from-firebase-v9
                    createdAt:serverTimestamp(),
                  });
                  setText("");
                  console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                  console.error("Error adding document: ", e);
                }
      }

      return (
            <div>
                  <form onSubmit={handleSendMessage}>
                        <div className="sendMsg">
                              <input
                              style={{
                                    width: "78%",
                                    fontSize: "15px",
                                    fontWeight: "550",
                                    marginLeft: "5px",
                                    marginBottom: "-3px",
                                    padding:"10px",
                                    borderColor:"#aaa"
                                  }}
                              placeholder="メッセージを入力してください" type="text" onChange={handleChange} value={text}/>
                              <button style={{
                                    backgroundColor:"transparent",
                                    borderColor:"transparent"
                                  }}><SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} /></button>
                        </div>
                  </form>
            </div>
      )
}