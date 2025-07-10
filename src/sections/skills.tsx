import { Theme } from "@emotion/react";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const programmingLanguages = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "GraphQL",
  "C",
  "C++",
  "C#",
  "Blazor",
  "Java",
  "Kotlin",
  "Lua",
  "Python",
] as const;
const frameworks = [
  "React",
  "Sequelize",
  ".NET",
  "Jetpack Compose",
  "DirectX 12",
  "JavaFX",
] as const;
const databases = ["PostgreSQL", "MySQL", "Microsoft SQL Server"] as const;
const tools = ["Git", "Docker", "Hyper-V"] as const;
const languages = ["dutch", "english"] as const;

interface SkillsSection {
  title: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const SkillsSection = ({ title, sx, children }: SkillsSection) => {
  return (
    <Box sx={sx}>
      <Typography variant="h6">{title}</Typography>
      <Stack direction="row" gap={1} flexWrap="wrap">
        {children}
      </Stack>
    </Box>
  );
};

interface SkillsProps {
  sx?: SxProps<Theme>;
}

export const Skills = ({ sx }: SkillsProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.skills")}</Typography>
      <Stack gap={1}>
        <SkillsSection title={t("label.programmingLanguages")}>
          <Typography>
            {programmingLanguages.reduce(
              (acc, val, i) => `${acc}${i > 0 ? " | " : ""}${val}`,
              "",
            )}
          </Typography>
        </SkillsSection>
        <SkillsSection title={t("label.frameworks")}>
          <Typography>
            {frameworks.reduce(
              (acc, val, i) => `${acc}${i > 0 ? " | " : ""}${val}`,
              "",
            )}
          </Typography>
        </SkillsSection>
        <SkillsSection title={t("label.databases")}>
          <Typography>
            {databases.reduce(
              (acc, val, i) => `${acc}${i > 0 ? " | " : ""}${val}`,
              "",
            )}
          </Typography>
        </SkillsSection>
        <SkillsSection title={t("label.tools")}>
          <Typography>
            {tools.reduce(
              (acc, val, i) => `${acc}${i > 0 ? " | " : ""}${val}`,
              "",
            )}
          </Typography>
        </SkillsSection>
        <SkillsSection title={t("label.languages")}>
          <Typography>
            {languages.reduce(
              (acc, val, i) =>
                `${acc}${i > 0 ? " | " : ""}${t(`label.${val}`)}`,
              "",
            )}
          </Typography>
        </SkillsSection>
      </Stack>
    </Box>
  );
};
