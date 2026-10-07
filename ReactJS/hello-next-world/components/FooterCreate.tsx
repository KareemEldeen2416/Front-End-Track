type footerParams = {
  text : string; 
  subText? : string //Question mark to make it optional 

}

function FooterCreate({text,subText}:footerParams){
  return(
    <footer style = {{color:"red",fontSize:"40px",textAlign:"center",backgroundColor:"gray", width:"100%"}}>{text}</footer>
  )
}

export default FooterCreate;