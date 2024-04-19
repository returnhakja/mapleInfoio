import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { useLayoutEffect, useState } from "react";
import { MainInfoPage } from "./components/infoPage/MainInfoPage";
const storeModule = () => import("./states/client/store");
const root = ReactDOM.createRoot(document.getElementById("root")!);

const queryClient = new QueryClient();
const HostRouter = () => {
  const [store, setStore] = useState<any>(null);
  const getStore = async () => {
    const { store } = await storeModule();
    setStore(store);
  };
  useLayoutEffect(() => {
    getStore();
  }, []);
  return (
    store && (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MainInfoPage />
          {/* <App /> */}
        </Provider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    )
  );
};

root.render(<HostRouter />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
