type itemParams = {
  menu_items: Array<string>
}

function CreateMenu(items: itemParams){
  const menu = items.menu_items.map((item,index)=> <li className="m-3" id={item+index.toString()}>{item}</li>);
  return (
    <ul>
      {menu}
    </ul>
  )
}

export default CreateMenu;