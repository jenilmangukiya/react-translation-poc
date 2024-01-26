import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const [language, setLanguage] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <FormControl size="small" sx={{ width: "150px" }}>
          <InputLabel id="languageInput">Language</InputLabel>
          <Select
            labelId="languageInput"
            id="languageInput"
            value={language}
            label="Language"
            onChange={handleChange}
            size="small"
          >
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"French"}>French</MenuItem>
            <MenuItem value={"Hindi"}>Hindi</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
