To begin this poject, follow information, which derscribe below :

1. Download for Windows (x64) node-v16.13.2-x64.msi (if it's  not installed yet) go to the link https://nodejs.org/en/
   1.1 Install (tip: in the way 'Custom Setup', your should to choice 'npm packege manage') and reboot your computer only after full installing 

2. Into the desktop open command prompt. 
2. Your will see the way (only in my computer): C:\Users\HP> 
3. Write 'cd desktop'  
4. Then write C:\Users\HP\Desktop>npx create-react-app frontend
5. Your will see the next information:

	We suggest that you begin by typing:

  cd frontend
  npm start

Happy hacking!
npm notice
npm notice New minor version of npm available! 8.1.2 -> 8.4.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.4.0
npm notice Run npm install -g npm@8.4.0 to update!
npm notice

6. That is means - Okay !
7. Open in VS Code your folder 'frontend' 
8. Go to the folder src ->
9. Choice the next files: App.test.js, index.css, logo.svg, reportWebVitals.js, setupTests.js
10. Deleted these files
11. Go to the way src -> index.js
12. And deleted:

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import reportWebVitals from './reportWebVitals';
import './index.css';

13. Go to the way src -> App.css
14. Select oll of this and deleted
15. Go to the way src -> App.js
16. Select
     
	<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>



	16.1 And deleted
17. You should to write istead deleted


	<div className="App">
      <p>Here is our react website</p>    -   write this istead deleted
    </div>



18. Your shoul to write               PS C:\Users\HP\Desktop\frontend> npm start



19. Go to the browser and yiour will se the next:

Compiled with problems:X

ERROR in ./src/App.js 4:0-30

Module not found: Error: Can't resolve './logo.svg' in 'C:\Users\HP\Desktop\frontend\src'

20. Go to the way src -> App.js
21. And deleted              import logo from './logo.svg';

22. Your will see in the browser             Here is our react website
23. Create into  src ->        folder 'pages'
24. Create into  src ->        folder 'components'
25. Create into  src ->        folder 'context'
26. Create into  src ->        folder 'utils'
27. Create into  src -> pages    new file 'HomePage.js'
28. Click on the icon 'extensions' in VS Code

_________INSTALL THE COMPONENTS________________________

29. Write in the field   'auto' and install 'Auto Rename Tag'
30. Write in the field   'es7' and install 'ES7 React/Redux/GraphQL/React-Native snippets'
31. Go into  src -> pages -> HomePage.js
32. Wtite 'rafc' and insert the code:  (reaction action form create)
	
	import React from 'react'

const HomePage = () => {
  return (
    <div>
      
    </div>
  )
}

export default HomePage

33. Add in the code next changes:
 
	import React from 'react'

const HomePage = () => {
  return (
    <div>
      <p>You are logged to the home page!</p>
    </div>
  )
}

export default HomePage

34. Create into  src -> pages    new file 'LoginPage.js'
35. Wtite 'rfce' and insert the code: 

	import React from 'react'

function LoginPage() {
  return (
    <div>
      
    </div>
  )
}

export default LoginPage

36. Add in the code next changes:
 
	import React from 'react'

function LoginPage() {
  return (
    <div>
        <form>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="password" name="password" placeholder="Enter Password" />
            <input type="submit" />
        </form>
      
    </div>
  )
}

export default LoginPage

37. Go into the way src -> utils -> App.js and make the changes:

	37.1 Write 'imp' and choice the code 'import moduleName from 'module'
	37.2 Change on 'import HomePage from './pages/HomePage'
	37.3 Write 'imp' and choice the code 'import moduleName from 'module'
	37.4 Change on 'import LoginPage from './pages/LoginPage'

38. Write in powershell      PS C:\Users\HP\Desktop\frontend> npm install react-router-dom
39. Go into the way src -> utils -> App.js and make the changes:

	39.1 After import './App.css'; write   'amd' and choice the code 'import {  } from 'module'
	39.2 Change on 'import { BrowserRouter as Router, Route } from 'react-router-dom'
	39.3 After '<div className="App">' write: <Router>
	39.4 After '<p>Here is our react website</p>', write: </Router>
	39.5 Instead '<p>Here is our react website</p>', write:

	<Route component={HomePage} path="/" exact/>
        <Route component={LoginPage} path="/login"/>

40. Your shoul to write               PS C:\Users\HP\Desktop\frontend> npm start


41. If your are will see an error 'Uncaught Error: A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'

42. Wtite (install )PS C:\Users\HP\Desktop\frontend> npm install react-router-dom@5.3.0

43. Create into  src -> components    new file 'Header.js'
44. Write 'rafce' and choice the form

	import React from 'react'

const Header = () => {
  return (
    <div>
      
    </div>
  )
}

export default Header

45. After 'import React from 'react' write 'imd'. Choice the form 'import {  } from 'module'
46. Meke the changes

	import { Link } from 'react-router-dom'
47. After <div> write

	<Link to="/" >Home</Link>
        <span> | </span>
        <Link to="/login">Login</Link>
48. Go into the way src -> utils -> App.js and make the changes:

	48.1 After 'import LoginPage from './pages/LoginPage' write 'imp' and choice the form 'import moduleName from 'module'
	48.2 Make the changes: 
		import Header from './components/Header'
	48.3 After <Router> write
		<Header/>
49. Check how it is work into http://localhost:3000/.    Click 'Login' and then 'Home'
50. Create into  src -> utils    new file 'PrivateRoute.js'
51. Write 'imd' and choice the form 'import {  } from 'module'
    51.1 Make the next changes:
	import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
    console.log('Private route works!')
    return(
        <Route {...rest}>{children}</Route>
    )
}

52. Go into the way src -> utils -> App.js and make the changes:
	52.1 After the 'import { BrowserRouter as Router, Route } from 'react-router-dom';  write 'imd' and choice the form 'import {  } from 'module'
	52.2 Make the next changes:

	import PrivateRoute from './utils/PrivateRoute'

	52.3 After the <Header/> make the changes:

	<PrivateRoute component={HomePage} path="/" exact/>

53. Go into the way src -> utils -> PrivateRoutes.js

	53.1 Make the next changes after the 

	 <Route {...rest}>{children}</Route>
    )
}


	53.2 export default PrivateRoute;

54. Go into http://localhost:3000/login. Click on the fiels right button of mouse and choise 'inspect'
55. Go into 'Console' and click 'refresh'
56. Your will see 'Private route works!'
57. Go into the way src -> utils -> PrivateRoutes.js
56. Make the changes:

	56.1 Deleted 'console.log('Private route works!')'
	56.2 Write instead deleted: const authenticated = False
	56.3 After the 'return(' write:
	
	<Route {...rest}>{!authenticated ? <Redirect to="/Login" /> : children}</Route>


57. Your will see the problem:


	Compiled with problems:X

ERROR


src\utils\PrivateRoute.js
  Line 4:27:  'False' is not defined  no-undef

Search for the keywords to learn more about each error.

58. Go into the way src -> utils -> PrivateRoutes.js

	58.1 Make the changes 'const authenticated = false'

59. Go into browser and refresh

60. Create into src -> components -> context -> new file 'AuthContext.js'
61. Write 'imd' and choice the form 'import {  } from 'module'
62. Make the changes:
	
	import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{'name':'Andrew'}} >
            {children}
        </AuthContext.Provider>
    )
}


63. Go into src -> itils -> App.js

64. After the 'import PrivateRoute from './utils/PrivateRoute' write 'imd' and choice the modul 'import {  } from 'module'

65. Make the changes :
	
	import { AuthProvider } from './context/AuthContext'

66. Go into src -> itils -> App.js
67. After '<Router>' write '<AuthProvider>'
68. After '<Route component={LoginPage} path="/login"/>' write '</AuthProvider>'
69. Go into src -> components -> Header.js
70. After '<Link to="/login">Login</Link>' write 

	<p>Hello {name} </p>
71. Make the changes in 'import React from 'react'

	import React, {useContext} from 'react'
72. After 'const Header = () => {' write

	let {name} = useContext(AuthContext)
73. Go into src -> components -> Header.js
74. Write after 'import { Link } from 'react-router-dom'

	import AuthContext from '../context/AuthContext'
75. Go into src -> components -> Header.js
76. Comment '<p>Hello {name} </p>'

	{/* <p>Hello {name} </p> */}

77. Go into src -> context -> AuthContext.js    and make the changes: 

import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {
    /* Tokens */
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    /* Login */
    let loginUser = async (e )=> {
        e.preventDefault()
        console.log('Form submitted')
        // let responce = fetch('http://127.0.0.1:8000/api/token/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({'username':null, 'password':null})
        // })

    }

    let contexData = {
        loginUser:loginUser
    }
    return(
        <AuthContext.Provider value={{contexData}} >
            {children}
        </AuthContext.Provider>
    )
}

78.  Go into src -> pages -> LoginPage.js and make the changes:

import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  let {loginUser} =useContext(AuthContext)
  return (
    <div>
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="password" name="password" placeholder="Enter Password" />
            <input type="submit" />
        </form>
      
    </div>
  )
}

export default LoginPage


79. Chesk react APP (on click submit)
80. Go into src -> AuthContext.js
81. uncomment the next code:

	 let responce = fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':null, 'password':null})
        })

82. Remove  console.log('Form submitted')
83. Make the changes in:

	 },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })

84. Go into (environment) PS C:\Users\HP\Desktop\backend> and write       python manage.py createsuperuser    
85. In PS C:\Users\HP\Desktop\frontend> npm start
86. Go into 'Rect APP' http://localhost:3000/login
87. Enter in the form 'login' and 'Password' for superuser
88. Click right button of mouse on the field. Check 'Inspect'
89. Your will see 'data: {refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…hwIn0.6ZeAaqddloa6OxJ8VW9Ee4-Z2DZQ_bjeij0n7BA77Gc', 
access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…HAifQ.xH_XTx0TqJIQU31NumgIa1lZ1c__SOVKVsy-DvnLEEw'}'





	

	


	
	
    
    
















