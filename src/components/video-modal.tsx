import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  if (!isOpen) return null;

  let src = "";
  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}?autoplay=1&rel=0`;
  } else {
    src = props.src;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black"
        >
          ✕
        </button>

        <iframe
          src={src}
          title="Video player"
          allow="autoplay; fullscreen; picture-in-picture"
          className="h-full w-full"
        />
      </div>
    </div>,
    document.body,
  );
}
