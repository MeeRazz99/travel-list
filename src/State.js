import {useState} from 'react'

function State() {

    return (
        <div>
            <ChildState />

        </div>
        
    )
}

function ChildState(){
    let [name, setName] = useState("")
    let [count, setCount] = useState(0)
 

    function onbtnClick() {
        setCount((prevCount) => {
           return prevCount + 1
        }) 
    }

    function onInputChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <div>
            {/* <div>Count: {count}</div>
            <button onClick={onbtnClick} className="btn">Increase</button> */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" onChange={onInputChange} />
                <button>Submit</button>
            </form>
            {name}

        </div>
    )
}


export default State;

