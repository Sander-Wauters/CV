import { Container, Divider, Stack } from "@mui/material";
import { Heading } from "./sections/heading";
import { Profile } from "./sections/profile";
import { Contact } from "./sections/contact";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";

export const Layout = () => {
  return (
    <Container
      component="main"
      sx={{
        pb: 2,
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <Heading sx={{ py: 1 }} />
      <Stack direction="row" gap={1}>
        <Stack gap={1} sx={{ minWidth: "30%" }}>
          <Contact />
          <Divider />
          <Education />
          <Divider />
          <Projects />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack gap={1}>
          <Profile />
          <Divider />
          <Experience />
          <Divider />
          <Skills />
        </Stack>
      </Stack>
    </Container>
  );
};
