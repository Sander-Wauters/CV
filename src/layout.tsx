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
    <Container component="main" sx={{ mb: 2 }}>
      <Heading sx={{ my: 2 }} />
      <Stack direction="row" gap={2}>
        <Stack gap={2} sx={{ minWidth: "30%" }}>
          <Contact />
          <Divider />
          <Education />
          <Divider />
          <Projects />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack gap={2}>
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
