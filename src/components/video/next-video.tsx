import Video from "next-video/player";
import Image from "next/image";
import Instaplay from "player.style/instaplay/react";

type VideoProps = {
  href: string;
  thumbnail?: string;
};

export default function NextVideo({ href, thumbnail }: VideoProps) {
  return (
    <Video
      src={href}
      className="w-full h-full object-cover"
      autoPlay={false}
      muted={false}
      controls={true}
      // theme={Instaplay}
    >
      <Image
        src={thumbnail || ""}
        slot="poster"
        placeholder="blur"
        blurDataURL="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        width={720}
        height={1280}
        alt="Video thumbnail"
      />
    </Video>
  );
}
