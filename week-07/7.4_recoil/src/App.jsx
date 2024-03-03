// import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'
import { useRecoilValue, RecoilRoot } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
// import { useEffect } from 'react'
// import axios from 'axios'

function App() {
  return (
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  )
}

function MainApp() {
  // const [notificationCount, setNotificationCount] = useRecoilState(notifications)
  const notificationCount = useRecoilValue(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector) 

  // useEffect(() => {
  //   axios.get("http://localhost:3000/notifications")
  //       .then((res) => {
  //         setNotificationCount(res.data)
  //       })
  // }, [])

  return (
    <div>
        <button>Home</button>

        <button>My Network ({notificationCount.network >= 100 ? "99+" : notificationCount.network})</button>
        <button>Jobs ({notificationCount.jobs})</button>
        <button>Messaging ({notificationCount.messaging})</button>
        <button>Notification ({notificationCount.notifications})</button>

        <button>Me ({totalNotificationCount})</button>
    </div>
  )
}

export default App
