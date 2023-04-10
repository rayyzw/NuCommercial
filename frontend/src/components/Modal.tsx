import React from "react";

export default function Modal(props: {
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  children: React.ReactNode;
}) {
  const modal = React.useRef<HTMLDivElement>(null);
  const [left, setLeft] = React.useState<number>(0);
  const [top, setTop] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (modal && modal.current) {
      if (
        (window.innerWidth - modal.current.getBoundingClientRect().width) / 2 >
        0
      ) {
        setLeft(
          (window.innerWidth - modal.current.getBoundingClientRect().width) / 2
        );
      }
      if (
        (window.innerHeight - modal.current.getBoundingClientRect().height) /
          2 >
        0
      ) {
        setTop(
          (window.innerHeight - modal.current.getBoundingClientRect().height) /
            2
        );
      }
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          backgroundColor: "#CCCCCC",
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          opacity: "0.5",
        }}
        onClick={props.onClick}
      ></div>
      <div
        ref={modal}
        style={{
          position: "fixed",
          left: left,
          top: top,
          backgroundColor: "#FFFFFF",
          maxWidth: "80vw",
          maxHeight: "80vh",
          zIndex: 4,
          padding: 30,
          opacity: loading ? 0 : 1,
          overflow: "auto",
          borderRadius: 20,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            cursor: "pointer",
            padding: 10,
            borderBottomLeftRadius: 20,
            backgroundColor: "#EEEEEE",
          }}
          onClick={props.onClick}
        >
          X
        </div>
        {props.children}
      </div>
    </>
  );
}
