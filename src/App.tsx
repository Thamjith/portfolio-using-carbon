import { GlobalTheme, Stack } from "@carbon/react";
import { useEffect, useState } from "react";

import { Analytics } from "@vercel/analytics/react"
import BodyContainer from "./components/BodyContainer/BodyContainer";
import Experience from "./pages/Experience/Experience";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Header from "./components/Header/Header"
import Myself from "./pages/Myself/Myself";

export type theme = "g10" | "g100" | "white" | "g90" | undefined;

const App = () => {
  const [theme, setTheme] = useState<theme>("g100");
  useEffect(() => {
    document.documentElement.dataset.carbonTheme = theme;
  }, [theme]);
  return (
    <GlobalTheme theme={theme ?? "g100"}>
      <Stack>
        <Analytics />
        <Header setTheme={setTheme} />
        <BodyContainer>
          <Myself />
          <Experience />
          <GetInTouch />
        </BodyContainer>
      </Stack>
    </GlobalTheme>
  )
}

export default App