import { add } from "../Actions/actionsType"
import { dec} from  "../Actions/actionsType"
import { add2 } from '../Actions/actionsType'
import { addNum } from '../Actions/actionsType'

const Reducer1 = (state= {x :0} , action) => {
switch(action.type) {
    case  add :
        return {...state , x : state.x + 1}
            case  dec :

        return {...state , x : state.x - 1}
        case add2 :
            return {...state , x : state.x + 2}
            case addNum :
                return {...state , x : state.x + action.value}
        default :
        return state
}
}
export default Reducer1

