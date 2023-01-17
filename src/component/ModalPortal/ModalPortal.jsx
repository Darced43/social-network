import { createPortal } from "react-dom"
import FormEnter from '../FormEnter/FormEnter';

function ModalPortal({setShowModal}){

    return createPortal(
                    <div className='portal' onClick={() => setShowModal(false)}>
                        <div className='portal__block' onClick={e => e.stopPropagation()}>
                            <FormEnter setShowModal={setShowModal}/>
                        </div>
                    </div>,document.body
    )
}

export default ModalPortal