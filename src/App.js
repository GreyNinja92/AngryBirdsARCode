import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ArticleList from "./blog";

function App() {
  return (
    <ChakraProvider>
      <ArticleList />
    </ChakraProvider>
  );
}

export default App;
