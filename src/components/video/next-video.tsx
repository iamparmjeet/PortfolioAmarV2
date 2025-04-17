import Video from "next-video";
import Image from "next/image";
import Instaplay from "player.style/instaplay/react";

const video1 = "https://media.amarjeetmishra.com/aggarwal-tile/1/master.m3u8";
const thumbnail = "https://media.amarjeetmishra.com/aggarwal-tile/1/thumbnail_720.webp";

export default function NextVideo() {
  return (
    <>
      <Video
        src={video1}
        theme={Instaplay}
        style={{
          width: "300px",
        }}
      >
        <Image
          slot="poster"
          src={thumbnail}
          alt="thumbnail"
          width={300}
          height={600}
        />
      </Video>
    </>
  );
}
