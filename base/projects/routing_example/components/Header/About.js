import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const About = ({person}) => {
    const history = useHistory();
    console.log(history)
    return (
        <div className="sidebar">
            <p>About the site</p>
            <ul>
                <li><Link to='/about/news'>News</Link></li>
                <li><Link to='/about/contact'>Contact</Link></li>

                {/* <button onClick={() => history.push('/') } >Go to home</button> */}
                
              
            </ul>
        </div>

    )
}

export default About