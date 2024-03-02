import axios from 'axios'
import { atomFamily, selectorFamily } from 'recoil'

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: (id) => async ({get}) => {
            await new Promise(r => setTimeout(r, 5000))
            const res = await axios.get(`http://localhost:3000/todos?id=${id}`);
            return res.data.todos
        }
    })
})