function Modal({ children, show=false, handleClose, title }: ModalProps) {
	return (
		<div className="fixed h-full w-full top-0 left-0 bg-black bg-black/[0.4] overflow-auto z-[1]" style={{display: show ? 'flex' : 'none'}}>

		  <div className="modal-content p-6 m-auto bg-white relative w-full sm:w-4/5 xl:w-1/2 rounded">
		    <div className="flex justify-between">
		      <h2>{title}</h2>
		      <button onClick={() => handleClose(false)} className="cursor-pointer">&times;</button>
		    </div>
		    { children }
		  </div>

		</div>
	)
}

type ModalProps = { 
	children?: React.ReactNode;
	show?: boolean;
	handleClose: (show: boolean) => void;
	title?: string;
}

export default Modal;