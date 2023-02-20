import { useState } from 'react';

function EditorImageChooser({ handleUpload }: { handleUpload: (arg0: string) => void;}) {

	const [uploadImage, setUploadImage] = useState<string | null>(null)

	function handleImage(evt: React.ChangeEvent<HTMLInputElement>) {
		if(evt.target.files && evt.target.files.length) {
			setUploadImage(URL.createObjectURL(evt.target.files[0]))
		}
	}

	return (
		<>
			<div className="mt-6 mb-5">
			  <h4>Upload Image</h4>
			  <h6>File Upload</h6>
			  {
			  	uploadImage ? (<img src={uploadImage} />) : (
			  		<div className="w-full h-[141px] rounded border-dashed border-[#0A7227] bg-[#FAFAFA] border-2 flex">
			  		  <input id="fileId" type="file" className="hidden" accept="images/jpg, images/png, images/gif" onChange={(e) => handleImage(e)} />
			  		  <label htmlFor="fileId" className="m-auto cursor-pointer p-2 rounded border-[#0A7227] bg-white border-solid text-xs">Import Image from Device</label>
			  		</div>
			  	)
			  }
			</div>

			
			<button className="rounded bg-[#0A7227] disabled:bg-green-300 text-white w-[62px] h-[35px]" disabled={!uploadImage} onClick={() => { handleUpload(uploadImage!); setUploadImage(null); }}>Embed</button>
			<button className="rounded bg-white w-[62px] h-[35px]" onClick={() => setUploadImage(null)}>Cancel</button>
		</>
	)
}

export default EditorImageChooser;