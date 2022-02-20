import React, { useState } from "react";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/addon/lint/lint";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import { Controlled } from "react-codemirror2";
import { EditorTypes } from "../../types/EditorTypes";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Editor = ({
  displayName,
  onChange,
  language,
  value,
}: EditorTypes.TComponent) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const changeHandler = (editor: any, data: any, value: any) => {
    onChange(value);
    console.log(editor, data, value);
  };
  return (
    <div className={`editor_container ${!isCollapsed ? "" : "collapsed"}`}>
      <div className="editor_title">
        {displayName}
        <button
          type="button"
          className="expand_collapse_btn"
          onClick={() => setIsCollapsed((prevOpen) => !prevOpen)}
        ></button>
      </div>
      <Controlled
        onBeforeChange={changeHandler}
        value={value}
        className="code_mirror_wrapper"
        options={{
          mode: language,
          lineWrapping: true,
          theme: "material",
          lineNumbers: true,
          lint: true,
          extraKeys: { "Ctrl-Space": "autocomplete" },
        }}
      />
    </div>
  );
};
