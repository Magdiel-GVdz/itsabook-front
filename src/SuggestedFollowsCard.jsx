import { useState } from "react"

export function SuggestedFollowsCard({children, username, initialIsFollowing}){

    /* Crear el arreglo para definir el estado de seguir y siguiendo
    Posición 1 = Valor del estado / Posición 2 = Cómo actualizar el estado */
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    /* Declarar el estado de los botones */
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'iab-followCard-button is-following'
        : 'iab-followCard-button'

    /* Intercalar el estado del botón (Follow/Following) */    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }    

    return (
        /* Crear la tarjeta de usuario a seguir */
        <article className='iab-follow-card'>
            <header className='iab-follow-card-header'>
                <img 
                /* Crear la imagen del perfil según el link */
                className='iab-profile-picture'
                alt="Mini Profile Picture" 
                src={`https://unavatar.io/${username}`}/>
            <div className='iab-follow-card-info'>
                <strong>{
                /* Mostrar el nombre */
                children}</strong>
                <span 
                /* Mostrar el usuario */
                className='iab-followcard-infoUserName'>@{username}</span>
            </div>
            </header>

        <aside>
            <button 
            /* Crear el botón de seguir, llamando al metodo handleClick */
            className={buttonClassName} onClick={handleClick}>
                <span className='iab-followCard-text'>{text}</span>
                <span className='iab-followCard-unfollow'>Unfollow</span>
            </button>
        </aside>     
        </article>
    )
}