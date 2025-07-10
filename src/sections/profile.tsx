import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ProfileProps {
  sx?: SxProps<Theme>;
}

export const Profile = ({ sx }: ProfileProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.profile")}</Typography>
      <Typography>{t("paragraph.profile")}</Typography>
    </Box>
  );
};
