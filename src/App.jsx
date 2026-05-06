import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Pillars from './pages/Pillars';
import GenericPillarPage from './pages/pillars/GenericPillarPage';
import SubTopicPage from './pages/pillars/SubTopicPage';
import HabitsPage from './pages/pillars/HabitsPage';
import SleepCalculator from './pages/pillars/SleepCalculator';
import Schedule from './pages/Schedule';
import Elan from './pages/Elan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pillars" element={<Pillars />} />
        <Route path="/pillar/habits" element={<HabitsPage />} />
        <Route path="/pillar/sleep/calculator" element={<SleepCalculator />} />
        <Route path="/pillar/:pillarId" element={<GenericPillarPage />} />
        <Route path="/pillar/:pillarId/:topicId" element={<SubTopicPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/elan/*" element={<Elan />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App