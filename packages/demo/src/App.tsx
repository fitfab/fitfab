import React from "react";
import { Button } from "@fitfab/ui";

import "./App.css";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Sample = () => {
  return <strong>Hello World!</strong>;
};

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="content">
        <h1>fitfab by miguel julio</h1>
        <LiveProvider code="<p>hello</p>">
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
        <Button>hello button</Button>
      </header>
    </div>
  );
};

export default App;
