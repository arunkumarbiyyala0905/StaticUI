import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { LandingScreenHeader, ChattingScreenHeader } from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [showChatScreen, setShowChatScreen] = useState(false);

  return (
    <div style={{ display: 'flex',
  height: '100vh',
  width: '100vw',background: '#fff' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {showChatScreen ? <ChattingScreenHeader /> : <LandingScreenHeader />}
        <div style={{flex:1,overflow:'auto'}}><Dashboard showChatScreen={showChatScreen} setShowChatScreen={setShowChatScreen} /></div>
      </div>
    </div>
  );
}

export default App;