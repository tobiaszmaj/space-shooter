import React from 'react'
import * as actionTypes from './actionTypes'

export const initialState = {
  player: {
    lives: 4,
    score: 0,
    userName: 'Player name',
    selectedShip: 'blue'
  },
  game: {
    isStarted: false,
    arenaHeight: 0,
    arenaWidth: 0,
    playerPosition: {
      x: 0,
      y: 0
    },
    userBullets: []
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INIT_GAME: {
      return {
        ...state,
        game: {
          ...state.game,
          arenaHeight: action.payload.arenaHeight,
          arenaWidth: action.payload.arenaWidth,
          playerPosition: {
            ...state.game.playerPosition,
            x: action.payload.playerPosition.x,
            y: action.payload.playerPosition.y
          }
        }
      }
    }
    case actionTypes.SET_USERNAME: {
      return {
        ...state,
        player: {
          ...state.player,
          userName: action.userName
        }
      }
    }
    case actionTypes.SET_BATTLESHIP: {
      return {
        ...state,
        player: {
          ...state.player,
          selectedShip: action.selectedShip
        }
      }
    }
    case actionTypes.START_GAME: {
      return {
        ...state,
        player: {
          ...state.player,
          userName: action.userName
        },
        game: {
          ...state.game,
          isStarted: true
        }
      }
    }
    case actionTypes.MOVE_LEFT: {
      return {
        ...state,
        game: {
          ...state.game,
          playerPosition: {
            ...state.game.playerPosition,
            x: state.game.playerPosition.x - 20
          }
        }
      }
    }
    case actionTypes.MOVE_RIGHT: {
      return {
        ...state,
        game: {
          ...state.game,
          playerPosition: {
            ...state.game.playerPosition,
            x: state.game.playerPosition.x + 20
          }
        }
      }
    }
    default: return state
  }
}

export const StateContext = React.createContext()