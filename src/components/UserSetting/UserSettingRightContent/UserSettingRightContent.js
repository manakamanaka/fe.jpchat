import React, { useContext, useEffect, useState } from "react";
import styles from "./UserSettingRightContent.module.scss";
import Avatar from "../../Avatar/Avatar";
import { UserContext } from "../../../context/UserInfoProvider";
import monSleep from "../../../assets/UserSettings/mon-sleep.png";
import monStand from "../../../assets/UserSettings/mon-stand.png";

export default function UserSettingRightContent(props) {
  const { previewPic, primaryColor, accentColor, aboutMe } = props;
  const [isHovered, setIsHovered] = useState(false);
  const user = useContext(UserContext);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSecond((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  useEffect(() => {
    if (second === 60) {
      setSecond(0);
      setMinute((prevState) => prevState + 1);
    }
  }, [second]);

  return (
    <div className={styles.userSettingRightContainer}>
      <h6 className={styles.userPreviewTitle}>Preview</h6>
      <div
        className={styles.previewCardContainer}
        style={{
          backgroundImage: `linear-gradient(${primaryColor}, ${primaryColor} 90px, ${accentColor})`,
        }}
      >
        <div className={styles.overlay}></div>
        <div
          className={styles.previewBanner}
          style={{ backgroundColor: primaryColor }}
        >
          <video
            className={styles.bannerVideo}
            src="https://amahane.s3.ap-northeast-1.amazonaws.com/aboutUsPage/about-us-banner.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className={styles.avatarContainer}>
            <Avatar friend={{ user: user }} previewPic={previewPic} />
          </div>
        </div>
        <div className={styles.userInfoCardOuterContainer}>
          <div className={styles.userInfoCardInnerContainer}>
            <div className={styles.usernameContainer}>
              <h4>{user?.username}</h4>
            </div>
            {aboutMe && aboutMe?.trim() !== "" && (
              <div className={styles.aboutMeContainer}>
                <h6>ABOUT ME</h6>
                <p className={styles.aboutMeDesc}>{aboutMe}</p>
              </div>
            )}
            <div className={styles.customizingProfileContainer}>
              <h6>CUSTOMIZING MY PROFILE</h6>
              <div
                className={styles.previewInnerContainer}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                {isHovered ? (
                  <>
                    <img
                      className={styles.previewDecorationImg}
                      src={monStand}
                      alt="sleep"
                    />
                  </>
                ) : (
                  <>
                    <img
                      className={styles.previewDecorationImg}
                      src={monSleep}
                      alt="sleep"
                    />
                  </>
                )}
                <div className={styles.timeCounterContainer}>
                  <p className={styles.timeCounterTitle}>USER PROFILE</p>
                  <p className={styles.timeCounter}>
                    {minute < 10 ? `0${minute}` : minute}:
                    {second < 10 ? `0${second}` : second} elapsed
                  </p>
                </div>
              </div>
              <div className={styles.exampleButtonContainer}>
                <button className={styles.exampleButton}>Example Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
