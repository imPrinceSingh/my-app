import { useEffect, useState } from "react";
import './Users.css'
import { Dna } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Users = () => {
    const [num, setNum] = useState(7);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const get = await fetch(
                `https://hub.dummyapis.com/employee?noofRecords=${num}&idStarts=1001`
            );
            const res = await get.json();
            setData(res);
            setLoading(false);
        };
        getData();
    }, [num]);
    const update = () => {
        setNum(num + 7);
    };

    const notify = () => {
        toast("Default Notification !");

        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_CENTER
        });

        toast.error("Error Notification !", {
            position: toast.POSITION.TOP_LEFT
        });

        toast.warn("Warning Notification !", {
            position: toast.POSITION.BOTTOM_LEFT
        });

        toast.info("Info Notification !", {
            position: toast.POSITION.BOTTOM_CENTER
        });

        toast("Custom Style Notification with css class!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });
    };

    return (
        <>
            <center><div><h2>Users </h2></div>
                <button className="btn btn-dark" onClick={update}>Fetch Users</button></center>
            <button onClick={notify}>Notify</button>
            <ToastContainer />
            <div className="users">

                {data.map((e) => {
                    return (
                        <div className="map" key={e.id}>
                            {loading ? <Dna height="120" width="120" /> : <>
                                <p>id: {e.id}</p>
                                <p>Age: {e.age}</p>
                                <p>Salary: {e.salary}</p>
                                <p>DOB: {e.dob}</p></>}
                        </div>)
                })}
            </div>
        </>
    );
};

export default Users;
