import useCounter from "./store/Use";

const Index = () => {
    const stateValue = useCounter((state) => state.count)

  return (
    <div className=''>
        
    </div>
  )
}

export default Index;