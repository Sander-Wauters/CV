import { Container, Stack, Divider } from "@mui/material";
import { Heading } from "./sections/heading";
import { Profile } from "./sections/profile";
import { Contact } from "./sections/contact";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";

const gap = 2 as const;
const leftColumn = "60%" as const;

export const Layout = () => {
  return (
    <Container
      component="main"
      sx={(theme) => ({
        py: gap,
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Stack direction="row" gap={gap}>
        <Heading sx={{ minWidth: leftColumn }} />
        <Divider orientation="vertical" flexItem />
        <Contact sx={{ pb: gap }} />
      </Stack>
      <Divider />
      <Stack direction="row" gap={gap}>
        <Stack gap={gap} sx={{ minWidth: leftColumn, pt: gap }}>
          <Profile />
          <Divider />
          <Experience />
          <Divider />
          <Skills gap={gap} />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack gap={gap} sx={{ pt: gap }}>
          <Education />
          <Divider />
          <Projects />
        </Stack>
      </Stack>
    </Container>
  );
};
