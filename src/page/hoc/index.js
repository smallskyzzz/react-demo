import React, { useState } from "react";

function WithUserInfo(WrappedComponent) {
  const [userInfo, setUserInfo] = useState({
    name: 123
  })

  return (
    <WrappedComponent userInfo={userInfo}/>
  )
}

function Wrapper(props) {
  console.log(props)
  const name = props.userInfo.name
  return (
    <div>父组件{name}</div>
  )
}

export default () => WithUserInfo(Wrapper)
