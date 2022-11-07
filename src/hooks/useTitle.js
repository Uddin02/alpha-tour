import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Genius Car | ${title}`;
    },[title])
}

export default useTitle;