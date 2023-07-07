import Editor, { Monaco } from "@monaco-editor/react";
import { useRef, useState } from "react";
export default  function Code({pageSource, sidebarStatus}){
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
      // here is the editor instance
      // you can store it in `useRef` for further usage
      editor.updateOptions({readOnly: false})
      editorRef.current = editor;
    }    
    return (
        <>
              <Editor className={`${ sidebarStatus ? 'ml-[-300px]': ''}`}
                    height="100%"
                    theme="vs-dark"
                    defaultLanguage="json"
                    value={pageSource}
                    onMount={handleEditorDidMount}
                />
        </>
    )
}
