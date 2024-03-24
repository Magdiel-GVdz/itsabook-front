import React, { Children } from 'react'
import './App.css'
import './../index.css'
import { SuggestedFollowsCard } from './SuggestedFollowsCard'

const users=[
    {
        username: 'PykeInOhio',
        common: 'It',
        isFollowing: false
    },
    {
        username: 'WhatsappDanger',
        common: 'Song of Fire and Ice',
        isFollowing: false
    }
]

export function App(){
    return(
    <section className="SuggestedFollows">
        <h1 className='iab-text'>You might interest:</h1>
        <h1 className='iab-followCard-suggestion'></h1>
        {
            users.map(user => {
                const {username, common, isFollowing} = user
                return(
                    <SuggestedFollowsCard
                    username={username}
                    initialIsFollowing={isFollowing}
                    >
                        {common}
                    </SuggestedFollowsCard>
                )
            })
        }
    </section>
    )
}