import { useState } from "react"

const useMyHooks2 = (defaultValue) =>{
    const [value,setValue] = useState(defaultValue);
    // const [value,setValue] = useStae("");

    const handleOnChange = e=>{
        const changeValue = e.target.value;
        setValue(changeValue)
    }

    return [value,handleOnChange]
}
export default useMyHooks2