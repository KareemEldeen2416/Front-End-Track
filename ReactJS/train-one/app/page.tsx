import NavBar from "@/components/NavBar";
import Image from "@/components/ImageView";
import About from "@/components/About";
import TicTacToe from "@/components/TicTacToe";


export default function Home(){
  const items = ["Home","About","Contact","Help","Settings"];
  return(
    <main>
      <NavBar navItems={items}/>
      <Image />
      <About />
      <TicTacToe />
    </main>
  );
}