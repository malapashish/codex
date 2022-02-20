import React, { useState, useEffect } from "react";
import { Editor } from "./components/Editor/Editor";

export const App = () => {
  const [html, setHtml] = useState<any>("");
  const [css, setCss] = useState<any>("");
  const [js, setJs] = useState<any>("");
  const [srcDoc, setSrcDoc] = useState<any>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`
      );
    }, 250);
    return () => clearTimeout(timer);
  }, [html, css, js]);

  return (
    <div className="side_layout">
      <div className="code_editor_section">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="output">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
