export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  projectDescription: string;
  acreage?: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  beforeImage?: string;
  afterImage?: string;
}

export const services: Service[] = [
  {
    id: 'debris-removal',
    name: 'Debris Removal & Cleanup',
    description: 'Complete removal of fallen trees, brush, and property debris'
  },
  {
    id: 'dirt-work',
    name: 'Dirt Work & Site Prep',
    description: 'Professional site preparation and excavation services'
  },
  {
    id: 'food-plot',
    name: 'Food Plot Creation',
    description: 'Creating and maintaining wildlife food plots'
  },
  {
    id: 'gravel-driveway',
    name: 'Gravel Driveway Construction & Repair',
    description: 'New driveway installation and existing driveway repair'
  },
  {
    id: 'pond-cleanup',
    name: 'Pond & Fence Row Cleanup',
    description: 'Clearing and maintaining pond areas and fence lines'
  },
  {
    id: 'brush-hogging',
    name: 'Brush Hogging & Mulching',
    description: 'Large area brush cutting and mulching services'
  },
  {
    id: 'land-clearing',
    name: 'Land Clearing',
    description: 'Complete land clearing for development or agriculture'
  },
  {
    id: 'septic-water',
    name: 'New Septic System & Water Line Install',
    description: 'Installation of septic systems and water line infrastructure'
  },
  {
    id: 'snow-removal',
    name: 'Snow Removal',
    description: 'Seasonal snow removal services for driveways and access roads'
  }
];