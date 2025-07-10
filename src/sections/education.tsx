import { Theme } from "@emotion/react";
import { Box, List, ListItem, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface EducationProps {
  sx?: SxProps<Theme>;
}

export const Education = ({ sx }: EducationProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.education")}</Typography>
      <List>
        <ListItem>
          <Typography variant="h6">
            {t("label.appliedInformatics")} {t("label.hogent")} 2022-2026
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">
            {t("label.networkAdministrator")} {t("label.syntra")} 2021-2022
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};
