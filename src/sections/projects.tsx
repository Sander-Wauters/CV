import { Theme } from "@emotion/react";
import { Box, List, ListItem, SxProps, Typography } from "@mui/material";
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
          <Box>
            <Typography variant="h6">{t("label.webApps")}</Typography>
            <Typography sx={{ pt: 0.5 }}>{t("paragraph.webApps")}</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box>
            <Typography variant="h6">
              {t("label.editorConfiguration")}
            </Typography>
            <Typography sx={{ pt: 0.5 }}>
              {t("paragraph.editorConfiguration")}
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box>
            <Typography variant="h6">{t("label.gameEngine")}</Typography>
            <Typography sx={{ pt: 0.5 }}>
              {t("paragraph.gameEngine")}
            </Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};
