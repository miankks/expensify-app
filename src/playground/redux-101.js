import { createStore } from 'redux';



const incrementCount = ( {incrementBy = 1} = {}) =>( {
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( {decrementBy = 1} = {}) => ( {
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET',
    
})

const setCount = ( {setCountBy = 1} = {}) => ({
    type: 'SET',
    count: setCountBy
    
})

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
            break;
            case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
            break;
            case 'RESET':
                return {
                    count: 0
                }
            break;
        case 'SET':
            return {
                count: action.count
            }
            break;
            default:
                console.log('No value')
            return state;
            break;
        }
    }
const store = createStore(countReducer);
    
    store.subscribe(() => {
        console.log(store.getState());
    })
    
    
    store.dispatch(incrementCount( {incrementBy: 5}))
    store.dispatch(incrementCount())
    
    store.dispatch(resetCount())
    
    store.dispatch(decrementCount( {decrementBy: 5}))
    store.dispatch(decrementCount())
    
    store.dispatch(setCount({setCountBy: 105}))
 