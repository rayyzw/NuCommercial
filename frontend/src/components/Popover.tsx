import React from "react";

interface PropsInterface {
  children: JSX.Element;
  setAnchor: (anchor: HTMLElement | null) => void;
  anchor: HTMLElement | null;
}

export default function Popover({
  setAnchor,
  children,
  anchor,
}: PropsInterface) {
  const popover = React.useRef<HTMLDivElement>(null);
  const [anchorTimeout, setAnchorTimeout] = React.useState<NodeJS.Timeout>();
  const [left, setLeft] = React.useState<number>(0);
  const [top, setTop] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (anchor && popover.current) {
      if (popover.current.getBoundingClientRect().right > window.innerWidth) {
        setLeft(
          anchor.getBoundingClientRect().right -
            popover.current.getBoundingClientRect().width
        );
      } else {
        setLeft(anchor.getBoundingClientRect().left);
      }
      if (popover.current.getBoundingClientRect().bottom > window.innerHeight) {
        setTop(
          anchor.getBoundingClientRect().top -
            popover.current.getBoundingClientRect().height
        );
      } else {
        setTop(anchor.getBoundingClientRect().bottom);
      }
      setLoading(false);
      const ato = setTimeout(() => {
        setAnchor(null);
      }, 3000);
      setAnchorTimeout(ato);
      return () => {
        clearTimeout(ato);
      };
    }
  }, [anchor, setAnchor]);

  return (
    <div
      style={{
        position: "fixed",
        top: top,
        left: left,
        backgroundColor: "#FFFFFF",
        padding: 10,
        border: "1px solid #CCCCCC",
        borderRadius: ".25rem",
        color: "#494949",
        opacity: loading ? 0 : 1,
      }}
      onMouseEnter={() => {
        clearTimeout(anchorTimeout);
      }}
      onMouseLeave={() => {
        const ato1 = setTimeout(() => {
          setAnchor(null);
        }, 1000);
        setAnchorTimeout(ato1);
        return () => {
          clearTimeout(ato1);
        };
      }}
      ref={popover}
    >
      {children}
    </div>
  );
}
