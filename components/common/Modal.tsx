import {createPortal} from "react-dom";
import {useEffect, useRef, useState} from "react";


const Modal = ({children}: any) => {
    const ref = useRef<Element | null>();
    const [mounted,setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
        if(document) {
            const dom = document.getElementById('add-modal');
            ref.current = dom; // ref에 dom 값 전달
        }
    },[]);

    if(ref.current && mounted) { // mounted 상태 && dom이 존재하는 경우 모달 랜더링 진행
        return createPortal(
            <div>
                <div role="presentation"/>
                {children}
            </div>,
          ref.current
        )
    }
    return null;
}

export default Modal;