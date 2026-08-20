"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Player = "lottie-player" as any;

export default function LottieCard({ src, style }: { src: string; style?: React.CSSProperties }) {
  return (
    <Player
      src={src}
      autoplay
      loop
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
}
