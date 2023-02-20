import React, { useEffect, useState } from 'react';
import EditorWidgetTextFormat, {FormatOptions} from "./EditorWidgetTextFormat";
import EditorImageChooser from "./EditorImageChooser";
import EditorWidgetEmbed, { EmbedOptions } from "./EditorWidgetEmbed";
import Modal from "./Modal";

function Editor() {
  const [embedWidgetPosition, setEmbedWidgetPostion] = useState(150);
  const [wordCount, setWordCount] = useState(0);
  const [showSelectImageModal, setShowSelectImageModal] = useState(false);
  const [editorRange, setEditorRange] = useState<Range | null>(null);

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

  useEffect(() => {
    if(!showSelectImageModal) {
      if (editorRange != null) {
        if (window.getSelection)//non IE and there is already a selection
        {
            const s = window.getSelection()!;
            if (s.rangeCount > 0) 
                s.removeAllRanges();
            s.addRange(editorRange);
        }
      }
    }
  }, [showSelectImageModal])

  function handleSelectionInEditor() {
    if(document.getSelection) {
      const range = document.getSelection()!.getRangeAt(0);
      setEditorRange(range)
      if(range.getBoundingClientRect().y) {
        setEmbedWidgetPostion(range.getBoundingClientRect().y - 100)
      }
    }
  }

  function handleEmbedChoice(choice: "PICTURE" | "VIDEO" | "SOCIAL") {
    if(EmbedOptions[choice] === EmbedOptions.PICTURE) {
      setShowSelectImageModal(true)
    }
  }

  function embedImage(uri: string) {
    console.log(document, editorRange, uri)
    document.execCommand("insertHTML", false, `<img src={${uri}} />`);
    setShowSelectImageModal(false)
  }

  function formatText(command: FormatOptions) {
    document.execCommand(FormatOptions[command], false);
  }

  return (
    <div className="w-full h-[813px] rounded border-[#E7F1E9] border-[1px] mt-20 bg-[#FAFAFA]">
      <div className="border-y-[1px] border-[#E7F1E9] mt-[46px] h-[740px] px-4 pt-5 relative">
        <h1 contentEditable placeholder="Add post title" id="title" ref={titleRef} className="text-3xl font-bold text-[#343E37] outline-0"></h1>
        <EditorWidgetTextFormat  onFormatChanged={formatText}/>
        <div contentEditable placeholder="Add content" id="body" ref={bodyRef} className="outline-0 mt-4 h-[665px] text-sm text-[#343E37]"></div>
        {
          editorRange && (<EditorWidgetEmbed positionY={embedWidgetPosition} onEmbedChoice={handleEmbedChoice}  />)
        }
        <Modal show={showSelectImageModal} handleClose={setShowSelectImageModal} title="Embed">
          <EditorImageChooser handleUpload={embedImage} />
        </Modal>
      </div>
      <div className="bg-white flex justify-end text-[#343E37] text-xs p-1">
        <span>{wordCount}/1000 words</span>
      </div>
    </div>
  );
}

export default Editor;