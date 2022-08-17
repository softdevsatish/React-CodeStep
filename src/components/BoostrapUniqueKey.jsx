import React from 'react'
import { Table } from 'react-bootstrap';
function BoostrapUniqueKey() {
    const users = [{ name: "Satish", phone: 123 }, { name: "Dhanesh", phone: 456 }, { name: "Jayesh", phone: 113 }]
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                    </tr>
                    {

                        users.map((item, i) =>
                            item.phone === 456
                                ? <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                </tr>
                                : null

                        )
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default BoostrapUniqueKey