import React from "react";
import { Button } from "@fitfab/ui";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";
import "./App.css";

const SampleCode = styled.div`
  > div:first-child {
    background: #17223b;

    margin: 20px;
    padding: 20px;
  }

  > div:last-child {
    border: 1px solid #6b778d;
    margin: 20px;
    padding: 20px;
  }
`;

const headerProps = { text: "I'm styled!" };
const scope = { styled, headerProps };
const code = `
  // this a button
  const Btn = styled.button\`
    border: 1px solid #333;
    border-radius: 4px;
    color: #000;
    font-size: 18px;
  \`

  render(<Btn>{headerProps.text}</Btn>)
`;

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="content">
        <h1>fitfab by miguel julio</h1>
        <SampleCode>
          <LiveProvider code={code} scope={scope} noInline={true}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </SampleCode>

        <Button>hello button</Button>
      </header>
    </div>
  );
};

export default App;
