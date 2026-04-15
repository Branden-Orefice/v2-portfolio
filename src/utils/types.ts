export type ProjectValues = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  featured: boolean;
  link: string;
};

export interface MarqueeColumnProps {
  items: string[];
  reverse?: boolean;
  index?: number;
}

export interface ReelProps {
  items: string[];
  spinning: boolean;
  result: string | undefined;
  spinDuration: number;
  reelIndex: number;
}
