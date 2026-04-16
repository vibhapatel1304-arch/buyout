import { Package, Bid, User } from '@/types';

export const TODAY = new Date('2025-04-15');

export function daysFromToday(dateStr: string): number {
  return Math.round((new Date(dateStr).getTime() - TODAY.getTime()) / 86400000);
}

export const BIDS_DB: Record<number, Omit<Bid, 'id'>[]> = {
  1: [
    { vendor: 'American Fire Protection Group', amount: 85000, timelineDays: 10, vendorDetails: { name: 'American Fire Protection Group', rating: 4.5, pastProjects: 12, avgDelay: 1.2 }, received: '2025-03-10', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Full fire protection scope', exclusions: 'None', alternates: 'None', qualifications: 'Licensed & insured', leveled: true, preferred: true, notes: 'Primary contractor for assistant supervisor role.', rank: 1 },
  ],
  2: [
    { vendor: 'Peterson Contractors Inc.', amount: 138000, timelineDays: 14, vendorDetails: { name: 'Peterson Contractors Inc.', rating: 4.8, pastProjects: 8, avgDelay: 0.5 }, received: '2025-03-05', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Full mobilization scope', exclusions: 'None', alternates: 'None', qualifications: 'Experienced in site mobilization', leveled: true, preferred: true, notes: 'Lead mobilization contractor.', rank: 1 },
    { vendor: 'Sub Surface', amount: 160000, timelineDays: 20, vendorDetails: { name: 'Sub Surface', rating: 4.1, pastProjects: 3, avgDelay: 2.1 }, received: '2025-03-06', status: 'backup', scopeComplete: 'Complete', inclusions: 'Subsurface mobilization', exclusions: 'None', alternates: 'None', qualifications: 'Certified subsurface work', leveled: true, preferred: false, notes: 'Backup contractor.', rank: 2 },
  ],
  3: [
    { vendor: 'Willscott', amount: 22000, timelineDays: 5, vendorDetails: { name: 'Willscott', rating: 4.6, pastProjects: 45, avgDelay: 0 }, received: '2025-03-01', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Office trailer supply & setup', exclusions: 'Utilities connection', alternates: 'None', qualifications: 'National vendor', leveled: true, preferred: true, notes: 'Primary trailer vendor.', rank: 1 },
    { vendor: 'Lovelace Works', amount: 24500, timelineDays: 7, vendorDetails: { name: 'Lovelace Works', rating: 3.9, pastProjects: 6, avgDelay: 3.0 }, received: '2025-03-02', status: 'backup', scopeComplete: 'Complete', inclusions: 'Office trailer', exclusions: 'None', alternates: 'None', qualifications: 'Local vendor', leveled: true, preferred: false, notes: 'Backup option.', rank: 2 },
  ],
  4: [
    { vendor: 'Bayou State', amount: 9200, timelineDays: 2, vendorDetails: { name: 'Bayou State', rating: 4.9, pastProjects: 30, avgDelay: 0.2 }, received: '2025-03-08', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Full porta-potty service', exclusions: 'None', alternates: 'None', qualifications: 'Licensed sanitation vendor', leveled: true, preferred: true, notes: 'Only bid received.', rank: 1 },
    { vendor: 'CleanTech', amount: 10500, timelineDays: 3, vendorDetails: { name: 'CleanTech', rating: 4.2, pastProjects: 15, avgDelay: 1.0 }, received: '2025-03-09', status: 'backup', scopeComplete: 'Complete', inclusions: 'Sanitation', exclusions: 'Handwash stations', alternates: 'None', qualifications: 'Licensed sanitation vendor', leveled: true, preferred: false, notes: 'Backup.', rank: 2 },
  ],
  5: [],
  6: [
    { vendor: 'Sasquatchwaste', amount: 15000, timelineDays: 4, vendorDetails: { name: 'Sasquatchwaste', rating: 4.5, pastProjects: 12, avgDelay: 1.2 }, received: '2025-03-12', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Exterior trash container service', exclusions: 'Hazardous materials', alternates: 'None', qualifications: 'Licensed waste vendor', leveled: true, preferred: true, notes: 'Primary waste vendor.', rank: 1 },
    { vendor: 'Yellowfin Waste & Environmental LLC', amount: 18000, timelineDays: 5, vendorDetails: { name: 'Yellowfin Waste & Environmental LLC', rating: 4.0, pastProjects: 2, avgDelay: 0.0 }, received: '2025-03-13', status: 'backup', scopeComplete: 'Complete', inclusions: 'Full waste service', exclusions: 'None', alternates: 'None', qualifications: 'Environmental compliance certified', leveled: true, preferred: false, notes: 'Backup vendor.', rank: 2 },
  ],
  7: [],
  8: [
    { vendor: 'Willscott Mobile Mini', amount: 8000, timelineDays: 5, vendorDetails: { name: 'Willscott Mobile Mini', rating: 4.7, pastProjects: 50, avgDelay: 0.5 }, received: '2025-03-15', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Storage container rental', exclusions: 'None', alternates: 'None', qualifications: 'National vendor', leveled: true, preferred: true, notes: 'Standard rental agreement.', rank: 1 },
  ],
  9: [
    { vendor: 'Summit MEP Systems', amount: 1250000, timelineDays: 120, vendorDetails: { name: 'Summit MEP Systems', rating: 4.4, pastProjects: 18, avgDelay: 2.5 }, received: '2025-03-20', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Full MEP scope', exclusions: 'None', alternates: 'None', qualifications: 'Licensed MEP contractor', leveled: true, preferred: true, notes: 'Recommended for MEP work.', rank: 1 },
  ],
  10: [
    { vendor: 'CleanPro Services', amount: 35000, timelineDays: 60, vendorDetails: { name: 'CleanPro Services', rating: 4.5, pastProjects: 12, avgDelay: 1.2 }, received: '2025-03-22', status: 'recommended', scopeComplete: 'Complete', inclusions: 'Cleaning services', exclusions: 'Hazmat', alternates: 'None', qualifications: 'Insured cleaning contractor', leveled: true, preferred: true, notes: 'Primary cleaning vendor.', rank: 1 },
  ],
};

const _PACKAGES: Omit<Package, 'bids'>[] = [
  {
    id: 1, order: 1, name: 'Job Supervisor', trade: 'Boulder', pm: 'Jay Patel',
    project: 'Kimpton Plano', csi: '01 10 00',
    dueDate: '2025-05-01', onSiteDate: '2025-06-01', priority: 'High', status: 'Awarded',
    budget: 90000, lowBid: 85000, selectedVendor: 'American Fire Protection Group', awardAmount: 85000,
    risk: 'Low', longLead: false, urgent: false, overdue: false,
    bidsReceived: 1, coverageCount: 1, contractStatus: 'Executed',
    dropboxFolder: 'URS - Boulder', warranties: 'Boulder', vendorData: 'American Fire Protection Group',
    notes: 'Awarded to American Fire Protection Group.',
    risks: [], contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 4
  },
  {
    id: 2, order: 2, name: 'Project Manager', trade: 'Boulder', pm: 'Rush Patel',
    project: 'Kimpton Plano', csi: '01 10 00',
    dueDate: '2025-05-01', onSiteDate: '2025-06-01', priority: 'High', status: 'Awarded',
    budget: 145000, lowBid: 138000, selectedVendor: 'Peterson Contractors Inc.', awardAmount: 138000,
    risk: 'Low', longLead: false, urgent: false, overdue: false,
    bidsReceived: 2, coverageCount: 2, contractStatus: 'Executed',
    dropboxFolder: 'URS - Boulder', warranties: 'Boulder', vendorData: 'Peterson Contractors Inc.',
    notes: 'Primary PM assignment finalized.',
    risks: [], contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 4
  },
  {
    id: 3, order: 3, name: 'Assistant Job Supervisor', trade: 'Boulder', pm: 'Uma Patel',
    project: 'Kimpton Plano', csi: '01 10 00',
    dueDate: '2025-05-05', onSiteDate: '2025-06-01', priority: 'Medium', status: 'Reviewing Bids',
    budget: 90000, lowBid: 85000, selectedVendor: 'American Fire Protection Group', awardAmount: 0,
    risk: 'Low', longLead: false, urgent: false, overdue: false,
    bidsReceived: 1, coverageCount: 1, contractStatus: 'Not Started',
    dropboxFolder: 'URS - Boulder', warranties: 'Boulder', vendorData: 'American Fire Protection Group',
    notes: 'American Fire Protection Group is the primary bid. Awaiting one more.',
    risks: [{ icon: '⚠️', label: 'Single Bid', desc: 'Only 1 bid received. Policy requires 2+.' }],
    contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 0
  },
  {
    id: 4, order: 4, name: 'Mobilization', trade: 'Mobilization', pm: 'Jay Patel',
    project: 'Kimpton Plano', csi: '01 50 00',
    dueDate: '2025-04-20', onSiteDate: '2025-05-15', priority: 'Critical', status: 'Reviewing Bids',
    budget: 150000, lowBid: 138000, selectedVendor: 'Peterson Contractors Inc.', awardAmount: 0,
    risk: 'Medium', longLead: false, urgent: true, overdue: false,
    bidsReceived: 2, coverageCount: 2, contractStatus: 'Not Started',
    dropboxFolder: 'URS - Mobilization', warranties: 'Mobilization', vendorData: 'Peterson Contractors Inc.',
    notes: 'Peterson Contractors and Sub Surface both submitted. Leveling in progress.',
    risks: [{ icon: '⚠️', label: 'Schedule Pressure', desc: 'Site must be mobilized by 5/15 to meet foundation pour date.' }],
    contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 0
  },
  {
    id: 5, order: 5, name: 'Job Site Office Trailer', trade: 'Mobilization', pm: 'Rush Patel',
    project: 'Riverwalk Office', csi: '01 52 00',
    dueDate: '2025-04-18', onSiteDate: '2025-05-01', priority: 'High', status: 'Awarded',
    budget: 25000, lowBid: 22000, selectedVendor: 'Lovelace Works', awardAmount: 0,
    risk: 'Low', longLead: false, urgent: false, overdue: false,
    bidsReceived: 2, coverageCount: 2, contractStatus: 'Executed',
    dropboxFolder: 'URS - Mobilization', warranties: 'Mobilization', vendorData: 'Lovelace Works',
    notes: 'Lovelace Works awarded. Trailer delivered and set up on site.',
    risks: [], contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 4
  },
  {
    id: 6, order: 6, name: 'PortaPotty', trade: 'Mobilization', pm: 'Mike Torres',
    project: 'Downtown Plaza', csi: '01 52 10',
    dueDate: '2025-04-15', onSiteDate: '2025-05-01', priority: 'Medium', status: 'Awarded',
    budget: 10000, lowBid: 9200, selectedVendor: 'Bayou State', awardAmount: 0,
    risk: 'Low', longLead: false, urgent: false, overdue: false,
    bidsReceived: 2, coverageCount: 2, contractStatus: 'Executed',
    dropboxFolder: 'URS - Mobilization', warranties: 'Mobilization', vendorData: 'Bayou State',
    notes: 'Bayou State is the lowest sanitation vendor available. Awarded.',
    risks: [], contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 4
  },
  {
    id: 7, order: 7, name: 'Storage Containers', trade: 'Mobilization', pm: 'Jay Patel',
    project: 'Riverwalk Office', csi: '01 52 20',
    dueDate: '2025-04-25', onSiteDate: '2025-05-10', priority: 'Medium', status: 'Bidding',
    budget: 12000, lowBid: null, selectedVendor: null, awardAmount: null,
    risk: 'Low', longLead: false, urgent: false, overdue: false,
    bidsReceived: 0, coverageCount: 0, contractStatus: 'Not Started',
    dropboxFolder: 'URS - Mobilization', warranties: 'Mobilization', vendorData: '',
    notes: 'RFQ issued. Awaiting bids.',
    risks: [], contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 0
  },
  {
    id: 8, order: 8, name: 'Temporary Power', trade: 'Mobilization', pm: 'Rush Patel',
    project: 'Downtown Plaza', csi: '01 55 00',
    dueDate: '2025-04-22', onSiteDate: '2025-05-12', priority: 'High', status: 'Reviewing Bids',
    budget: 8500, lowBid: 8000, selectedVendor: 'Willscott Mobile Mini', awardAmount: null,
    risk: 'Medium', longLead: false, urgent: false, overdue: false,
    bidsReceived: 1, coverageCount: 1, contractStatus: 'Not Started',
    dropboxFolder: 'URS - Mobilization', warranties: 'Mobilization', vendorData: 'Willscott Mobile Mini',
    notes: 'Critical path item. Power needed before crane mobilization.',
    risks: [{ icon: '⚠️', label: 'Critical Path', desc: 'Power must be live before tower crane arrives.' }],
    contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 0
  },
  {
    id: 9, order: 9, name: 'MEP Systems', trade: 'MEP', pm: 'Mike Torres',
    project: 'Highland Towers', csi: '01 60 00',
    dueDate: '2025-04-28', onSiteDate: '2025-05-15', priority: 'High', status: 'Reviewing Bids',
    budget: 1300000, lowBid: 1250000, selectedVendor: 'Summit MEP Systems', awardAmount: null,
    risk: 'High', longLead: true, urgent: true, overdue: false,
    bidsReceived: 1, coverageCount: 1, contractStatus: 'Not Started',
    dropboxFolder: 'URS - MEP', warranties: 'MEP', vendorData: 'Summit MEP Systems',
    notes: 'Major long lead package.',
    risks: [], contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 0
  },
  {
    id: 10, order: 10, name: 'Site Cleaning', trade: 'Mobilization', pm: 'Jay Patel',
    project: 'Highland Towers', csi: '01 70 00',
    dueDate: '2025-05-01', onSiteDate: '2025-05-20', priority: 'Low', status: 'Reviewing Bids',
    budget: 40000, lowBid: 35000, selectedVendor: 'CleanPro Services', awardAmount: null,
    risk: 'Low', longLead: false, urgent: false, overdue: false,
    bidsReceived: 1, coverageCount: 1, contractStatus: 'Not Started',
    dropboxFolder: 'URS - Mobilization', warranties: 'Mobilization', vendorData: 'CleanPro Services',
    notes: 'Cleaning and daily upkeep.',
    risks: [], contractSteps: ['Verbal Award', 'Scope Confirm', 'Draft Contract', 'Sub Review', 'Executed'], contractProgress: 0
  },
];

export const SAMPLE_USERS: User[] = [
  { name: 'Jay Patel', email: 'jay.patel@boulderconstruction.com', role: 'Project Manager', password: 'password123', joined: 'Jan 15, 2024' },
  { name: 'Rush Patel', email: 'rush.patel@boulderconstruction.com', role: 'Project Manager', password: 'password123', joined: 'Feb 1, 2024' },
  { name: 'Uma Patel', email: 'uma.patel@boulderconstruction.com', role: 'Estimator', password: 'password123', joined: 'Mar 10, 2024' },
];

export const CONTRACT_STEP_HINTS = [
  'Verbally notify the selected sub and confirm scope of work.',
  'Issue scope confirmation letter and begin drafting the subcontract.',
  'Contract draft in review — confirm insurance certificates and bond.',
  'Sub has reviewed — route for final signatures.',
  '✓ Contract fully executed. File original and upload to project records.'
];

export const PACKAGES: Package[] = _PACKAGES.map(pkg => ({
  ...pkg,
  bids: (BIDS_DB[pkg.id] || []).map((b, idx) => ({ ...b, id: `bid_${pkg.id}_${idx}` }))
}));
