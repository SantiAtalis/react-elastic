import { useState } from "react"

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState([])
  const [initialTime, setInitialTime] = useState(null)
  const [endTime, setEndTime] = useState(null)

  const SUPER_USER_NAME = import.meta.env.VITE_SUPER_USER_NAME
  const SUPER_PASSWORD = import.meta.env.SUPER_PASSWORD
  const ELASTIC_API_KEY = import.meta.env.ELASTIC_API_KEY
  const ELASTIC_REMOTE_URL = import.meta.env.VITE_ELASTIC_REMOTE_URL
  // LOCALHOST ENV
  const URL = 'http://46.137.120.82:9200/test_inject_borra/_search' || 'http://127.0.0.1:4567/test/'
  const ELASTIC_LOCAL_URL = 'http://localhost:9200/_security/user/'

  // AUTH METHODS
  // const handleAuth = async () => {
  //   try {
  //     //if username or password is empty, the method returns all the users
  //     if (userName === '' || password === '') throw new Error('Empty fields')

  //     const response = await fetch(`${ELASTIC_LOCAL_URL}${userName}`, {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': 'Basic ' + btoa(`${SUPER_USER_NAME}:${SUPER_PASSWORD}`)
  //       }
  //     })
  //     const data = await response.json()
  //     setUser(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const handleRegister = async () => {
  //   try {
  //     const response = await fetch(`${ELASTIC_LOCAL_URL}${userName}`, {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': 'Basic ' + btoa(`${SUPER_USER_NAME}:${SUPER_PASSWORD}`),
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         "password": password,
  //         "roles": ["user"],
  //         "full_name": userName,
  //         "email": `${userName}@dominio.com`
  //       })
  //     })
  //     const data = await response.json()
  //     setUser(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const handleChangeUsername = (event) => {
  //   setUserName(event.target.value);
  // }
  // const handleChangePassword = (event) => {
  //   setPassword(event.target.value);
  // }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  // searches
  const searchToElasticRemote = async () => {
    const title = 'eos enim sit tenetur quia accusamus nobis animi nesciunt laborum pariatur'
    setInitialTime(new Date().getTime())
    // const ID = 33
    try {
      const response = await fetch(`${URL}search/${title}`)
      const data = await response.json()
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setEndTime(new Date().getTime())
    }
  }

  const handleTitle = async () => {
    setInitialTime(new Date().getTime())
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setEndTime(new Date().getTime())
    }
  }

  // const handleTitle = async () => {
  //   setInitialTime(new Date().getTime())
  //   try {
  //     const response = await fetch(ELASTIC_LOCAL_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `ApiKey ${ELASTIC_API_KEY}`,
  //         'Content-Type': 'application/json'
  //       },
  //     })
  //     const data = await response.json()
  //     setData(data)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     setEndTime(new Date().getTime())
  //   }
  // }
  const handleSearch = async () => {
    setInitialTime(new Date().getTime())
    try {
      const response = await fetch(`${URL}${search}`)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setEndTime(new Date().getTime())
    }
  }



  return (
    <main className="flex flex-col justify-start items-center text-slate-50 gap-5">
      <section className="flex flex-col justify-start items-center gap-5 p-5 w-[40vw] text-wrap">
        <h1 className="text-slate-300 text-3xl mt-10">React | Elastic</h1>
        {/* <div className="flex flex-col gap-2 w-full">
          <input type="text" className="border rounded-sm p-2 text-slate-800" onChange={handleChangeUsername} />
          <input type="password" className="border rounded-sm p-2 text-slate-800" onChange={handleChangePassword} />
          <button className="bg-sky-600 py-1 rounded-md" onClick={handleAuth}>Authenticate</button>
          <button className="bg-sky-600 py-1 rounded-md" onClick={handleRegister}>Register</button>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>User</h2>
          <span>{JSON.stringify(user)}</span>
        </div> */}
        <div className="flex flex-col gap-2 w-full">
          <input type="text" className="border rounded-sm p-2 text-slate-800" onChange={handleChange} />
          <button className=" bg-green-600 py-1 rounded-md" onClick={handleSearch}>Searh by ID</button>
          <button className=" bg-green-700 py-1 rounded-md" onClick={handleTitle}>Search by default title</button>
          <button className=" bg-green-800  00 py-1 rounded-md" onClick={searchToElasticRemote}>Search by default criteria Elastic Cloud</button>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2>Result in ms: {endTime - initialTime}ms</h2>
          <span>{JSON.stringify(data)}</span>
        </div>
      </section>
    </main>
  )
}

export default App
