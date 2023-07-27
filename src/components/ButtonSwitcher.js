import React from "react"

export default function ButtonSwitcher({children}) {

    const handleClick = () => {
        
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
        }
    }

    return <div className="mt-2 text-end">
        <button 
            className="btn btn-dark shadow" 
            id="btnSwitch" 
            onClick={handleClick}>
            {children}
        </button>
    </div>
}