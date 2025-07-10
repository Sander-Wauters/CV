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
          {programmingLanguages.map((value) => (
            <Typography key={value}>{value}</Typography>
          ))}
        </SkillsSection>
        <SkillsSection title={t("label.frameworks")}>
          {frameworks.map((value) => (
            <Typography key={value}>{value}</Typography>
          ))}
        </SkillsSection>
        <SkillsSection title={t("label.databases")}>
          {databases.map((value) => (
            <Typography key={value}>{value}</Typography>
          ))}
        </SkillsSection>
        <SkillsSection title={t("label.tools")}>
          {tools.map((value) => (
            <Typography key={value}>{value}</Typography>
          ))}
        </SkillsSection>
        <SkillsSection title={t("label.languages")}>
          {languages.map((value) => (
            <Typography key={value}>{t(`label.${value}`)}</Typography>
          ))}
        </SkillsSection>
      </Stack>
    </Box>
  );
};
