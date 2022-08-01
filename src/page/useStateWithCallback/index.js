import useCallbackState from './hook'
import { useEffect } from 'react'

function Use() {
    let [state, setState] = useCallbackState('121')

    useEffect(() => {
        setState('ccsa', (res) => {
            console.log(res)
        })
    }, [])


    return (
        <div>普通useState在setState后无法获取到最新值（不在useEffect中时），使用该自定义hook可以解决</div>
    )
}

export default Use