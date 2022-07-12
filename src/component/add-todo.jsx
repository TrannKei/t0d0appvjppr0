import { useContext, useState } from "react"
import { UserContext } from "../App"
import { ShowTodo } from './show-todo';


export const AddTodo = () => {
    const [data, setData] = useContext(UserContext);
    const [input, setInput] = useState()

    function handleChange(e) {
        setInput(e.target.value)

    }

    const Handle = () => {
        const beforeData = {
            id: Math.floor(Math.random() * 10000) + 1,
            title: input,
            isComplete: false,
            isEdit: false,
            isDel: false
        }
        setData([...data, beforeData])
        // const fake = [...data]
        console.log(data);
        setInput('')
    }

    return (
        <>
            <div className="add-todo">
                <div className="input-button">
                    <input type="text"
                        value={input}
                        // placeholder={input}
                        onChange={handleChange} />
                    <button onClick={Handle}>ADD</button>
                </div>
                <div className="item-list">
                    <h3>*Double click để chỉnh sửa, Enter để xác nhận</h3>
                    <ShowTodo />
                </div>
            </div>
        </>
    )
}