import {Link} from "react-router-dom";

function Home() {
    return (
       <div>
       <Link to={"/grid"}>View Grid</Link></div>
    );
}

export default Home;
