export default (state={name: 'Okatahi', age: 89},action)=>{
    switch (action.type){
        case 'SET_NAME':
            state={
                ...state,
                name: action.payload
            }
            break;
        case 'SET_AGE':
            state={
                ...state,
                age: action.payload
            }
            break;
        case 'INCREASE_AGE':
            state={
                ...state,
                age: state.age + action.payload
            };
            break;
    }
    return state;
}
