import logo from "@/public/KareemEldeen Logo.png";

function ImageView(){
    return (
        <img className="w-screen h-screen" src={logo.src} alt="Logo Image" />
    );
}

export default ImageView;
