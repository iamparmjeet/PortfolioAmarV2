import Video from "next-video";
import Image from "next/image";
import Instaplay from "player.style/instaplay/react";

type VideoProps = {
  href: string;
  thumbnail: string;
};

export default function NextVideo({ href, thumbnail }: VideoProps) {
  return (
    <>
      <Video
        src={href}
        theme={Instaplay}
        style={{
          width: "400px",
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
