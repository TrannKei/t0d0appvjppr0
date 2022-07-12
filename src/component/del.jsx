import { UserContext } from "../App"
import { useContext, useState } from "react"
import { GrDocumentUpload } from 'react-icons/gr'
import { Outlet } from "react-router-dom"

export const Del = () => {
    const [data, setData] = useContext(UserContext)


    const returnItem = (id) => {
        const returnThis = data.filter((item) => {
            if (item.id === id) {
                item.isDel = !item.isDel
            }
            return item
        })
        setData(returnThis)
    }

    return (
        <>
            <div className="done">
                {data.map((item) => {
                    return (
                        <>
                            {item.isDel &&
                                <div className="item-show">
                                    <p>{item.title.toUpperCase()}</p>
                                    <div className="return-item">
                                        <GrDocumentUpload onClick={() => returnItem(item.id)} />
                                    </div>
                                </div>
                            }

                        </>
                    )
                })}
            </div>
        </>
    )


}