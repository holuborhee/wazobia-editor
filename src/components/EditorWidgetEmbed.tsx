import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { TiVideo } from "react-icons/ti";
import { IoShareSocialSharp } from "react-icons/io5";

function EditorWidgetEmbed({ positionY }: EditorWidgetEmbedProps) {

  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setShowItems(false)
  }, [positionY])

  return (
    <>
      <button className="w-8 h-8 rounded-full border-[#E7F1E9] border-[1px] bg-[#E7F1E9] flex absolute" style={{top: `${positionY}px`}} onClick={() => setShowItems(!showItems)}>
        <FaPlus className="m-auto" />
      </button>
      <div className="bg-white rounded border-[1px] shadow absolute mt-10 w-72" style={{top: `${positionY}px`, display: `${showItems ? 'block' : 'none'}`}}>
        <h6>EMBED</h6>
        <EditorWidgetEmbedItem title="Picture" description="Jpeg, png" icon={<AiFillPicture />} />
        <EditorWidgetEmbedItem title="Video" description="JW player, Youtube, Vimeo" icon={<TiVideo />} />
        <EditorWidgetEmbedItem title="Social" description="Instagram, Twitter, TikTok, Snapchat, Facebook" icon={<IoShareSocialSharp />} />
      </div>
    </>
  );
}

function EditorWidgetEmbedItem({ title, description, icon }: EditorWidgetEmbedItemProps) {

  return (
    <div className="hover:bg-[#FAFAFA] cursor-pointer text-xs p-3">
      <h5 className="flex items-center">{icon} <span>{title}</span></h5>
      <small>{description}</small>
    </div>
  );
}

interface EditorWidgetEmbedProps {
  positionY?: Number;
}

interface EditorWidgetEmbedItemProps {
  title: String;
  description: String;
  icon: React.ReactNode;
}


export default EditorWidgetEmbed;