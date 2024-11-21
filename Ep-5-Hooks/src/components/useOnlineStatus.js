import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onOffStatus, setOnOffStatus] = useState(true)
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnOffStatus(false);
        })

        window.addEventListener("online", () => {
            setOnOffStatus(true)
        })
    }, [])

    return onOffStatus
}

export default useOnlineStatus;