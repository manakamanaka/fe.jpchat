import React from "react";
import styles from "./ChatWindowLeftContent.module.scss";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";
import ChatFriendsSideBar from "../ChatFriendsSideBar/ChatFriendsSideBar";

export default function ChatWindowLeftContent() {
  return (
    <div className={styles.chatWindowLeftContent}>
      <div className={styles.chatWindowLeftSideBar}>
        <div className={styles.chatWindowUserAvatarContainer}>
          <img
            className={styles.chatWindowUserAvatar}
            src="https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-venti-small.png"
            alt="user"
          />
        </div>
        <div className={styles.chatWindowActionContainer}>
          <IoSettingsSharp className={styles.chatWindowAction} size={25} />
          <RiLogoutBoxFill className={styles.chatWindowAction} size={25} />
        </div>
      </div>
      <div className={styles.chatWindowLeftFunctionBar}>
        <div className={styles.chatWindowLeftFunctionBarSearchContainer}>
          <input
            className={styles.chatWindowLeftFunctionBarSearch}
            placeholder="Find or start a conversation"
          />
        </div>
        <ChatFriendsSideBar />
      </div>
    </div>
  );
}
