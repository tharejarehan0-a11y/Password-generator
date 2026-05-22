# Random_Password_Generator

<img width="1035" height="513" alt="Screenshot 2026-05-22 at 9 32 00 AM" src="https://github.com/user-attachments/assets/e0d491b4-5fd3-48ae-b6a3-f51982274243" />

This is my first ever React project and This was an amazing project to understand the usecase of usestate , useeffect , useCallback and useRef hooks . I also used a bit of AI for the tailwind part tho it was only ig 2% of the project . the rest 98% of the projeect was made by me as i will explain everything below 

# If I were to recreate it

**This is done with reference to MACOS check the changes for your os**
# Create a vite Project 
run the command in terminal:
``` 
npm create vite@latest
```
This will set a template for you to build on making the process of making the project faster . It is basically a bundler that gives all the neccessary things to start with 

__Choose the options you want for this i used React + Javascript template__

**Now head straight into the src folder delete all the css and keep only useful files that you want**

# Adding Tailwind to the Project 

Run this command

Terminal:
```
npm install tailwindcss @tailwindcss/vite
```

This will install tailwind and it's dependencies

Then add the following code to the vite configuration files

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Then add this to your CSS files

```
@import "tailwindcss";
```

This will add tailwind to your project so that you can use it basically tailwind is a utility first css means it makes the process of adding styles to your project much faster you js need to add classes there is much more to it tho but we can work with classes only

# Explaining the JS code

You can check all the code in the src folder in App.jsx file but here is the code that i will explain

```js
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
```
Now the code starts with me stating the dependencies of the password generated those are **length and if characters and numbers are allowed or not** we define the first three variables with the **useState hook** which mantains the state of the variable and **updates it** when i want it basically **returns two things** the **input in the state** that we want at that time plus a kind of code that goes to **setcounter** that maintains our input 

Next up the same thing is done with the **Password variable**

Then we **add a reference** using the **useRef hook** it is helpful to provide us certain kind of **controls** that helps us select the text inside the input box 

Then we have the **Password_generator function** . In That function we use the **useCallback hook** which **optimizes the code** by memorizing it then we define some certain variables and using for loop  and Mat.random we get our Password for that state and it updates everytime with the **useEffect hook** that **renders the page whenever it is any dependcies of this hook changes**

At last we have the **Copy function** which is used to copy the password here the Password_Ref plays a huge role

