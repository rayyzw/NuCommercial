import React from "react";
import { API_URL } from "./CONSTS";
import { UserInterface } from "./Interfaces";

interface AppContextInterface {
  user: UserInterface;
  setUser: (user: UserInterface) => void;
  innerWidth: Number;
  province: string;
}

interface PropsInterface {
  children: JSX.Element;
}

const initAppContext: AppContextInterface = {
  user: {},
  setUser: () => undefined,
  innerWidth: window.innerWidth,
  province: "ON",
};

const AppContext = React.createContext<AppContextInterface>(initAppContext);

export const AppWrapper = ({ children }: PropsInterface) => {
  const [user, setUser] = React.useState<UserInterface>({});
  const [loading, setLoading] = React.useState<boolean>(true);
  const [innerWidth, setInnerWidth] = React.useState<Number>(window.innerWidth);
  const [province, setProvince] = React.useState<string>("ON");

  React.useEffect(() => {
    setLoading(true);
    if (localStorage.getItem("userToken")) {
      fetch(`${API_URL}/profile`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Token: String(localStorage.getItem("userToken")),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          localStorage.setItem("userToken", data.token);
        })
        .catch((err) => {
          setUser({});
          localStorage.removeItem("userToken");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      fetch(`${API_URL}/login`, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          email: "commercial@nustreamrealty.com",
          password: "Nu5tream",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          localStorage.setItem("userToken", data.token);
        })
        .catch((err) => {
          setUser({});
          localStorage.removeItem("userToken");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      if(position.coords.longitude < -113) {
        console.log("BC");
        setProvince("BC");
      }
      else{
        console.log("ON");
        setProvince("ON");
      }
    });
  }, []);

  const appContext: AppContextInterface = {
    user: user,
    setUser: setUser,
    innerWidth: innerWidth,
    province: province,
  };

  return (
    <AppContext.Provider value={appContext}>
      {!loading && children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return React.useContext(AppContext);
}
