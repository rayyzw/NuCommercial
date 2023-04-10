import React from "react";
import { useAppContext } from "./Context";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Layout.module.css";

interface PropsInterface {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: PropsInterface) {
  const appContext = useAppContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!appContext || !appContext.user || !appContext.user.name) {
      navigate("/");
    }
  }, [appContext, navigate]);

  return (
    <div className={styles.root}>
      {appContext.user && (
        <div className={styles.children}>{children}</div>
      )}
    </div>
  );
}
