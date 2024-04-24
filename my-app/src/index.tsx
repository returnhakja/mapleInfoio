import ReactDOM from "react-dom/client";

import "./index.css";
import "./reset.css";
import reportWebVitals from "./reportWebVitals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { Global } from "@emotion/react";
import { useLayoutEffect, useState } from "react";
import { Layout } from "./components/page/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContentInfo } from "./components/container/Info";
import { GlobalStyle } from "./styles/globalStyles";
import { Main } from "./components/container/Main";

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
          <BrowserRouter>
            <Global styles={GlobalStyle} />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/info" element={<ContentInfo />} />
              </Route>
            </Routes>
          </BrowserRouter>
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
