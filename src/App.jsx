import React, { Children } from 'react'
import './App.css'
import { SuggestedFollowsCard } from './SuggestedFollowsCard'

const users=[
    {
        username: 'JorgeFG914',
        name: 'Jorge Figueroa',
        isFollowing: false
    },
    {
        username: 'CrusherDoom14',
        name: 'Jesús García',
        isFollowing: false
    },
    {
        username: 'OmegaXtra',
        name: 'Fernando Mendoza',
        isFollowing: false
    },
    {
        username: 'AmeliaStanson',
        name: 'Jerenis Acosta',
        isFollowing: false
    }
]

export function App(){
    return(
    <section className="App">
        {
            users.map(user => {
                const {username, name, isFollowing} = user
                return(
                    <SuggestedFollowsCard
                    username={username}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </SuggestedFollowsCard>
                )
            })
        }
    </section>
    )
}