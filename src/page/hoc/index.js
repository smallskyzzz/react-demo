import React, { useState } from "react";

function WithUserInfo(WrappedComponent) {
  const [userInfo, setUserInfo] = useState({
    name: 123
  })

  return (
    <WrappedComponent userInfo={userInfo}/>
  )
}

function Wrapper() {
  return (
    <div>父组件</div>
  )
}

export default WithUserInfo(Wrapper)
