import PageIntro from "../../PageIntro";
import IntroText from "./IntroText";
import PostList from "./PostList";

const Home = () => {
  return (
    <main>
      <IntroText />
      <PageIntro title="Browse our posts" paragraph="Welcome to Code Stack, this is the wiki-page for
          front-end development. Browse all our post
          below or try the search filter." src="images/codeDrawing.png" height="200px" alt="Illustration" />
      <PostList />
    </main>
  );
};

export default Home;