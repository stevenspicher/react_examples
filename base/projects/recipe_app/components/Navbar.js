const Navbar = ({title, image}) => {

    return (
        <nav className="navbar">
            <h1>Recipes: {title} </h1>   
            <img className="navbarimg" src={image}/> 
        </nav>
    );
}

export default Navbar;