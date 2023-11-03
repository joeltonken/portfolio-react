import Image from "next/image";

import "./header.scss";

export function Header(){
    return(
        <div className="header">
        <div>
          <h1>Hi, i´m Joelton!</h1>
          <h2>Estudante</h2>
        </div>
        <Image
          src="/me.jpg"
          alt="Foto de Joelton Gomes"
          width={325}
          height={310}
          priority
        />
      </div>
    )
}