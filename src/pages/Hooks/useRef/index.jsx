import React from 'react'

export default function Demo() {
 const myRef= React.useRef() //useref用于获取dom和保存变量
  const isInfo=()=>{
    console.log('myRef', myRef)
    alert(myRef.current.value)
  }
  return (
    <div>
      
      <input type="text"  ref={myRef}/> 
      <button onClick={isInfo}>点我弹出输入信息</button>
    </div>
  )
}
