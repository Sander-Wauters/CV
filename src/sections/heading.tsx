import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface HeadingProps {
  sx?: SxProps<Theme>;
}

export const Heading = ({ sx }: HeadingProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h2">{t("title.name")}</Typography>
      <Typography variant="h4" sx={{ pb: 1.5 }}>
        {t("title.job")}
      </Typography>
    </Box>
  );
};
