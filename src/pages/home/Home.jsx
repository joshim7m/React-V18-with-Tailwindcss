import Hero from './Hero'
import Cards from "./Cards";
import Jobs from '../job/Jobs'
import ViewAll from './ViewAll';

const Home = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <Cards />
      <Jobs isHome={true} />
      <ViewAll />
    </>
  );
};

export default Home;
