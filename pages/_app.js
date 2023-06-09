import "@/styles/globals.css";
import { DataProvider } from "../contexts/dataContext.js";

export default function App({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}
