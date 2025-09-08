import AppLayoat from "./components/layout/AppLayoat";
import { CryptoContextProvider } from "./context/crypto-context";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayoat />
    </CryptoContextProvider>
  );
}
