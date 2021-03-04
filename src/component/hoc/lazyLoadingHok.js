import React, {Suspense} from 'react';
import LoadingIcon from "../Common/LoadingIcon/LoadingIcon";


export const suspenseWrapper = (Component) => {

    return (
        <Suspense fallback={<LoadingIcon/>}>
            <Component/>
        </Suspense>
    )

}




