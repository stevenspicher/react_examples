// 1 create a default state

const defaultState ={
    inputValue: 'Write Something....',
    list: [
        'Have a meeting',
        'Have Lunch',
        'play tennis'
    ]
}

// 2 create a function

const fn =(state = defaultState, action)=> {
    console.log(state, action)
    if (action.type === 'CHANGE_INPUT'){
       let newState = JSON.parse(JSON.stringify(state))
       newState.inputValue=action.value
       return newState
    }
    return state
}


export default fn