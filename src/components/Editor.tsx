function Editor() {


  return (
    <div className="w-full h-[813px] rounded border-[#E7F1E9] border-[1px] mt-20 bg-[#FAFAFA]">
      <div className="border-y-[1px] border-[#E7F1E9] mt-[46px] h-[740px] px-4 pt-5">
        <h1 contentEditable placeholder="Add post title" id="title" className="text-3xl font-bold text-[#343E37] outline-0"></h1>
        <div contentEditable placeholder="Add content" id="body" className="outline-0 mt-4 h-[665px] text-sm text-[#343E37]"></div>
      </div>
    </div>
  );
}

export default Editor;