import homeContent from '../content/home.json';
import HomePage from '../components/HomePage';

export default function Page() {
  return <HomePage content={homeContent} />;
}
