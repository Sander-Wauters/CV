import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface EducationProps {
  sx?: SxProps<Theme>;
}

export const Education = ({ sx }: EducationProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.education")}</Typography>
    </Box>
  );
};
