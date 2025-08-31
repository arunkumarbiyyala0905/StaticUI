import { useState } from 'react';
import { Box, Paper, Typography, Button, Grid, Avatar, TextField, IconButton } from '@mui/material';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import InsightsIcon from '@mui/icons-material/Insights';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
     ResponsiveContainer, Cell } from 'recharts';
import {  Divider } from "@mui/material";
import GileadDashboardImage from '../assets/GileadDashboardImage.png'; // Download and place a relevant image here
import AISummarizedIcon from '../assets/AISummarizedIcon.png'; // Download and place a relevant icon here
import AnalysisIcon from '../assets/AnalysisIcon.png'; // Download and place a relevant icon here
import Search from '../assets/Search.png'; // Download and place a relevant icon here
import comingSoonIcon from '../assets/comingSoonIcon.png'; // Download and place a relevant image here
import PlusIcon from '../assets/PlusIcon.png';
import ToolsIcon from '../assets/ToolsIcon.png';
import VoiceIcon from '../assets/VoiceIcon.png';
import gileadLogo from '../assets/gilead-logo.png'; // Download and place a relevant icon here
import dashboard from '../assets/dashboard.png'; // Download and place a relevant icon here
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

const chartData = [
  { name: 'Dr. Sharma', value: 18, fill: '#C8102E' },
  { name: 'Dr. Patel', value: 15, fill: '#E88C5E' },
  { name: 'Dr. Mehra', value: 11, fill: '#7AC3D1' },
  { name: 'Others', value: 7, fill: '#E5D7D7' },
];

export default function Dashboard({ showChatScreen, setShowChatScreen }) {
  const [inputValue, setInputValue] = useState('');

  // Landing Screen
  const LandingScreen = (
    <Box sx={{ background: '#fafbfc',  height: '81.64vh', width: '82.5vw', position: 'relative',}}>
  {/* First Child */}
  <Box
    sx={{
      position: 'absolute',
      left: '12%',
      top: '9.1%',
      width: '62.5%',
      height: '53.75%',
      background: '#fff',
      borderRadius: 0,
      // boxShadow: 1,
       display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // ensures all children start at left
    p: 0,
      // Place your feature cards and question cards here
    }}
  >
     <img src={GileadDashboardImage} 
     alt="Landing Visual" style={{ width: '64px', height: '64px', marginBottom: 12 }} />
       <Typography
                  sx={{
                      fontWeight: 500,
                      background: 'linear-gradient(78.7deg, #439DDF 12.52%, #4F87ED 35.44%, #9476C5 46.7%, #BC688E 51.37%, #D6645D 56.25%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontStyle: 'Medium',
                        fontSize: '20px',
                        mb:1,
                       height: '24px',
                    //   lineHeight: '28px',
                    //   letterSpacing: '0em',
                  }}//font-family: Inter;


  >
    Crafted with intelligence at its core.
  </Typography>
   <Typography  sx={{ color: '#999999', mb: 2, fontSize: '16px', fontWeight: 400,height: '20px', }}>
    Built to assist every step of the way.
  </Typography>
    {/* Feature cards and question cards */}
              <Box sx={{ display: 'flex', gap: 2, width: '100%', height: '30%', mb: 2 }}>
                  {/* Repeat this Box for each card, or use a map if you have card data */}
                  <Paper
                      sx={{
                          flex: 1,
                          p: 0,
                          background: '#FFF',
                          border: '1px solid transparent', // needs transparent first
                          borderImage: 'linear-gradient(78.7deg, #439DDF 12.52%, #4F87ED 35.44%, #9476C5 46.7%, #BC688E 51.37%, #D6645D 56.25%) 1',

                          minWidth: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '8px',
                          height: '100%',
                          borderRadius: 0,
                      }}

                      elevation={0}
                  >
                      <img src={AISummarizedIcon} alt="AI Summarized" style={{ width: 16, height: 16, marginTop: 12 }} />
                      <Typography sx={{ mt: 2, fontWeight: 500, color: '#27272A', fontSize: 10, }}>
                          AI-Summarized Insights
                      </Typography>
                  </Paper>
                  <Paper
                      sx={{
                          flex: 1,
                          p: 0,
                          background: '#FFF1F4', // Example: light pink, update to match Figma
                          minWidth: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '8px',
                          height: '100%',
                          borderRadius: 0,
                      }}
                      elevation={0}
                  >
                      <img src={AnalysisIcon} alt="Self Serve" style={{ width: 16, height: 16, marginTop: 12 }} />
                      <Typography sx={{ mt: 2, fontWeight: 500, color: '#27272A', fontSize: 10, }}>
                          Self Serve <br />Analytics
                      </Typography>
                  </Paper>
                  <Paper
                      sx={{
                          flex: 1,
                          p: 0,
                          background: '#FFF1F4', // Example: light pink, update to match Figma

                          minWidth: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '8px',
                          height: '100%',
                          borderRadius: 0,
                      }}
                      elevation={0}
                  >
                      <img src={Search} alt="Coming Soon" style={{ width: 16, height: 16, marginTop: 12 }} />
                      <Typography sx={{ mt: 2, fontWeight: 500, color: '#27272A', fontSize: 10, }}>
                          Coming Soon...
                      </Typography>
                  </Paper>
                  <Paper
                      sx={{
                          flex: 1,
                          p: 0,
                          background: '#FFF1F4', // Example: light pink, update to match Figma
                          minWidth: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '8px',
                          height: '100%',
                          borderRadius: 0,
                      }}
                      elevation={0}
                  >
                      <img src={comingSoonIcon} alt="Coming Soon" style={{ width: 16, height: 16, marginTop: 12 }} />
                      <Typography sx={{ mt: 2, fontWeight: 500, color: '#27272A', fontSize: 10 }}>
                          Coming Soon...
                      </Typography>
                  </Paper>
                  {/* ...other cards... */}
              </Box>
    <Box sx={{ display: 'flex', gap: 2, width: '100%', height:'20%' }}>
    <Paper
        sx={{
          flex: 1,
          borderRadius: 0,
          minWidth: 0,
          backgroundColor: "#F1FAFF", 
          display: "flex",
          alignItems: "center",
          paddingLeft:'8px'  // light blue
        }}
        elevation={0}
      >
        <Typography sx={{ fontSize: 10, color: "#27272A" }}>
          Which HCPs should I prioritize to maximize my IC <br/>attainment?
        </Typography>
      </Paper>
         <Paper
        sx={{
          flex: 1,
          borderRadius: 0,
          minWidth: 0,
          backgroundColor: "#F7F1FF",
          display: "flex",
          alignItems: "center", 
          paddingLeft:'8px' // light violet
        }}
        elevation={0}
      >
        <Typography sx={{ fontSize: 10, color: "#27272A" }}>
          If the top 3 doctors underperform this quarter, how will it <br/> affect my
          IC attainment?
        </Typography>
      </Paper>
  </Box>
  </Box>

  {/* Second Child */}
  <Box
    sx={{
      position: 'absolute',
      left: '12%',
      top: '75%',
      width: '62.5%',
      height: '25%',
      //background: 'linear-gradient(90deg, #7AC3D1 0%, #F8BBD0 100%)',
      background: 'linear-gradient(90deg, #51BCCC 0%, #B28ECE 52.88%, #FC79A5 100%)',

      borderRadius: 4,
      boxShadow: 2,
       display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    position:'relative'
      // Place your chat input here
    }}
  >
    <img src={PlusIcon} 
     alt="Landing Visual" style={{ width: '14px', height: '14px',position:'absolute',left:'20px',top:'12px' }} />
      <Box
    sx={{
      background: "#fff",
      borderRadius: 3,
      p: 2,
      display: "flex",
      flexDirection:'column',
      justifyContent:'space-between',
    //   alignItems: "center",
      gap: 2,
      mb: 0.25, 
      width: '99.3%',
      height: '76%',// small gap at bottom
    }}
  >
    <TextField
      variant="standard"
      placeholder="Ask me Anything"
      InputProps={{ disableUnderline: true ,
        sx:{ fontSize: 14, fontWeight:400,  color:'#27272A', "& .MuiInputBase-input::placeholder"
            :{color:'#27272A', opacity:1}},
      }}
      sx={{ flex: 1, alignSelf: 'flex-start', 
        }}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && inputValue.trim()) setShowChatScreen(true);
      }}
    />
    <Box sx={{alignSelf:'flex-end',}}>
                      <Button
                          variant="outlined"
                          sx={{
                              borderRadius: 0, width: '96px', height: '40px',
                              color: '#999999', mr: 1, textTransform: 'none',
                               border: '1px solid #D2D2D2', gap:0.5
                          }}
                      ><img src={ToolsIcon}
                          alt="ToolsIcon"
                          style={{ width: '16px', height: '16px', }} />
                          Tools
                      </Button>
    <Button
      variant="outlined"
      sx={{ borderRadius: 0, width:'96px', height:'40px',  color:'#999999',
         textTransform:'none', border:'1px solid #D2D2D2', gap:0.5 }}
    ><img src={VoiceIcon} 
     alt="VoiceIcon" 
     style={{ width: '16px', height: '16px',  }} />
      Voice
    </Button>

    <IconButton
      color="primary"
      sx={{
        background: "#C8102E",
        borderRadius:0,
        color: "#fff",
        ml: 1,
        "&:hover": { background: "#A00E25" },
      }}
      onClick={() => inputValue.trim() && setShowChatScreen(true)}
    >
      <ArrowUpwardIcon />
    </IconButton>
    </Box>
    
  </Box>
  </Box>
</Box>
    // <Box sx={{ background: '#fafbfc',  height: '81.64vh', width: '82.5vw' }}>
    //   {/* Logo and Title */}
    //   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        
    //     <Typography variant="h5" sx={{ fontWeight: 600, background: 'linear-gradient(90deg, #3B82F6, #F43F5E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 1 }}>
    //       Crafted with intelligence at its core.
    //     </Typography>
    //     <Typography variant="body1" sx={{ color: '#757575' }}>
    //       Built to assist every step of the way.
    //     </Typography>
    //   </Box>

    //   {/* Feature Cards */}
    //   <Grid container spacing={2} sx={{ mb: 2 }}>
    //     <Grid item xs={12} sm={6} md={3}>
    //       <Paper elevation={0} sx={{ p: 2, border: '1px solid #E0E0E0', borderRadius: 2, minHeight: 100 }}>
    //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    //           <InsightsIcon sx={{ color: '#3B82F6', mr: 1 }} />
    //           <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>AI-Summarized Insights</Typography>
    //         </Box>
    //         <Typography variant="body2" sx={{ color: '#757575' }}>Insights</Typography>
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={3}>
    //       <Paper elevation={0} sx={{ p: 2, background: '#FFF5F7', borderRadius: 2, minHeight: 100 }}>
    //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    //           <InsertChartOutlinedIcon sx={{ color: '#F43F5E', mr: 1 }} />
    //           <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Self Serve Analytics</Typography>
    //         </Box>
    //         <Typography variant="body2" sx={{ color: '#757575' }}>Analytics</Typography>
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={3}>
    //       <Paper elevation={0} sx={{ p: 2, background: '#FFF5F7', borderRadius: 2, minHeight: 100 }}>
    //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    //           <ChatBubbleOutlineIcon sx={{ color: '#F43F5E', mr: 1 }} />
    //           <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Coming Soon...</Typography>
    //         </Box>
    //         <Typography variant="body2" sx={{ color: '#757575' }}>Coming Soon...</Typography>
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={3}>
    //       <Paper elevation={0} sx={{ p: 2, background: '#FFF5F7', borderRadius: 2, minHeight: 100 }}>
    //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    //           <DataObjectIcon sx={{ color: '#F43F5E', mr: 1 }} />
    //           <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Coming Soon...</Typography>
    //         </Box>
    //         <Typography variant="body2" sx={{ color: '#757575' }}>Coming Soon...</Typography>
    //       </Paper>
    //     </Grid>
    //   </Grid>

    //   {/* Question Cards */}
    //   <Grid container spacing={2} sx={{ mb: 4 }}>
    //     <Grid item xs={12} md={6}>
    //       <Paper elevation={0} sx={{ p: 2, background: 'linear-gradient(90deg, #E0F2FE 0%, #F1F5F9 100%)', borderRadius: 2 }}>
    //         <Typography variant="body2" sx={{ color: '#222' }}>
    //           Which HCPs should I prioritize to maximize my IC attainment?
    //         </Typography>
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={12} md={6}>
    //       <Paper elevation={0} sx={{ p: 2, background: 'linear-gradient(90deg, #F3E8FF 0%, #F1F5F9 100%)', borderRadius: 2 }}>
    //         <Typography variant="body2" sx={{ color: '#222' }}>
    //           If the top 3 doctors underperform this quarter, how will it affect my IC attainment?
    //         </Typography>
    //       </Paper>
    //     </Grid>
    //   </Grid>

    //   {/* Chat Input */}
    //   <Box sx={{
    //     width: 600,
    //     maxWidth: '100%',
    //     mx: 'auto',
    //     background: 'linear-gradient(90deg, #7AC3D1 0%, #F8BBD0 100%)',
    //     borderRadius: 4,
    //     p: 2,
    //     boxShadow: 2,
    //   }}>
    //     <Box sx={{
    //       background: '#fff',
    //       borderRadius: 3,
    //       p: 2,
    //       display: 'flex',
    //       alignItems: 'center',
    //       gap: 2,
    //     }}>
    //       <TextField
    //         variant="standard"
    //         placeholder="Ask me Anything"
    //         InputProps={{ disableUnderline: true }}
    //         sx={{ flex: 1, fontSize: 16 }}
    //         value={inputValue}
    //         onChange={e => setInputValue(e.target.value)}
    //         onKeyDown={e => {
    //           if (e.key === 'Enter' && inputValue.trim()) setShowChatScreen(true);
    //         }}
    //       />
    //       <Button variant="outlined" sx={{ borderRadius: 2, minWidth: 80 }}>Tools</Button>
    //       <Button variant="outlined" sx={{ borderRadius: 2, minWidth: 80 }}>Voice</Button>
    //       <IconButton
    //         color="primary"
    //         sx={{ background: '#C8102E', color: '#fff', ml: 1, '&:hover': { background: '#A00E25' } }}
    //         onClick={() => inputValue.trim() && setShowChatScreen(true)}
    //       >
    //         <ArrowUpwardIcon />
    //       </IconButton>
    //     </Box>
    //   </Box>
    // </Box>
  );

  // Chat Screen (After Question)
  const ChatScreen = (
      <Box sx={{ background: '#fafbfc', height: '81.64vh', width: '82.5vw', position: 'relative', paddingLeft: '30px' }}>
          <Paper elevation={0} sx={{ mb: 1, position: 'absolute', left: '48%', width: '46%', borderRadius: 1 }}>
              <Typography variant="caption" sx={{ color: '#666666', background: '#fff', display: 'flex', justifyContent: 'flex-end' }}>
                  2:03 PM, 20 Aug
              </Typography>
              <Typography variant="body1" sx={{ color: '#27272A', background: '#E6E6E6', fontSize: 14, fontWeight: 400, height: '4.9%', display: 'flex', alignItems: 'center', paddingLeft: 2 }}>
                  {"Which HCPs should I prioritize to maximize my IC attainment?"}
              </Typography>
          </Paper>

          <Box sx={{
              flex: 1, display: "flex", flexDirection: "column", gap: 2, position: 'absolute', left: '2%',
              top: '9%', width: '92%', height: '88%', background: '#fff', boxShadow: 1
          }}>
              <Typography variant="caption" sx={{
                  color: '#666666', background: '#fff', display: 'flex',
                  justifyContent: 'flex-start', position: 'absolute', fontSize: 14, mb: 2
              }}>
                  <img src={gileadLogo}
                      alt="Landing Visual" style={{ width: '20px', height: '20px', gap: 0.5 }} />
                  2:03 PM, 20 Aug
              </Typography>
              <Box sx={{
                  display: 'flex', gap: 2, width: '100%',height: '45%',
                  justifyContent: 'space-between', position: 'absolute', top: '24px',
              }}>
                  <Box sx={{ width: '50%',  gap: 1, display: 'flex', flexDirection: 'column', }}>
                      <Paper elevation={0} sx={{ background: '#E6FAF0', p: 2, borderRadius: 0, }}>
                          <Typography variant="subtitle2" sx={{ color: '#4CAF50', mb: 1 }}>
                              HCP Prioritization
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#222' }}>
                              Focus on Dr. Sharma, Dr. Patel, and Dr. Mehra who together account for 22% of territory potential growth and have shown high responsiveness to prior engagements. Engaging them effectively could contribute up to +8% IC uplift this quarter.
                          </Typography>
                      </Paper>
                      <img src={dashboard}
                          alt="Landing Visual" style={{ width: '100%', height: '90%', gap: 0.5 }} />
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, width: '50%', flexDirection: 'column', }}>
                      <Paper elevation={0} sx={{ p: 2, borderRadius: 0, background: '#F8F8F8', height: '348px' }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Typography variant="subtitle2" sx={{ color: '#222' }}>
                                  Top Priority HCPs for IC Impact
                              </Typography>
                              <Button variant="outlined" size="small" sx={{ borderRadius: 2, fontSize: 12, px: 2, py: 0, minWidth: 0 }}>
                                  Q3 2025
                              </Button>
                          </Box>
                          <ResponsiveContainer width="100%" height={231}>
                              <BarChart data={chartData}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                  <YAxis axisLine={false} tickLine={false} />
                                  <Tooltip />
                                  <Bar dataKey="value" radius={[8, 8, 0, 0]} >
                                      {chartData.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={entry.fill} />
                                      ))}
                                  </Bar>
                              </BarChart>
                          </ResponsiveContainer>
                      </Paper>
                      <Paper elevation={0} sx={{
                          borderRadius: 0,
                          mt: 0.5,
                          height: '44px',
                          background: 'linear-gradient(90deg, #E0E7FF 0%, #F8BBD0 100%)',
                          textAlign: 'center'
                      }}>
                          <Button sx={{ color: '#222', fontWeight: 500, textTransform: 'none' }}>
                              Build my Own View
                          </Button>
                      </Paper>

                  </Box>
              </Box>
              <Box sx={{
                  display: 'flex', gap: 2, width: '100%', height: '36px',
                  justifyContent: 'center', alignItems: 'center',
                  position: 'absolute', top: '375px', background: '#fff',
                  boxShadow: 1, borderRadius: 0, borderTop: '1px solid #D2D2D2'
              }}>
                  <Typography variant="caption" sx={{ color: '#000000', display: 'flex', alignSelf: 'center', justifyContent: 'center', }}>
                      Insights generated using IQVIA Xponent dataset with quarterly filters – verified by analytics logic.
                  </Typography>
              </Box>
              <Box sx={{
                  display: 'flex', position: 'absolute', background: '#fff',
                  boxShadow: 1, borderRadius: 0, borderTop: '1px solid #D2D2D2',
                  top: '414px', width: 'content-fit', height: '32px', alignItems: "center",
                  mt: 1,
                  px: 0.5,
              }}>

                  <IconButton size="small" disableRipple sx={{ color: "#6B7280", "&:hover": { color: "#374151", background: "transparent" } }}>
                      <ThumbUpOffAltIcon fontSize="small" />
                  </IconButton>


                  <Divider orientation="vertical" sx={{ height: 20, borderColor: "#E5E7EB" }} />
                  <IconButton size="small" disableRipple sx={{ color: "#6B7280", "&:hover": { color: "#374151", background: "transparent" } }}>
                      <ThumbDownOffAltIcon fontSize="small" />
                  </IconButton>
                  <Divider orientation="vertical" sx={{ height: 20, borderColor: "#E5E7EB" }} />
                  <IconButton size="small" disableRipple sx={{ color: "#6B7280", "&:hover": { color: "#374151", background: "transparent" } }}>
                      <ContentCopyOutlinedIcon fontSize="small" />
                  </IconButton>
                  <Divider orientation="vertical" sx={{ height: 20, borderColor: "#E5E7EB" }} />
                  <IconButton size="small" disableRipple sx={{ color: "#6B7280", "&:hover": { color: "#374151", background: "transparent" } }}>
                      <IosShareOutlinedIcon fontSize="small" />
                  </IconButton>
              </Box>
              <Box sx={{display: 'flex', gap: 0.5, width: '100%', height: '60px',
                  justifyContent: 'space-between', alignItems: 'center',
                  position: 'absolute', top: '464px', background: '#fff',
                  boxShadow: 1, borderRadius: 0, borderTop: '1px solid #D2D2D2'}}>
                  <Box
                      sx={{
                          flex: 1,
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#FDECEC",
                          borderRadius: 1,
                          px: 2,
                          textAlign: "center",
                      }}
                  >
                      <Typography variant="body2" sx={{ color: "#222" }}>
                          Which HCPs have not been called in <br /> the last 4 weeks but show high potential?
                      </Typography>
                  </Box>
                  <Box
                      sx={{
                          flex: 1,
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#FDECEC",
                          borderRadius: 1,
                          px: 2,
                          textAlign: "center",
                      }}
                  >
                      <Typography variant="body2" sx={{ color: "#222" }}>
                          What’s the correlation between my call<br /> activity and BVY growth?
                      </Typography>
                  </Box>
                  <Box
                      sx={{
                          flex: 1,
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#FDECEC",
                          borderRadius: 1,
                          px: 2,
                          textAlign: "center",
                      }}
                  >
                      <Typography variant="body2" sx={{ color: "#222" }}>
                          Which HCPs outside the top 3 show <br />the highest growth potential?
                      </Typography>
                  </Box>
              </Box>
              <Box sx={{display: 'flex',  width: '75%', height: '140px',
                  justifyContent: 'space-between', alignSelf: 'center',
                  position: 'absolute', top: '460px',
                   borderRadius: 2, background: '#D2D2D2' }}>
                  <Box
    sx={{
      position: 'absolute',
     
      width: '100%',
      height: '100%',
      //background: 'linear-gradient(90deg, #7AC3D1 0%, #F8BBD0 100%)',
      background: '#E6E6E6',

      borderRadius: 4,
      boxShadow: 2,
       display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  //  position:'relative'
      // Place your chat input here
    }}
  >
    <img src={PlusIcon} 
     alt="Landing Visual" style={{ width: '14px', height: '14px',position:'absolute',left:'20px',top:'12px' }} />
      <Box
    sx={{
      background: "#fff",
      borderRadius: 3,
      p: 2,
      display: "flex",
      flexDirection:'column',
      justifyContent:'space-between',
    //   alignItems: "center",
      gap: 2,
      mb: 0.25, 
      width: '99.3%',
      height: '76%',// small gap at bottom
    }}
  >
    <TextField
      variant="standard"
      placeholder="Ask me Anything"
      InputProps={{ disableUnderline: true ,
        sx:{ fontSize: 14, fontWeight:400,  color:'#27272A', "& .MuiInputBase-input::placeholder"
            :{color:'#27272A', opacity:1}},
      }}
      sx={{ flex: 1, alignSelf: 'flex-start', 
        }}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && inputValue.trim()) setShowChatScreen(true);
      }}
    />
    <Box sx={{alignSelf:'flex-end',}}>
                      <Button
                          variant="outlined"
                          sx={{
                              borderRadius: 0, width: '96px', height: '40px',
                              color: '#999999', mr: 1, textTransform: 'none',
                               border: '1px solid #D2D2D2', gap:0.5
                          }}
                      ><img src={ToolsIcon}
                          alt="ToolsIcon"
                          style={{ width: '16px', height: '16px', }} />
                          Tools
                      </Button>
    <Button
      variant="outlined"
      sx={{ borderRadius: 0, width:'96px', height:'40px',  color:'#999999',
         textTransform:'none', border:'1px solid #D2D2D2', gap:0.5 }}
    ><img src={VoiceIcon} 
     alt="VoiceIcon" 
     style={{ width: '16px', height: '16px',  }} />
      Voice
    </Button>

    <IconButton
      color="primary"
      sx={{
        background: "#C8102E",
        borderRadius:0,
        color: "#fff",
        ml: 1,
        "&:hover": { background: "#A00E25" },
      }}
      onClick={() => inputValue.trim() && setShowChatScreen(true)}
    >
      <ArrowUpwardIcon />
    </IconButton>
    </Box>
    
  </Box>
  </Box>
                   </Box>
          </Box>
      </Box>
  );

  return showChatScreen ? ChatScreen : LandingScreen;
}
