import { useHistory } from "react-router-dom";

export const Navigation = () => {
    const history = useHistory()


    const handleLogOutBtn = () => {
        history.push(``)
        localStorage.clear()
    }

    return (
        <>

            <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
                <button onClick={handleLogOutBtn} className="btn btn-secondary float-right">Log Out</button>
            </div>
            <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
                <button onClick={() => { history.push("/cats/create") }} className="btn btn-secondary float-middle">Add A Cat</button>
            </div>

        </>
    )

}