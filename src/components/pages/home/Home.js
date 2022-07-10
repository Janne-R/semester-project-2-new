import PageIntro from "../../common/PageIntro";
import IntroText from "./IntroText";
import PostList from "./PostList";

const Home = () => {
  return (
    <>
      <IntroText />
      <PageIntro title="Browse our posts" src="images/codeDrawing.png" width="308" height="200" alt="Illustration of browsing posts">
        Welcome to Code Stack, this is the wiki-page for
        front-end development. Browse all our posts
        below or try the search filter.
      </PageIntro>
      <PostList />
    </>
  );
};

export default Home;