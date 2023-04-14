import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ActiveFriendsList.module.scss";
import Avatar from "../../../../Avatar/Avatar";
import { HiChatBubbleLeft } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { currentFriendActions } from "../../../../../store/modules/currentFriendSlice";

export default function ActiveFriendsList(props) {
  const dispatch = useDispatch();
  const { friend } = props;

  const currentFriend = {
    detail: friend?.user,
    isOnline: friend?.isOnline,
  };

  const handleConversationButtonClick = () => {
    dispatch(currentFriendActions.setCurrentFriend(currentFriend));
  };

  return (
    <div className={styles.activeFriendListContainer}>
      <div className={styles.activeFriendListHoverContainer}>
        <div className={styles.activeFriendListAvatarNameGroup}>
          <Avatar friend={friend} />
          <p className={styles.activeFriendListUsername}>
            {friend?.user.username}
          </p>
        </div>
        <NavLink to={`/chat/${friend?.conversationId}/${friend?.user._id}`}>
          <button
            className={styles.activeFriendListChatNavButton}
            onClick={() => {
              handleConversationButtonClick();
            }}
          >
            <div className={styles.activeFriendListChatNavButtonIconContainer}>
              <HiChatBubbleLeft size={23} />
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
