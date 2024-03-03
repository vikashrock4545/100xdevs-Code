import axios from 'axios'
import { atom, selector } from 'recoil'

export const notifications = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationAtomSelector",
        get: async () => {
            // await new Promise(r => setTimeout(r, 5000))
            const res = await axios.get("http://localhost:3000/notifications")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications)
        return allNotifications.network + allNotifications.jobs + 
                allNotifications.messaging + allNotifications.notifications 
    }
})