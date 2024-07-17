import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source
          src="https://rr14---sn-n8v7kn7s.googlevideo.com/videoplayback?expire=1721233823&ei=P52XZs73GpjOi9oPpfi2wAY&ip=148.251.137.140&id=o-ALBp_R1DZmDkE3sbBl6JHDl8vY3L6523NJ7pkaGnep1g&itag=135&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&gir=yes&clen=155267&dur=12.666&lmt=1634588858955458&keepalive=yes&c=ANDROID_TESTSUITE&txp=5316224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIBh0nwM-ukqGOCXXOUTbVrnfRzhlOxNFtZliQ0MOYKhAiB8ZNChrN5b8qz9tEC2xsmctOlun6CMzp4SV7oU_VCuPQ%3D%3D&rm=sn-4g5e6r7z&rrc=104,80&req_id=2de88e7b31a8a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-hxb5apox-4g0s7e&fexp=24350516&cms_redirect=yes&cmsv=e&mh=Iv&mip=77.235.30.30&mm=29&mn=sn-n8v7kn7s&ms=rdu&mt=1721211897&mv=m&mvi=14&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AHlkHjAwRAIgepc6IB9vCwxXb5tAFbSBQjDoRd7pWJayR9Rpji2zwPICIECQRnmZBt6mF7s7UezVNo7923nUbl5vKDsL4jYmqbU6"
          type="video/mp4"
        />
      </video>
      <h1 className={styles.title}>Let's Do It!</h1>
    </header>
  );
};

export default Header;
