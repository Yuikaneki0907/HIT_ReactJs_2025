import Context from "./Context";
import { useReducer } from "react";
import reducer, {initstate} from "./reducer";

function Provider({children}){
    const [state, dispatch] = useReducer(reducer,initstate);
    return (<Context.Provider>{children}</Context.Provider>);
}

export default Provider;