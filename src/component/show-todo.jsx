import { useContext, useState } from "react"
import { UserContext } from "../App"
import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlineCheckCircle, AiOutlineDelete } from 'react-icons/ai'
import { Outlet } from "react-router-dom"

export const ShowTodo = () => {
    const [data, setData] = useContext(UserContext)




    const deleteItem = (id) => {
        const deleteData = data.filter((item) => {
            if (item.id === id) {
                item.isDel = !item.isDel
            }
            return item
        })


        setData(deleteData)
        console.log(data);
    }

    const checkbox = (id) => {
        const updateChecked = data.map((item) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete

            }
            return item

        }
        )

        setData(updateChecked)
        // console.log(data);
    }
    const editItem = (id) => {
        const onClickEdit = data.map((item) => {
            if (item.id === id) {
                item.isEdit = !item.isEdit
                // setInput(item.title)
            }
            return item
        })
        setData(onClickEdit)
        console.log(data);
    }


    const [input, setInput] = useState("")
    const handleChange = (event, item) => {
        setInput(event.target.value)
        console.log(item.id);


    }
    const handleKeyDown = (event, id) => {
        if (event.key === 'Enter' && input) {
            const onClickEdit = data.map((item) => {

                if (item.id === id) {
                    item.isEdit = false
                    item.title = input
                    setInput("")

                }
                return item
            })
            setData(onClickEdit)
            console.log(data);
        }

    }






    return (
        <>
            {data.map((item) => {
                return (
                    <>

                        {(!item.isDel && !item.isComplete) &&
                            <div
                                onDoubleClick={() => editItem(item.id)}
                                className="item-show"
                                key={item.id}
                            // onBlur={saveChange}
                            >
                                {item.isEdit ? <input type='text'
                                    className='input-item'
                                    // value={input}
                                    placeholder={item.title}
                                    key={item.id}
                                    onKeyDown={(event) => handleKeyDown(event, item.id)}
                                    onChange={(event) => setInput(event.target.value)}

                                />
                                    :
                                    <p>{item.title}</p>}
                                <div className="checkbox">
                                    <AiOutlineCheckCircle onClick={() => checkbox(item.id)} />
                                    <AiOutlineDelete onClick={() => deleteItem(item.id)} />
                                </div>
                            </div>
                        }
                        <Outlet />
                    </>
                )
            })}

        </>
    )

}