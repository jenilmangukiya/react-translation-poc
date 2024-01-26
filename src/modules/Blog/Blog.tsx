import { useTranslation } from "react-i18next";
import { FeaturedPost, Footer, Header, MainFeaturedPost } from "./components";
import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const Blog = () => {
  const defaultTheme = createTheme();
  const { t } = useTranslation();

  const sections = [
    { title: t("menuitem.technology"), url: "#" },
    { title: t("menuitem.design"), url: "#" },
    { title: t("menuitem.culture"), url: "#" },
    { title: t("menuitem.business"), url: "#" },
    { title: t("menuitem.politics"), url: "#" },
    { title: t("menuitem.opinion"), url: "#" },
    { title: t("menuitem.science"), url: "#" },
    { title: t("menuitem.health"), url: "#" },
    { title: t("menuitem.style"), url: "#" },
    { title: t("menuitem.travel"), url: "#" },
  ];

  const mainFeaturedPost = {
    title: t("main_featured_post.title"),
    description: t("main_featured_post.description"),
    image: "https://source.unsplash.com/random?wallpapers",
    imageText: t("main_featured_post.imageText"),
    linkText: t("main_featured_post.linkText"),
  };

  // Note: Most of the time this things are coming from backend so we can not do translation using this method at that time
  const featuredPosts = [
    {
      title: t("featured_post.post1.title"),
      date: "Nov 12",
      description: t("featured_post.post1.description"),
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: t("featured_post.post1.imageLabel"),
    },
    {
      title: t("featured_post.post2.title"),
      date: "Nov 11",
      description: t("featured_post.post2.description"),
      image: "https://source.unsplash.com/random?wallpapers",
      imageLabel: t("featured_post.post2.imageLabel"),
    },
  ];

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="ReactJs Translation POC" sections={sections} />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </main>
        </Container>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </ThemeProvider>
    </>
  );
};

export default Blog;
