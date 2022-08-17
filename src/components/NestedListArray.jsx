import React from 'react'
import { Table } from 'react-bootstrap';
function NestedListArray() {

    const users = [

        { name: "Satish", email: "satish@email.com", address: [{ city: "Noida", pin: "201301" }, { city: "Ghaziabad", pin: "201300" }, { city: "Delhi", pin: "110096" }] },
        { name: "Dhanesh", email: "dhan@email.com", address: [{ city: "Noida", pin: "201301" }, { city: "Ghaziabad", pin: "201300" }, { city: "Delhi", pin: "110096" }] },

        { name: "Ravin", email: "ravin@email.com", address: [{ city: "Noida", pin: "201301" }, { city: "Ghaziabad", pin: "201300" }, { city: "Delhi", pin: "110096" }] }


    ];

    console.log(users);
    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>


                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1} </td>
                                <td>{item.name} </td>
                                <td>{item.email} </td>


                                <td>
                                    <Table striped bordered hover>
                                        <tbody>
                                            {item.address.map((data, i) =>


                                                <tr key={i}>
                                                    <td>{data.city}</td>
                                                    <td>{data.pin}</td>

                                                </tr>
                                            )}
                                        </tbody>
                                    </Table>
                                </td>


                            </tr>)
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default NestedListArray