import { StyleSheet } from "react-native";
import AuthProvider from "./src/contexts/AuthProvider";
import MainRouter from "./src/routes/MainRouter";
import Router from "./src/routes/Router";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
