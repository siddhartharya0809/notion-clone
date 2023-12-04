import Navbar from './components/Navbar'
import LandingText from './components/LandingText'
import MyFeatures from './components/Features'
import TopCompaniesComponent from './components/Companies'
import ToolConsolidation from './components/integration'
import DashboardComponent from './components/Dashboard'
import InfoComponent from './components/GridComponent'
import TeamComponent from './components/NotionTeams'
import CommunityStats from './components/CommunityStats'
import CommunityMeetup from './components/CommunityMeetups'
import HowToNotion from "./components/HowToNotion.jsx"
import DownloadNotion from "./components/downloadNotion.jsx"
import Footer from "./components/Footer.jsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingText />
      <MyFeatures />
      <TopCompaniesComponent />
      <ToolConsolidation />
      <DashboardComponent />
      <InfoComponent />
      <TeamComponent />
      <CommunityStats />
      <CommunityMeetup />
      <HowToNotion />
      <DownloadNotion />
      <Footer />
    </>
  )
}
