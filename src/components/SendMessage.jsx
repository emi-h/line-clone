import { useState } from "react"
import { serverTimestamp,addDoc,collection } from "firebase/firestore";
import { auth, database } from "../firebase";
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from 'uuid';

export const SendMessage =()=>{
      const [message ,setMessage]=useState();
      const sendMessage = async(e)=>{
            e.preventDefault();

            const{uid,photoURL}= auth.currentUser;
            // データ追加
            try {
                  const docRef = await addDoc(collection(database, "messages"), {
                  //   id:uuidv4(),
                    text:message,
                    photoURL,
                    uid,
                    // Ref:https://stackoverflow.com/questions/69519447/how-to-get-server-timestamp-from-firebase-v9
                    createdAt:serverTimestamp(),
                  });
                  setMessage("");
                  console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                  console.error("Error adding document: ", e);
                }
      }

      return (
            <div>
                  <form onSubmit={sendMessage}>
                        <div className="sendMsg">
                              <input
                              style={{
                                    width: "78%",
                                    fontSize: "15px",
                                    fontWeight: "550",
                                    marginLeft: "5px",
                                    marginBottom: "-3px",
                                  }}
                              placeholder="メッセージを入力してください" type="text" onChange={(e)=> setMessage(e.target.value)} value={message}/>
                              <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
                        </div>
                  </form>
            </div>
      )
}