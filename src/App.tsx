import { HomePage } from "@/pages/home";
import { DestinationPage } from "@/pages/destination";
import { Layout } from "@/components/layout";
import { CrewPage } from "@/pages/crew";
import { TechnologyPage } from "@/pages/technology";

function App() {
  return (
    <Layout>
      <HomePage />
      <DestinationPage />
      <CrewPage />
      <TechnologyPage />
    </Layout>
  );
}

export default App;
