"use client";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        autoplay?: boolean | string;
        loop?: boolean | string;
        speed?: string;
        mode?: string;
      };
    }
  }
}

export default function LottieCard({ src, style }: { src: string; style?: React.CSSProperties }) {
  return (
    <lottie-player
      src={src}
      autoplay
      loop
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
}
