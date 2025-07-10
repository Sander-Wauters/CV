import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  sx?: SxProps<Theme>;
}

export const Projects = ({ sx }: ProjectsProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.projects")}</Typography>
    </Box>
  );
};
