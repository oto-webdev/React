import useCounter from "./store/Use";
import handleIncreamentValue from './store/Use'

const Manage = () => {
    const increamentCounter = useCounter(state => state.handleIncreamentValue)

  return (
    <div className="">
        
    </div>
  )
}

export default Manage;