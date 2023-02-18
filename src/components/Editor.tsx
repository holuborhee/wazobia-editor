import React, { useEffect } from 'react';
import EditorWidgetTextFormat from "./EditorWidgetTextFormat";
import EditorWidgetEmbed from "./EditorWidgetEmbed";

function Editor() {

  const titleRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    /*
      this is needed because 
      only Booleanish value or undefined is allowed for
      the attribute content-editable in DefinelyTyped repo
    */
    if(titleRef.current) {
      titleRef.current.contentEditable = "plaintext-only"
    }
  }, [])

  return (
    <div className="w-full h-[813px] rounded border-[#E7F1E9] border-[1px] mt-20 bg-[#FAFAFA]">
      <div className="border-y-[1px] border-[#E7F1E9] mt-[46px] h-[740px] px-4 pt-5 relative">
        <h1 contentEditable placeholder="Add post title" id="title" ref={titleRef} className="text-3xl font-bold text-[#343E37] outline-0"></h1>
        <EditorWidgetTextFormat />
        <div contentEditable placeholder="Add content" id="body" className="outline-0 mt-4 h-[665px] text-sm text-[#343E37]"></div>
        <EditorWidgetEmbed />
      </div>
    </div>
  );
}

export default Editor;