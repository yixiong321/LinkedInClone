import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
const Post =forwardRef(({ name, desc, msg, photoUrl },ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{desc[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{msg}</p>
      </div>
      <div className="post__buttons">
        <InputOption
          title="Like"
          color="gray"
          Icon={ThumbUpOffAltIcon}
        ></InputOption>
        <InputOption
          title="Comment"
          color="gray"
          Icon={ChatBubbleOutlineIcon}
        ></InputOption>
        <InputOption title="Share" color="gray" Icon={ShareIcon}></InputOption>
        <InputOption title="Send" color="gray" Icon={SendIcon}></InputOption>
      </div>
    </div>
  );
})

export default Post;
