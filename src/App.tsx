import React from 'react';
import Editor from "./components/Editor";

function App() {
  return (
    <div className="w-screen sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-[662px] m-auto flex flex-col items-end">
      <Editor />
      <button className="rounded bg-[#0A7227] text-white w-[62px] h-[35px] mt-4">Post</button>
    </div>
  );
}

export default App;
