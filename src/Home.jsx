import Perfil from "./assets/FotoPerfil.png"


function Home() {
    return (
            <>
                <div className="ContainerEsquerda">               
                    <h1>Olá! eu sou o Marcello,</h1>
                    <h2>Desenvolvedor full stack</h2>
                    <button>Projetos</button>
                    <button>Dowload CV</button>
                </div>
                <div className="ContainerDireita">
                    <img src={Perfil}  />
                </div>
                
            </>
    )
}

export default Home