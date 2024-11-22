import { useState } from 'react';

import peoplesData from './data';
import ReviewList from './components/reviewComp/ReviewList';

const App = () => {
  const [people] = useState(peoplesData);
  return (
    <main>
      <ReviewList people={people} />
    </main>
  );
};
export default App;
