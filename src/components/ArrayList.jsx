import React from 'react'

function ArrayList() {
    // const name = ["Satish", "Dhanesh", "Manish", "Ravindra"];

    const info = [{ name: "Satish", phone: 123 }, { name: "Dhanesh", phone: 456 }, { name: "Jayesh", phone: 113 }]

    // name.map((item) => {
    //     return console.log("My Name is: ", item);
    // });

    // for (let i = 0; i < name.length; i++) {
    //     console.log("My Name is: ", name[i]);
    // }

    return (
        <div>
            <table border="1">
                {

                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                    </tr>

                }

                {
                    info.map((data) =>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                        </tr>
                    )
                }
            </table>


        </div>
    )
}

export default ArrayList