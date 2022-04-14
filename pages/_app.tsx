import "@styles/index.scss";
import React, { ReactElement } from "react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
