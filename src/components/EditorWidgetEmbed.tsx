import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { TiVideo } from "react-icons/ti";
import { IoShareSocialSharp } from "react-icons/io5";

function EditorWidgetEmbed({ positionY, onEmbedChoice }: EditorWidgetEmbedProps) {

  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setShowItems(false)
  }, [positionY])

  function handleWidgetChoiceClicked(choice: "PICTURE" | "VIDEO" | "SOCIAL") {
    setShowItems(false);
    onEmbedChoice(choice);
  }

  return (
    <>
      <button className="w-8 h-8 rounded-full border-[#E7F1E9] border-[1px] bg-[#E7F1E9] flex absolute" style={{top: `${positionY}px`}} onClick={() => setShowItems(!showItems)}>
        <FaPlus className="m-auto" />
      </button>
      <div className="bg-white rounded border-[1px] shadow absolute mt-10 w-72" style={{top: `${positionY}px`, display: `${showItems ? 'block' : 'none'}`}}>
        <h6>EMBED</h6>
        <EditorWidgetEmbedItem handleClick={handleWidgetChoiceClicked} itemKey="PICTURE" description="Jpeg, png" icon={<AiFillPicture />} />
        <EditorWidgetEmbedItem handleClick={handleWidgetChoiceClicked} disabled itemKey="VIDEO" description="JW player, Youtube, Vimeo" icon={<TiVideo />} />
        <EditorWidgetEmbedItem handleClick={handleWidgetChoiceClicked} disabled itemKey="SOCIAL" description="Instagram, Twitter, TikTok, Snapchat, Facebook" icon={<IoShareSocialSharp />} />
      </div>
    </>
  );
}

function EditorWidgetEmbedItem({ itemKey, description, icon, disabled, handleClick }: EditorWidgetEmbedItemProps) {

  return (
    <button disabled={disabled} onClick={() => handleClick(itemKey)} className="disabled:text-gray-600 hover:bg-[#FAFAFA] disabled:cursor-not-allowed cursor-pointer text-xs p-3 block w-full">
      <h5 className="flex items-center">{icon} <span>{EmbedOptions[itemKey]}</span></h5>
      <small>{description}</small>
    </button>
  );
}

type EditorWidgetEmbedProps = {
  positionY?: Number;
  onEmbedChoice: (choice: "PICTURE" | "VIDEO" | "SOCIAL") => void;
}

type EditorWidgetEmbedItemProps = {
  itemKey: "PICTURE" | "VIDEO" | "SOCIAL";
  description: string;
  icon: React.ReactNode;
  disabled?: boolean;
  handleClick: (title: "PICTURE" | "VIDEO" | "SOCIAL") => void;
}

export enum EmbedOptions {
  PICTURE= "Picture",
  VIDEO= "Video",
  SOCIAL= "Social"
}


export default EditorWidgetEmbed;