import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ContactProps {
  sx?: SxProps<Theme>;
}

export const Contact = ({ sx }: ContactProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.contact")}</Typography>
    </Box>
  );
};
