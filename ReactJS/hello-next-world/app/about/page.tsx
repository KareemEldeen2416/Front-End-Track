import Home from "./components/Home";

function About(){
    return(
        <main>
            <h1 style = {{color:"indigo",fontSize:"40px"}}>About Us</h1>
            <p className={"text-indigo-200"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore nihil corrupti sed sint similique culpa. Asperiores illum vel incidunt quas consequuntur similique natus id nisi accusamus velit vero, tempore atque culpa dolore soluta tenetur voluptate dicta ducimus aliquid ipsum.</p>
            <Home />
        </main>
        
    );
}

export default About;