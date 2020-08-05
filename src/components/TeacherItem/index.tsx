import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/62304465?s=460&u=c46b324ef08c65a9ef9a340808accecf17037f53&v=4" alt="Daniel Vieira"/>
          <div>
          <strong>Daniel Vieira</strong>
            <span>Física</span>
          </div>
        </header>
        <p>
            Entusiasta pela fisica avançada.
            <br/><br/>
            Apaixonado sobre como as leis da fisica funcionam no universo e por experiencias.
            Já ganhou dois prêmios nobel sendo o mais nome renomado da fisica do século XXI.
            Atualmente atua gerenciando uma equipe na space-X comandando projetos para lançamento de missões ao espaço. 
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$15.000,00</strong>
            </p>
            <button>
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;