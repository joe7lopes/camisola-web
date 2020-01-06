import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./common/ProductCard";

const camisolas = () => {
  return [1, 2, 3, 4].map((e, index) => <ProductCard key={index} />);
};

const equipamentos = () => {
  return [1, 2, 3, 4].map((e, index) => <ProductCard key={index} />);
};

const equipamentosCrianca = () => {
  return [1, 2, 3, 4].map((e, index) => <ProductCard key={index} />);
};

const ClubPage = ({ pageName }) => {
  return (
    <div>
      <div>{pageName}</div>
      <h3>Camisolas</h3>
      <Row>{camisolas()}</Row>
      <h3>Fatos de treino</h3>
      <Row>{equipamentos()}</Row>
      <h3>Equipamentos de Crianca</h3>
      <Row>{equipamentosCrianca()}</Row>
    </div>
  );
};

export default ClubPage;
