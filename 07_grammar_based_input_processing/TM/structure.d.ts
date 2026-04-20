export interface RobotsParsed {
  "User-agent": string;
  "Allow": string[];
  "Disallow": string[];
  "Sitemap": string;
}

export function parseRobots(content: string): RobotsParsed;