import logo1 from '../../img/DALL·E 2023-11-22 18.22.17 - An old man using a simple smart watch in his room .png';
import logo2 from '../../img/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg';
import logo3 from '../../img/wearable-technology-seniors.jpg';

import './Vantagens.scss'

export default function Vantagens() {

    return (
        <>
            <div className="vantagens">
                <h2>Vantagens</h2>
                <section id="vantagens">
                    <div>
                        <img src={logo1} alt="old man using watch" />
                        <h4>Interface Intuitiva</h4>
                        <p> Receba lembretes carinhosos no seu MediMate Watch, feitos sob medida para lembrá-lo do momento certo para cada medicamento ainda mostrando o nome e a dosagem. Nunca perca uma dose novamente!</p>
                    </div>
                    <div>
                        <img src={logo2} alt="medico jovem sorrindo" />
                        <h4>Conexão Direta com Cuidados de Saúde</h4>
                        <p>Mantenha-se conectado aos seus médicos de forma rápida e conveniente. Ajustes nas prescrições e horários de medicamentos são possíveis com apenas alguns cliques no seu relógio! </p>
                    </div>
                    <div>
                        <img src={logo3} alt="mulher idosa sorrindo ao olhar o relógio mediMate" />
                        <h4>Simples e Amigável para Todos</h4>
                        <p>Uma interface que fala a sua língua! Fácil de usar, o MediMate Watch foi desenvolvido pensando na sua comodidade e facilidade. Chega de complicação na hora de cuidar da saúde!</p>
                    </div>
                </section>
            </div>
        </>
    )
}
