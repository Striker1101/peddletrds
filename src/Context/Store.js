import { AuthProvider } from "./AuthContext";

export function Store({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
