
import './App.css'
import { useState , useEffect , useCallback , useRef } from "react";


function App() {
  const [Password_length,SetLength] = useState(8);
  const [Character_use,SetCharbox] = useState(false);
  const [Number_use,SetNumbox] = useState(false);
  const [Password,Setpassword] = useState("");
  const Password_Ref = useRef(null);
  let Password_generator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(Number_use) str += "1234567890"
    if(Character_use) str += "!@#~$%^&*(){_+}|:<>?,./;[]=-₹"

    for (let i = 0; i < Password_length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    Setpassword(pass)

  },[Password_length,Character_use,Number_use])
  useEffect(()=>{
    Password_generator();
  },[Password_length,Character_use,Number_use,Password_generator])
  let copy = useCallback(()=>{
    Password_Ref.current?.select()
    window.navigator.clipboard.writeText(Password);
  },[Password])
  return (

  <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-950 px-4 py-10 flex items-center justify-center">
    
    <div className="w-full max-w-3xl rounded-4xl border border-gray-700 bg-gray-900/80 backdrop-blur-xl shadow-2xl p-6 sm:p-10 flex flex-col gap-8">
      
      <div className="text-center space-y-3">
        <h1 className="text-white text-4xl sm:text-5xl font-bold tracking-tight">
          Password Generator
        </h1>

        <p className="text-gray-400 text-sm sm:text-base">
          Generate secure random passwords instantly
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        
        <input
          type="text"
          value={Password}
          ref={Password_Ref}
          readOnly
          className="
            flex-1
            min-w-0
            h-14
            rounded-2xl
            bg-gray-800
            border
            border-gray-700
            px-5
            text-white
            placeholder:text-gray-500
            outline-none
            focus:ring-2
            focus:ring-blue-500
            transition-all
          "
        />

        <button
          className="
            h-14
            px-6
            rounded-2xl
            bg-blue-500
            text-white
            font-medium
            hover:bg-blue-600
            active:scale-[0.98]
            transition-all
          "
          onClick={() => copy()}
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-6">
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="Range" className="text-gray-300 font-medium">
              Password Length
            </label>

            <span className="text-white font-semibold text-lg">
              {Password_length}
            </span>
          </div>

          <input
            type="range"
            id="Range"
            min="8"
            max="20"
            value={Password_length}
            onChange={(e) => SetLength(parseInt(e.target.value, 10))}
            className="w-full cursor-pointer accent-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          <div className="flex flex-wrap items-center gap-5">
            
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="Numbers"
                checked={Number_use}
                onChange={() => SetNumbox((prev) => !prev)}
                className="h-5 w-5 accent-blue-500"
              />

              <span className="text-gray-200">
                Numbers
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="Characters"
                checked={Character_use}
                onChange={() => SetCharbox((prev) => !prev)}
                className="h-5 w-5 accent-blue-500"
              />

              <span className="text-gray-200">
                Special Characters
              </span>
            </label>

          </div>

          <button
            className="
              w-full
              sm:w-auto
              h-14
              px-8
              rounded-2xl
              bg-blue-500
              text-white
              font-semibold
              hover:bg-blue-600
              active:scale-[0.98]
              transition-all
            "
            onClick={() => Password_generator()}
          >
            Generate Password
          </button>

        </div>
      </div>
    </div>
  </div>

  )
}

export default App 