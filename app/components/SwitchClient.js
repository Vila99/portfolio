'use client'
import { useEffect } from 'react'
import {useTheme} from 'next-themes'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default function SwitchClient(){
    const { theme, setTheme } = useTheme()

    //Inicializacion
    useEffect(() => {
        setTheme('light')
      }, [])

    //Cambio de tema
    const cambiaTema = ()=>{
        setTheme(theme=='dark'?'light':'dark')
        console.log('cambio tema a '+theme)
    }


    return(
        <div className="form-check form-switch ps-5 align-content-center pt-1 bg-main">
            <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={cambiaTema}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <EmojiObjectsIcon className="btn-icon"/>
            </label>
        </div>    
    )
}