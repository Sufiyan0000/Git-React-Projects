import { useCallback, useEffect, useState,useRef } from "react";

export default function PasswordGenerator(){
    const [length,setLength] = useState(8)
    const [password,setPassword] = useState("")
    const [numAllowed,setNumAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)

    //useRef Hook
    const passwordRef = useRef(null)

    const generatorFnc = useCallback(() => {

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%&*(){}"

        for (let i=0;i<length;i++){
            let ranIndex = Math.floor(Math.random() * str.length)
            pass += str.charAt(ranIndex)
        }

        setPassword(pass)
    },[numAllowed,charAllowed,setPassword,length])

    const handleCopy = useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,21)
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        generatorFnc()
    },[numAllowed,charAllowed,setPassword,length])


    return (
        <div>
            <div className="container">
                <h3>Password Generator</h3>
                <div>
                    <input type="text"
                    readOnly
                    value={password}
                    placeholder="Password"
                    ref={passwordRef}
                    />
                    <button onClick={handleCopy}>Copy</button>
                </div>

                <div>
                    <input type="range" 
                    min={0}
                    max={20}
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    />
                    <label> 
                        Length : {length}
                    </label>

                    <input type="checkbox"
                    id="num-allowed"
                    defaultChecked={numAllowed}
                    onChange={ () =>
                    setNumAllowed((prev) => !prev)
                    }
                    />
                    <label htmlFor="num-allowed"> Numbers </label>

                    <input type="checkbox"
                    id="char-allowed"
                    defaultChecked={charAllowed}
                    onChange={ () =>
                        setCharAllowed((prev) => !prev)}
                    />
                    <label htmlFor="char-allowed"> Characters </label>
                </div>
            </div>
        </div>
    )

}