import React from 'react';
import { BsLink45Deg } from "react-icons/bs";
import { AiFillPicture } from "react-icons/ai";
import { TfiAlignLeft } from "react-icons/tfi";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiAlignCenter} from "react-icons/tfi";
import { BiBold } from "react-icons/bi";
import { BiItalic } from "react-icons/bi";
import { HiListBullet } from "react-icons/hi2";
import { BsListOl } from "react-icons/bs";
import { BsBlockquoteLeft } from "react-icons/bs";

function EditorWidgetTextFormat() {

  return (
    <div className="w-full md:w-4/6 rounded border-[#E7F1E9] border-[1px] flex bg-white justify-between px-1 mt-4">
      <select className="w-2/12 text-xs border-[#E7F1E9] border-r-[1px] outline-0">
        <option>Paragraph</option>
        <option>Heading 1</option>
        <option>Heading 2</option>
      </select>
      <ButtonGroup className="w-2/12 border-r-[1px] py-2">
        <button className="h-4 w-4"><BsLink45Deg /></button>
        <button className="h-4 w-4"><AiFillPicture /></button>
      </ButtonGroup>
      <ButtonGroup className="w-3/12 border-r-[1px]">
        <button><TfiAlignLeft /></button>
        <button><TfiAlignRight /></button>
        <button><TfiAlignCenter /></button>
      </ButtonGroup>
      <ButtonGroup className="w-2/12 border-r-[1px]">
        <button><BiBold /></button>
        <button><BiItalic /></button>
      </ButtonGroup>
      <ButtonGroup className="w-3/12">
        <button><HiListBullet /></button>
        <button><BsListOl /></button>
        <button><BsBlockquoteLeft /></button>
      </ButtonGroup>
    </div>
  );
}


function ButtonGroup({children, className}: ButtonGroupProps) {
  return (
    <div className={`${className} border-[#E7F1E9] flex justify-evenly`}>
      {children}
    </div>
  )
}

interface ButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
}

export default EditorWidgetTextFormat;