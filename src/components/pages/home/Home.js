import PageIntro from "../../common/PageIntro";
import IntroText from "./IntroText";
import PostList from "./PostList";

const Home = () => {
  return (
    <>
      <IntroText />
      <PageIntro title="Browse our posts" src="images/codeDrawing.png" height="200px" alt="Illustration">
        Welcome to Code Stack, this is the wiki-page for
        front-end development. Browse all our post
        below or try the search filter.
      </PageIntro>
      <PostList />
    </>
  );
};

export default Home;