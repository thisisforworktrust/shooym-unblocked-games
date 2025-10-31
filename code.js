/***********************************************************
 * THEME + UI SYSTEM
 ***********************************************************/
const THEMES = [
  {
    id: 'electric', name: 'Electric Pulse',
    vars:{
      '--bg':'#0A0F25','--bg-2':'#05061a','--accent-1':'#00ffff','--accent-2':'#0080ff','--glow-main':'rgba(0,220,255,0.12)',
      '--grid-primary':'rgba(0,140,255,0.06)','--grid-secondary':'rgba(0,200,255,0.03)',
      '--orb-1':'radial-gradient(circle,#00ffff 0%, rgba(0,255,255,0.05) 55%)','--orb-2':'radial-gradient(circle,#0080ff 0%, rgba(0,128,255,0.05) 55%)','--orb-3':'radial-gradient(circle,#66f2ff 0%, rgba(0,200,255,0.04) 55%)',
      '--card-bg':'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))','--card-border':'rgba(0,160,255,0.12)','--title-grad':'linear-gradient(90deg,#00ffff,#0080ff,#00ffff)','--btn-alt-bg':'linear-gradient(90deg,#00dfff55,#0080ff33)',
      '--btn-shadow':'0 8px 26px rgba(0,120,180,0.18)','--note':'#9feeffbb','--subtitle':'#bffaffcc','--footer':'#9fefff77','--contrast-text':'#eaffff','--text-color':'#eaffff'
    }, bodyClass:'theme-electric'
  },
  {
    id:'inferno', name:'Inferno Rush',
    vars:{
      '--bg':'#1A0502','--bg-2':'#160304','--accent-1':'#ff3c00','--accent-2':'#ffb347','--glow-main':'rgba(255,84,24,0.12)',
      '--grid-primary':'rgba(255,84,24,0.06)','--grid-secondary':'rgba(255,140,60,0.03)',
      '--orb-1':'radial-gradient(circle,#ff3c00 0%, rgba(255,60,0,0.06) 55%)','--orb-2':'radial-gradient(circle,#ff8a00 0%, rgba(255,138,0,0.05) 55%)','--orb-3':'radial-gradient(circle,#ffcf66 0%, rgba(255,207,102,0.04) 55%)',
      '--card-bg':'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.0))','--card-border':'rgba(255,110,50,0.12)','--title-grad':'linear-gradient(90deg,#ff3c00,#ffb347,#ff3c00)','--btn-alt-bg':'linear-gradient(90deg,#ff6a2555,#ff9a6633)',
      '--btn-shadow':'0 8px 30px rgba(180,40,20,0.16)','--note':'#ffbfa088','--subtitle':'#ffd7cacc','--footer':'#ffb07a77','--contrast-text':'#fff1ea','--text-color':'#fff1ea'
    }, bodyClass:'theme-inferno'
  },
  {
    id:'cosmic', name:'Cosmic Drift',
    vars:{
      '--bg':'#07021a','--bg-2':'#030015','--accent-1':'#a020f0','--accent-2...
