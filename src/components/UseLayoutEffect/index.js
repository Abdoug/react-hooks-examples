import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function Index() {
    const [modalShown, setModalShown] = useState(false)
    const buttonRef = useRef()
    const modalRef = useRef()
  
    useLayoutEffect(() => {
        if (buttonRef.current == null || modalRef.current == null) return;

        const { bottom } = buttonRef.current.getBoundingClientRect()

        modalRef.current.style.top = `${bottom + 25}px`
    }, [modalShown])

    return (
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <button ref={buttonRef} onClick={() => setModalShown(!modalShown)}>Click here</button>
            {modalShown && 
            <div style={{position: 'absolute'}} ref={modalRef}>
                This is a Modal
            </div>}
        </div>
    )
}

export default Index