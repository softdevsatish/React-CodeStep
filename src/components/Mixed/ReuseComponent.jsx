import React from 'react'
import ReuseUsers from './ReuseUsers'
function ReuseComponent() {

    const users = [{ name: "Satish", phone: 123 }, { name: "Dhanesh", phone: 456 }, { name: "Jayesh", phone: 113 }]

    return (
        <div>

            {
                users.map((item, i) =>
                    <ReuseUsers data={item} />


                )
            }


        </div>
    )
}

export default ReuseComponent