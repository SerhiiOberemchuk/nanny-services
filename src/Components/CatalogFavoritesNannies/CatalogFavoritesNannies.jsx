import React from "react";
import Container from "../CommonComponents/Container/Container";
import ListSection from "../NanniesList/ListSection/ListSection";
import { useSelector } from "react-redux";
import { selectorFavoritesNannies } from "../../redux/nannies/selectors";

function CatalogFavoritesNannies() {
  const nanniesCatalog = useSelector(selectorFavoritesNannies);
  return (
    <Container>
      <ListSection nanniesCatalog={nanniesCatalog} />
    </Container>
  );
}

export default CatalogFavoritesNannies;
