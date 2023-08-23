import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';


library.add(faArrowsRotate)


export default function RefreshButton({setMinutes, setSeconds, minutes, seconds}) {
    const [canRefresh, setCanRefresh] = useState(false);

    const handleRefresh = () => {
        setMinutes(0);
        setSeconds(0);
    }

    useEffect(() => {
        setCanRefresh(minutes === 0 && seconds === 0)
    }, [minutes, seconds])
    
    return (
        <button className={"refresh " + (canRefresh ? "d-none" : "")} onClick={handleRefresh}>
            <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
    )
}