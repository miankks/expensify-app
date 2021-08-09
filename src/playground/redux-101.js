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
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
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
    
    
    
    

    // store.dispatch({
        //     type: 'RESET'
        // });
        
        // store.dispatch({
            //     type: 'DECREMENT',
            //     decrementBy: 5
            // });
            
            // store.dispatch({
                //     type: 'DECREMENT',
                // });
                
                // store.dispatch({
                    //     type: 'INCREMENT',
                    //     incrementBy: 5
                    // });
                    // const incremetCount = () => {
                    //     return {
                    //         type: 'INCREMENT'
                    //     }
                    // }
                    
                    // const incrementCount = (payload = {}) =>( {
                    //         type: 'INCREMENT',
                    //         incrementBy: typeof payload.incrementBy === 'number'? payload.incrementBy : 1
                    // })