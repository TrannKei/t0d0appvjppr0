import { UserContext } from "../App"
import { useContext, useState } from "react"
import { Outlet } from "react-router-dom"
export const Done = () => {
    const [data, setData] = useContext(UserContext)

    return (
        <>

            <div className="done">
                {data.map((item) => {
                    return (
                        <>
                            {(item.isComplete) &&
                                <div className="item-done">

                                    <p>{item.title.toUpperCase()}</p>
                                </div>

                            }

                        </>
                    )
                })}
            </div>


            <Outlet />
        </>
    )


}