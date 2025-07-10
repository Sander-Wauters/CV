import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SkillsProps {
  sx?: SxProps<Theme>;
}

export const Skills = ({ sx }: SkillsProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.skills")}</Typography>
    </Box>
  );
};
