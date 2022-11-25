import SendIcon from "@mui/icons-material/Send";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FC, useState } from "react";
import React from "react";

import { auth, database } from "../firebase";

export const SendMessage: FC = () => {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //現在ログインしているユーザーの情報を取得
    const uid = auth.currentUser?.uid;
    const photoURL = auth.currentUser?.photoURL;
    // データ追加
    try {
      await addDoc(collection(database, "messages"), {
        // Ref:https://stackoverflow.com/questions/69519447/how-to-get-server-timestamp-from-firebase-v9
        createdAt: serverTimestamp(),
        photoURL,
        text,
        uid,
      });
      setText("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
        <div className="sendMsg">
          <input
            style={{
              borderColor: "#aaa",
              fontSize: "15px",
              fontWeight: "550",
              marginBottom: "-3px",
              marginLeft: "5px",
              padding: "10px",
              width: "78%",
            }}
            placeholder="メッセージを入力してください"
            type="text"
            onChange={handleChange}
            value={text}
          />
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
          </button>
        </div>
      </form>
    </div>
  );
};
