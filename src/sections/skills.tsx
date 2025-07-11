import { Theme } from "@emotion/react";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const sectionWidth = "14rem" as const;

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
] as const;
const databases = ["PostgreSQL", "MySQL", "Microsoft SQL Server"] as const;
const tools = [
  "Git",
  "Docker",
  "Hyper-V",
  "Figma",
  "Jira",
  "Visual Paradigm",
  "PlantUML",
] as const;
const languages = [
  { language: "dutch", level: "nativeLanguage" },
  { language: "english", level: "nativeLanguage" },
] as const;

interface SkillsSection {
  title: string;
  children: ReactNode;
  direction?: "row" | "column";
  sx?: SxProps<Theme>;
}

const SkillsSection = ({
  title,
  direction = "row",
  sx,
  children,
}: SkillsSection) => {
  return (
    <Box sx={sx}>
      <Typography variant="h6">{title}</Typography>
      <Stack direction={direction} flexWrap="wrap">
        {children}
      </Stack>
    </Box>
  );
};

interface SkillsProps {
  gap?: number;
  sx?: SxProps<Theme>;
}

export const Skills = ({ gap, sx }: SkillsProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={sx}>
      <Typography variant="h4">{t("title.skills")}</Typography>
      <Stack gap={gap}>
        <Stack direction="row" gap={gap}>
          <SkillsSection
            title={t("label.languages")}
            direction="column"
            sx={{
              minWidth: sectionWidth,
              maxWidth: sectionWidth,
            }}
          >
            {languages.map((val) => (
              <Typography key={val.language}>
                {t(`label.${val.language}`)} - {t(`label.${val.level}`)}
              </Typography>
            ))}
          </SkillsSection>
          <SkillsSection title={t("label.tools")}>
            <Typography>
              {tools.reduce(
                (acc, val, i) => `${acc}${i > 0 ? " | " : ""}${val}`,
                "",
              )}
            </Typography>
          </SkillsSection>
        </Stack>
        <Stack direction="row" gap={gap}>
          <SkillsSection
            title={t("label.frameworks")}
            sx={{
              minWidth: sectionWidth,
              maxWidth: sectionWidth,
            }}
          >
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
        </Stack>
        <SkillsSection title={t("label.programmingLanguages")}>
          <Typography>
            {programmingLanguages.reduce(
              (acc, val, i) => `${acc}${i > 0 ? " | " : ""}${val}`,
              "",
            )}
          </Typography>
        </SkillsSection>
      </Stack>
    </Box>
  );
};
