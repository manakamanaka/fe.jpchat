import React from "react";
import styles from "./ChatPage.module.scss";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import ChatFriendView from "../../components/ChatFriendView/ChatFriendView";
import { v4 as uuid } from "uuid";

export default function ChatPage() {
  const friendZura = {
    id: uuid(),
    username: "ZuraHararara",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-ayaka-small.png",
  };
  const friendTsu = {
    id: uuid(),
    username: "TsuyokuYoshiko",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-nahida-small.png",
  };
  const friendHosoya = {
    id: uuid(),
    username: "Hosoya",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-shogun-samll.png",
  };
  const friendZiqi = {
    id: uuid(),
    username: "Ziqi",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-kujou-small.png",
  };
  const friendDavid = {
    id: uuid(),
    username: "David",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-shogun-samll.png",
  };
  const friendZijun = {
    id: uuid(),
    username: "Zijun",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-yoimiya-small.png",
  };
  const friendJC = {
    id: uuid(),
    username: "JC",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-nahida-small.png",
  };
  const friendJason = {
    id: uuid(),
    username: "Jason",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-ayaka-small.png",
  };
  const friendJoe = {
    id: uuid(),
    username: "Joe",
    avatar:
      "https://amahane.s3.ap-northeast-1.amazonaws.com/users/defaultAvatar/char-shogun-samll.png",
  };
  const friends = [
    friendZura,
    friendTsu,
    friendHosoya,
    friendZiqi,
    friendDavid,
    friendZijun,
    friendJC,
    friendJason,
    friendJoe,
  ];
  return (
    <div className={styles.chatPageContainer}>
      <div className={styles.chatWindowContainer}>
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
            <div className={styles.chatWindowLeftFunctionBarFriendsContainer}>
              <div
                className={styles.chatWindowLeftFunctionBarFriendsBtnContainer}
              >
                <div className={styles.chatWindowLeftFunctionBarFriendsBtn}>
                  <div
                    className={
                      styles.chatWindowLeftFunctionBarFriendsBtnIconContainer
                    }
                  >
                    <FaUserFriends size={30} />
                  </div>
                  <p className={styles.chatWindowLeftFunctionBarFriendsBtnDesc}>
                    Friends
                  </p>
                </div>
              </div>
              {friends.map((friend) => (
                <ChatFriendView
                  key={friend.id}
                  id={friend.id}
                  username={friend.username}
                  avatar={friend.avatar}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.chatWindowRightContent}></div>
      </div>
    </div>
  );
}
