import { Theme } from "@emotion/react";
import {
  GitHub,
  LocationOnOutlined,
  MailOutline,
  Smartphone,
} from "@mui/icons-material";
import { Box, List, ListItem, Stack, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ContactProps {
  sx?: SxProps<Theme>;
}

export const Contact = ({ sx }: ContactProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.contact")}</Typography>
      <List>
        <ListItem>
          <Stack direction="row" alignItems="center" gap={1}>
            <MailOutline fontSize="small" />
            <Typography>{t("label.mail")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack direction="row" alignItems="center" gap={1}>
            <Smartphone fontSize="small" />
            <Typography>{t("label.phone")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack direction="row" alignItems="center" gap={1}>
            <GitHub fontSize="small" />
            <Typography>{t("label.github")}</Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack direction="row" alignItems="center" gap={1}>
            <LocationOnOutlined fontSize="small" />
            <Typography>{t("label.location")}</Typography>
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
};
