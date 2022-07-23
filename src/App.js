
import './App.css';
import React , {useReducer} from 'react'
import List from './components/List';
import Props from './components/Props';
import Usecontext1 from './components/Usecontext1';
import UseEffect from './components/UseEffect';
import UseEffect2 from './components/UseEffect2';
import UseEffect3 from './components/UseEffect3';
import UseReducer1 from './components/UseReducer1';
import UseReducer2 from './components/UseReducer2';
import Usestate from './components/Usestate';
import Usestate2 from './components/Usestate2';
import ReducercontextA from './components/ReducercontextA';
import ReducercontextB from './components/ReducercontextB';
import ReducercontextD from './components/ReducercontextD';
import UseReducerApi from './components/UseReducerApi';
import UseReducerapi2 from './components/UseReducerapi2';
import UseRefs from './components/UseRefs';
import UseRefs2 from './components/UseRefs2';

// export const UserContext = React.createContext()            #usercontext2
 // export const ChannelContext  = React.createContext()       #usercontext2

 {/* export const CountContext = React.createContext()    
 const initialstate= 0
    const reducer = (state,action) => {
        switch (action) {
            case 'increment':
                return state + 1                                #Reducercontext
                break;
            case 'decrement':
                return state - 1
                break;
            case 'reset':
                return initialstate 
                break;
            default:
                return state
                break;
        }
    }*/}

function App() {
 // const [count, dispatch] =useReducer(reducer, initialstate)    #reducercontext
  return (
   
    <div className="App">
   {/* <Props name="sameer" class="b.tech" /> */}
   {/*<List /> */}
  {/* <Usestate2 />*/}
{/*  <UseEffect /> */}
 {/*  <UseEffect2 /> */}
 {/*   <UseEffect3 /> */}

{/* <UserContext.Provider value={'sameer'}>
  <ChannelContext.Provider value={'coder'}>
    <Usecontext1 />
  </ChannelContext.Provider>
  </UserContext.Provider>*/}

 {/* <UseReducer1 /> */}
  {/* <UseReducer2 />  */}

{/*<CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
count - {count}
<ReducercontextA />                                             #reducercontext
<ReducercontextB />
<ReducercontextD />
</CountContext.Provider>*/}

{/*<UseReducerApi />*/}
{/*<UseReducerapi2 />*/}
{/*<UseRefs /> */}
{/* <UseRefs2 />*/}
    </div>
    
  );
}

export default App;
