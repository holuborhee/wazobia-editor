import React, { useEffect, useState } from 'react';
import EditorWidgetTextFormat from "./EditorWidgetTextFormat";
import EditorWidgetEmbed from "./EditorWidgetEmbed";

function Editor() {
  const [embedWidgetPosition, setEmbedWidgetPostion] = useState(150);
  const [wordCount, setWordCount] = useState(0);

  const titleRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    /*
      this is needed because 
      only Booleanish value or undefined is allowed for
      the attribute content-editable in DefinelyTyped repo
    */
    if(titleRef.current) {
      titleRef.current.contentEditable = "plaintext-only"
    }

    if(bodyRef.current) {
      bodyRef.current.addEventListener("selectstart", () => {
        document.addEventListener("selectionchange", handleSelectionInEditor);
      });
      bodyRef.current.addEventListener("mouseleave", () => {
        document.removeEventListener("selectionchange", handleSelectionInEditor);
      })
    }
  }, [])

  function handleSelectionInEditor() {
    if(document.getSelection) {
      const range = document.getSelection()!.getRangeAt(0);
      console.log(embedWidgetPosition, range.getBoundingClientRect().y)
      if(range.getBoundingClientRect().y) {
        setEmbedWidgetPostion(range.getBoundingClientRect().y - 100)
      }
    }
    
  }

  return (
    <div className="w-full h-[813px] rounded border-[#E7F1E9] border-[1px] mt-20 bg-[#FAFAFA]">
      <div className="border-y-[1px] border-[#E7F1E9] mt-[46px] h-[740px] px-4 pt-5 relative">
        <h1 contentEditable placeholder="Add post title" id="title" ref={titleRef} className="text-3xl font-bold text-[#343E37] outline-0"></h1>
        <EditorWidgetTextFormat />
        <div contentEditable placeholder="Add content" id="body" ref={bodyRef} className="outline-0 mt-4 h-[665px] text-sm text-[#343E37]"></div>
        <EditorWidgetEmbed positionY={embedWidgetPosition} />
        
      </div>
      <div className="bg-white flex justify-end text-[#343E37] text-xs p-1">
        <span>{wordCount}/1000 words</span>
      </div>
    </div>
  );
}

export default Editor;