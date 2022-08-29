import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move'
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    //fetch from db
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    try {
      addDoc(collection(db, "posts"), {
        name: user.displayName,
        desc: user.email,
        msg: input,
        photoUrl: user.photoURL || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
      //.then(() => console.log("Post added to db"));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon></CreateIcon>
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            color="#70B5F9"
            Icon={ImageIcon}
            title="Photo"
          ></InputOption>
          <InputOption
            color="#70B5F9"
            Icon={SubscriptionsIcon}
            title="Video"
          ></InputOption>
          <InputOption
            color="#70B5F9"
            Icon={EventNoteIcon}
            title="Event"
          ></InputOption>
          <InputOption
            color="#70B5F9"
            Icon={CalendarViewDayIcon}
            title="Write article"
          ></InputOption>
        </div>
      </div>

      {/*POST*/}
      <FlipMove>
        {posts.map(({ id, data: { name, desc, msg, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            desc={desc}
            photoUrl={photoUrl}
            msg={msg}
          ></Post>
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
