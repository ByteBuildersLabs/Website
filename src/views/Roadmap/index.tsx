import RoadmapStep from '../../components/RoadmapStep';
import RoadmapMonth from '../../components/RoadmapMonth';
import RoadmapTeam from '../../components/RoadmapTeam';
import Footer from '../../components/Footer';
import './main.css';

function Roadmap() {
  return (
    <div className="roadmap">
      <div className="section-title title-style-two text-center mb-60">
        <span>Byte Builders Labs</span>
        <h2>Byte <span>Beasts</span></h2>
      </div>
      <RoadmapStep />
      <RoadmapTeam />
      <div className="section-title title-style-two text-center mb-60">
        <h2>Roadmap <span className="d-block">& Updates</span></h2>
      </div>
      <RoadmapMonth
        completed={true}
        title="July 2024"
        title2="Project Kickoff and Initial Setup - completed"
        subtitle1="Team Assembly: Finalize the core development team and roles"
        subtitle2="Project Planning: Define project scope, milestones, and deliverables"
        subtitle3="Tech Stack Finalization: Confirm the use of Unity for game development and Starknet for blockchain integration"
        subtitle4=" Initial Research and Prototyping: Begin prototyping key game mechanics, including NFT integration and basic battle mechanics"
      />
      <RoadmapMonth
        completed={false}
        title="August 2024"
        title2="Create First NFTs Byte Beasts Collection - In Progress"
        subtitle1="NFT Integration: Develop and test the NFT creation and trading system on Starknet"
        subtitle2="Byte Beasts Design: Create the initial set of Byte Beasts, focusing on the five elemental types"
        subtitle3="Art and Graphics: Begin the development of game assets and visual design"
        subtitle4="Team Assembly Mechanism: Implement the feature for players to assemble teams of Byte Beasts"
      />
      <RoadmapMonth
        completed={false}
        title="September 2024"
        title2="Advanced Game Mechanics"
        subtitle1="Map Lobby Development: Create and test the navigable maps that serve as lobbies"
        subtitle2="Expanded Byte Beasts: Design and integrate more Byte Beasts with unique abilities and stats"
        subtitle3=""
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="October 2024"
        title2="User Interface and Experience"
        subtitle1="Basic Battle System: Implement the turn-based battle system"
        subtitle2="UI/UX Design: Develop the user interface and enhance the user experience"
        subtitle3="Beta Testing Preparation: Prepare for internal beta testing, focusing on core mechanics and user feedback"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="November 2024"
        title2="In-game Economy and Multiplayer Prototype"
        subtitle1="Economy Design: Define the in-game economy, including ByteBeast trading and item transactions (Marketplace for beasts)"
        subtitle2="Multiplayer Battles: Develop and test the basic multiplayer battle functionality"
        subtitle3="Lore and World-building: Start writing the backstory and lore for the Digital Nexus"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="December 2024"
        title2="Beta Testing and Feedback"
        subtitle1="Internal Beta Launch: Release the game for internal beta testing"
        subtitle2="Feedback Collection: Gather feedback from testers and identify areas for improvement"
        subtitle3="Bug Fixes and Refinements: Address bugs and refine game mechanics based on beta feedback"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="January 2025"
        title2="Feature Enhancements and Lore Expansion"
        subtitle1="Feature Polishing: Enhance and polish existing features based on beta feedback"
        subtitle2="Lore Development: Expand the lore and world-building elements"
        subtitle3="Advanced Battle Mechanics: Introduce advanced battle mechanics and strategies"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="February 2025"
        title2="Marketplace and Economy Finalization"
        subtitle1="Marketplace Integration: Finalize and test the NFT marketplace integration on Starknet"
        subtitle2="Economy Balancing: Balance the in-game economy for fair trading and progression"
        subtitle3="User Tutorials: Develop tutorials and guides for new players"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="March 2025"
        title2="Additional Content and Map Expansion"
        subtitle1="Content Expansion: Add new Byte Beasts, items, and abilities"
        subtitle2="Map Expansion: Develop and integrate additional maps and lobbies"
        subtitle3="Multiplayer Enhancements: Improve real-time multiplayer interactions"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="April 2025"
        title2="Pre-launch Testing and Optimization"
        subtitle1="Extensive Testing: Conduct extensive testing to ensure game stability and performance"
        subtitle2="Optimization: Optimize the game for mobile platforms and various devices"
        subtitle3="Final Adjustments: Make final adjustments and tweaks based on testing feedback"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="May 2025"
        title2="Marketing and Community Building"
        subtitle1="Marketing Campaign: Launch a marketing campaign to build hype and attract players"
        subtitle2="Community Engagement: Foster community engagement through events, contests, and social media"
        subtitle3="Partnerships: Establish partnerships with influencers and other blockchain projects"
        subtitle4=""
      />
      <RoadmapMonth
        completed={false}
        title="June 2025"
        title2="Official Launch and Post-launch Support"
        subtitle1="Official Launch: Launch Byte Beasts officially on mobile platforms"
        subtitle2="Post-launch Support: Provide ongoing support, address any issues, and release regular updates"
        subtitle3="Community Feedback: Continuously gather and implement community feedback to improve the game"
        subtitle4=""
      />
      <Footer />
    </div>
  )
}

export default Roadmap;
