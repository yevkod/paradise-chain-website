import React from 'react';
import './App.css';
import { NavbarView } from './pages/navbar/NavbarView';
import { MainView } from './pages/main/MainView';
import { PartnersView } from './pages/partners/PartnersView';
import { NewEraView } from './pages/newEra/NewEraView';
import { FeaturesView } from './pages/features/FeaturesView';
import { TokenomicsView } from './pages/tokenomics/TokenomicsView';
import { TeamView } from './pages/team/TeamView';
import { RoadmapView } from './pages/Roadmap/RoadmapView';
import { FAQView } from './pages/FAQ/FAQView';
import { QuestionsView } from './pages/questions/QuestionsView';
import { FooterView } from './pages/footer/FooterView';

export const App = () => {
  return (
    <div className="App overflow-hidden">
      <NavbarView />
      <MainView />
      <PartnersView />
      <NewEraView />
      <FeaturesView />
      <TokenomicsView />
      <TeamView />
      <RoadmapView />
      <FAQView />
      <QuestionsView />
      <FooterView />
    </div>
  );
}

export default App;
