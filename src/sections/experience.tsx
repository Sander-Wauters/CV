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
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">
                {t("label.internship")} - {t("label.codifly")}
              </Typography>
              <Typography variant="h6">2024-2025</Typography>
            </Stack>
            <Typography>{t("paragraph.internship")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">
                {t("label.woodworker")} - {t("label.lohisse")}
              </Typography>
              <Typography variant="h6">2019-2020</Typography>
            </Stack>
            <Typography>{t("paragraph.woodworker")}</Typography>
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
};
