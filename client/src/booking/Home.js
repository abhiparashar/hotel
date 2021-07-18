import {useSelector} from 'react-redux'
const Home = () =>{
    const state = useSelector(state => state)
    console.log(state);
    return (
        <div>
            Home
            {JSON.stringify(state)}
        </div>
    )
}
export default Home