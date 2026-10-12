type navParameters = {
    navItems: Array<string>;
}


function NavBar(props:navParameters){
    return(
        <nav className="bg-indigo-200">
            <ul className="flex flex-row">
                {props.navItems.map((item,index)=> <li className="p-3 hover:bg-indigo-400 cursor-pointer" key={index} id={item}>{item}</li>)}
            </ul>
        </nav>
    );
}

export default NavBar;