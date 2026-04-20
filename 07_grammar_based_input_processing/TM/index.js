/**
 * 
 * 
 * @param {string} text 
 * @returns {import('./structure').RobotsTxt}
 */
function parseRobots(text) {
  const result = {
    agents: {},
    Sitemap: []
  };

  const lines = text.split(/\r?\n/);
  let currentAgent = null;

  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    if (!trimmedLine || trimmedLine.startsWith('#')) return;

    const separatorIndex = trimmedLine.indexOf(':');
    if (separatorIndex === -1) return;

    const key = trimmedLine.slice(0, separatorIndex).trim().toLowerCase();
    const value = trimmedLine.slice(separatorIndex + 1).trim();

    if (key === 'user-agent') {
      currentAgent = value.toLowerCase();
      
      if (!result.agents[currentAgent]) {
        result.agents[currentAgent] = {
          Allow: [],
          Disallow: []
        };
      }
    } else if (key === 'allow' && currentAgent) {
      if (value) result.agents[currentAgent].Allow.push(value);
    } else if (key === 'disallow' && currentAgent) {
      if (value) result.agents[currentAgent].Disallow.push(value);
    } else if (key === 'sitemap') {
      result.Sitemap.push(value);
    }
  });

  return result;
}

module.exports = parseRobots;