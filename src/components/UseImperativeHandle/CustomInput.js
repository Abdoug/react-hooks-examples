import React, { forwardRef, useImperativeHandle } from 'react'

function CustomInput({ value, onChange }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        alertHi: () => alert('Hi')
      }
    },
    []
  )

  return (
    <div>
      <input ref={ref} value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}

export default forwardRef(CustomInput)