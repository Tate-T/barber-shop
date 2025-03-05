
import style from './Container.module.css'

import { Outlet } from 'react-router-dom'

export const Container = ({children, test = "apple"}) => {
    // console.log(test);
    // console.log(children);
    
    return (
        <div className={style.container}>
            <Outlet/>
            {children}
        </div>
    )
}



