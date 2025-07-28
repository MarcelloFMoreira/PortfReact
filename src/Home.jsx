import Perfil from "./assets/FotoPerfil.png"
import iconDownload from "./assets/iconDownload.png"
import "./home.css"


function Home() {
    return (
            <>
            <div className="ContainerTotal">
                <div className="ContainerEsquerda">               
                    <h1>Olá! eu sou o Marcello,</h1>
                    <h2>Desenvolvedor full stack</h2>
                    <button id="bt1">Projetos</button>
                    <button id="bt2"> <img src={iconDownload}/>Dowload CV</button>
                </div>
                <div className="ContainerDireita">
                    <img src={Perfil}  />
                </div>
            </div>
                
            </>
    )
}

export default Home