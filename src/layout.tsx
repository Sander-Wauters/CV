import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Layout = () => {
  const { t } = useTranslation();

  return <Title>{t("title.name")}</Title>;
};
