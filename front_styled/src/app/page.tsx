"use client";

import Image from "next/image";

// css modules
import styles from "./page.module.css";

// styled components
import styled from "styled-components";

// SASS

const Button = styled.button`
  height: 50px;
  width: 200px;
  margin-top: 50px;
`;

interface MeuBotaoProps {
  name: string;
  idade: number;
}

function MeuBotao(props: MeuBotaoProps) {
  function handleClick() {
    console.log("Clicou");
  }

  return <Button>Botão da {props.name}</Button>;
}

export default function Home() {
  return (
    <>
      <div className={styles["minha-div-teste"]}>Teste</div>
      <MeuBotao name="Edina" idade={10} />
    </>
  );
}
