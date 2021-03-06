import React, { useContext, useEffect } from 'react'
import Asteroid from '../../components/Asteroid/Asteroid'
import random from '../../utility/random'
import generateID from '../../utility/generateID'
import * as actionTypes from '../../store/actionTypes'
import { StateContext } from '../../store/store'

const Enemies = () => {

    const store = useContext(StateContext)

    useEffect(() => {
        if (!store.state.game.gameOver) {
            var interval = setInterval(() => {
                const style = random(1, 4)
                const x = random(100, store.state.game.arenaWidth - 70)
                let elementHeight = 0
                let elementWidth = 0

                switch (style) {
                    case 1:
                        elementHeight = 37
                        elementWidth = 39
                        break
                    case 2:
                        elementHeight = 26
                        elementWidth = 26
                        break
                    case 3:
                        elementHeight = 36
                        elementWidth = 37
                        break
                    case 4:
                        elementHeight = 35
                        elementWidth = 44
                        break
                    default:
                        elementHeight = 0
                        elementWidth = 0
                }

                const payload = {
                    id: generateID(),
                    hp: 1,
                    value: 1,
                    type: 'asteroid',
                    style: style,
                    x: x,
                    y: -elementHeight,
                    hited: false,
                    cords: null,
                    width: elementWidth,
                    height: elementHeight
                }

                store.dispatch({ type: actionTypes.ENEMY_ADD, payload })

            }, 1500)
        }
        return () => clearInterval(interval)
    }, [store.state.game.arenaWidth, store.state.game.gameOver])



    return (
        <React.Fragment>
            {store.state.enemies.map((enemy) => {
                return (
                    <Asteroid key={enemy.id} {...enemy} />
                )
            })
            }
        </React.Fragment>
    )
}

export default Enemies 