import '../CSS/style.css'

function ReuseUsers(props) {
    return (
        <div >
            <span className='myspan'>{props.data.name}</span>
            <span className='myspan'>{props.data.phone}</span>

        </div>
    )
}

export default ReuseUsers