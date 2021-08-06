
import { Link } from "react-router-dom";
export default function ListUser(props) {

    return (
        <div>

            <hr />
            <div className="table-responsive">
                
                <table className="table table-dark table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">User name</th>
                            <th scope="col" >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dataUser.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => props.onRemoveUser(item.id)}

                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
}