import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ExperienceProps {
  sx?: SxProps<Theme>;
}

export const Experience = ({ sx }: ExperienceProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.experience")}</Typography>
    </Box>
  );
};
