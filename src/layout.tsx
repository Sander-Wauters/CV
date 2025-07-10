import { Box, Container, Divider, Stack } from "@mui/material";
import { Heading } from "./sections/heading";
import { Profile } from "./sections/profile";
import { Contact } from "./sections/contact";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";

export const Layout = () => {
  return (
    <Container component="main">
      <Heading />
      <Stack direction="row" gap={2}>
        <Box>
          <Contact />
          <Divider />
          <Education />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Profile />
          <Divider />
          <Experience />
          <Divider />
          <Skills />
        </Box>
      </Stack>
    </Container>
  );
};
