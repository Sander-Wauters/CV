import { Theme } from "@emotion/react";
import { Box, List, ListItem, Stack, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ExperienceProps {
  sx?: SxProps<Theme>;
}

export const Experience = ({ sx }: ExperienceProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.experience")}</Typography>
      <List>
        <ListItem>
          <Stack>
            <Typography variant="h6">
              {t("label.internship")} {t("label.codifly")} 2024-2025
            </Typography>
            <Typography>{t("paragraph.internship")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack>
            <Typography variant="h6">
              {t("label.woodworker")} {t("label.lohisse")} 2019-2020
              <Typography>{t("paragraph.woodworker")}</Typography>
            </Typography>
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
};
