import { Theme } from "@emotion/react";
import { Box, List, ListItem, Stack, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ExperienceProps {
  gap?: number;
  sx?: SxProps<Theme>;
}

export const Experience = ({ gap, sx }: ExperienceProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.experience")}</Typography>
      <Stack gap={gap}>
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">
              {t("label.internship")} - {t("label.codifly")}
            </Typography>
            <Typography variant="h6">2024-2025</Typography>
          </Stack>
          <List>
            <ListItem>
              <Typography>{t("paragraph.internship.1")}</Typography>
            </ListItem>
            <ListItem>
              <Typography>{t("paragraph.internship.2")}</Typography>
            </ListItem>
            <ListItem>
              <Typography>{t("paragraph.internship.3")}</Typography>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6">
              {t("label.woodworker")} - {t("label.lohisse")}
            </Typography>
            <Typography variant="h6">2019-2020</Typography>
          </Stack>
          <List>
            <ListItem>
              <Typography>{t("paragraph.woodworker.1")}</Typography>
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  );
};
