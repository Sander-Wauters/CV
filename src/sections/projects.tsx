import { Theme } from "@emotion/react";
import { Box, List, ListItem, Stack, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  sx?: SxProps<Theme>;
}

export const Projects = ({ sx }: ProjectsProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.projects")}</Typography>
      <List>
        <ListItem>
          <Stack>
            <Typography variant="h6">{t("label.thisCV")}</Typography>
            <Typography>{t("paragraph.thisCV")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack>
            <Typography variant="h6">{t("label.cmses")}</Typography>
            <Typography>{t("paragraph.cmses")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack>
            <Typography variant="h6">
              {t("label.editorConfiguration")}
            </Typography>
            <Typography>{t("paragraph.editorConfiguration")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack>
            <Typography variant="h6">{t("label.gameEngine")}</Typography>
            <Typography>{t("paragraph.gameEngine")}</Typography>
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
};
