import * as codemirror from "codemirror";
export namespace EditorTypes {
  export type TComponent = {
    language: string;
    displayName: string;
    value: any;
    onChange: any;
  };
  export type TChangeHandler = (
    editor: codemirror.Editor,
    data: codemirror.EditorChange,
    value: string,
    next: () => void
  ) => void;
}
