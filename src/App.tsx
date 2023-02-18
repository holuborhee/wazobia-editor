import React from 'react';
import Editor from "./components/Editor";

function App() {
  return (
    <div className="w-screen sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-[662px] m-auto">
      <Editor />
      <button>Post</button>
    </div>
  );
}

export default App;
