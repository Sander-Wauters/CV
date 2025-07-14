import { Container, Stack, Divider, Box } from "@mui/material";
import { Heading } from "./sections/heading";
import { Profile } from "./sections/profile";
import { Contact } from "./sections/contact";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";

const leftColumn = "64%" as const;

export const Layout = () => {
  return (
    <Container
      component="main"
      sx={(theme) => ({
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Box sx={{ pl: 1, pt: 1.5, pr: 2, pb: 3 }}>
        <Stack direction="row">
          <Heading
            sx={{
              minWidth: leftColumn,
              maxWidth: leftColumn,
              pr: 2,
              pb: 1.5,
            }}
          />
          <Divider orientation="vertical" flexItem />
          <Contact sx={{ pl: 2, pb: 1.5 }} />
        </Stack>
        <Divider />
        <Stack direction="row">
          <Stack
            sx={{
              minWidth: leftColumn,
              maxWidth: leftColumn,
              pr: 2,
            }}
          >
            <Profile sx={{ pt: 1, pb: 1.5 }} />
            <Divider />
            <Experience sx={{ pt: 1, pb: 1.5 }} />
            <Divider />
            <Skills sx={{ pt: 1 }} gap={1.5} />
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack sx={{ pl: 2 }}>
            <Education sx={{ pt: 1, pb: 1.5 }} />
            <Divider />
            <Projects sx={{ pt: 1 }} />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
