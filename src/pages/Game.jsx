import React, {useState, useEffect} from 'react'

    //console.log(game)

function Game() {

    const [serverReload, setServerReload] = useState(true);



       /* useEffect(() => {
    
            if (serverReload) {
                setServerReload(false);
                window.location.reload();
            }
        },[])*/
    

    return (
        <div>
            GAME
        </div>
    )
}

export default Game