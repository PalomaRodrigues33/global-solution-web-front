import smartwatch from '../../img/Runway 2023-11-22T20_56_43.936Z Expand Image.jpg';
import intro from '../../img/DALL·E 2023-11-22 18.15.13 - simple smart watch with a green screen .png';

import './Introducao.scss'

export default function Introducao() {

    return (
        <>
            <div className="introducao">
            <img src={intro} alt="" />

                <section id="introducao">
                    <h1>MediMate Watch</h1>
                    <p>O MediMate Watch: seu aliado inteligente para o cuidado diário! Leve, intuitivo e conectado aos profissionais de saúde, garante lembretes precisos para uma administração tranquila de medicamentos. Experimente agora!</p>
                </section>
            <img id='watch' src={smartwatch} alt="smartwatch" />
            </div>
        </>
    )
}
