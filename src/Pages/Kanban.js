import { useDispatch, useSelector } from "react-redux"
import { loginUser, logoutUser } from "../Redux/Slice/auth"
import { useEffect } from "react"

const Kanban = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(loginUser(false))
  // }, [])
  
  return (
    <div
    style={{
        background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"  
    }}
    className='h-100 w-100 d-flex justify-content-center align-items-center rounded-5'>
        <h1 className="fw-bold text-white">Kanban</h1>
    </div>
  )
}

export default Kanban