module.exports = [
"[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/data/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIDS_DB",
    ()=>BIDS_DB,
    "CONTRACT_STEP_HINTS",
    ()=>CONTRACT_STEP_HINTS,
    "PACKAGES",
    ()=>PACKAGES,
    "SAMPLE_USERS",
    ()=>SAMPLE_USERS,
    "TODAY",
    ()=>TODAY,
    "daysFromToday",
    ()=>daysFromToday
]);
const TODAY = new Date('2025-04-15');
function daysFromToday(dateStr) {
    return Math.round((new Date(dateStr).getTime() - TODAY.getTime()) / 86400000);
}
const BIDS_DB = {
    1: [
        {
            vendor: 'American Fire Protection Group',
            amount: 85000,
            timelineDays: 10,
            vendorDetails: {
                name: 'American Fire Protection Group',
                rating: 4.5,
                pastProjects: 12,
                avgDelay: 1.2
            },
            received: '2025-03-10',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Full fire protection scope',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'Licensed & insured',
            leveled: true,
            preferred: true,
            notes: 'Primary contractor for assistant supervisor role.',
            rank: 1
        }
    ],
    2: [
        {
            vendor: 'Peterson Contractors Inc.',
            amount: 138000,
            timelineDays: 14,
            vendorDetails: {
                name: 'Peterson Contractors Inc.',
                rating: 4.8,
                pastProjects: 8,
                avgDelay: 0.5
            },
            received: '2025-03-05',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Full mobilization scope',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'Experienced in site mobilization',
            leveled: true,
            preferred: true,
            notes: 'Lead mobilization contractor.',
            rank: 1
        },
        {
            vendor: 'Sub Surface',
            amount: 160000,
            timelineDays: 20,
            vendorDetails: {
                name: 'Sub Surface',
                rating: 4.1,
                pastProjects: 3,
                avgDelay: 2.1
            },
            received: '2025-03-06',
            status: 'backup',
            scopeComplete: 'Complete',
            inclusions: 'Subsurface mobilization',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'Certified subsurface work',
            leveled: true,
            preferred: false,
            notes: 'Backup contractor.',
            rank: 2
        }
    ],
    3: [
        {
            vendor: 'Willscott',
            amount: 22000,
            timelineDays: 5,
            vendorDetails: {
                name: 'Willscott',
                rating: 4.6,
                pastProjects: 45,
                avgDelay: 0
            },
            received: '2025-03-01',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Office trailer supply & setup',
            exclusions: 'Utilities connection',
            alternates: 'None',
            qualifications: 'National vendor',
            leveled: true,
            preferred: true,
            notes: 'Primary trailer vendor.',
            rank: 1
        },
        {
            vendor: 'Lovelace Works',
            amount: 24500,
            timelineDays: 7,
            vendorDetails: {
                name: 'Lovelace Works',
                rating: 3.9,
                pastProjects: 6,
                avgDelay: 3.0
            },
            received: '2025-03-02',
            status: 'backup',
            scopeComplete: 'Complete',
            inclusions: 'Office trailer',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'Local vendor',
            leveled: true,
            preferred: false,
            notes: 'Backup option.',
            rank: 2
        }
    ],
    4: [
        {
            vendor: 'Bayou State',
            amount: 9200,
            timelineDays: 2,
            vendorDetails: {
                name: 'Bayou State',
                rating: 4.9,
                pastProjects: 30,
                avgDelay: 0.2
            },
            received: '2025-03-08',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Full porta-potty service',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'Licensed sanitation vendor',
            leveled: true,
            preferred: true,
            notes: 'Only bid received.',
            rank: 1
        },
        {
            vendor: 'CleanTech',
            amount: 10500,
            timelineDays: 3,
            vendorDetails: {
                name: 'CleanTech',
                rating: 4.2,
                pastProjects: 15,
                avgDelay: 1.0
            },
            received: '2025-03-09',
            status: 'backup',
            scopeComplete: 'Complete',
            inclusions: 'Sanitation',
            exclusions: 'Handwash stations',
            alternates: 'None',
            qualifications: 'Licensed sanitation vendor',
            leveled: true,
            preferred: false,
            notes: 'Backup.',
            rank: 2
        }
    ],
    5: [],
    6: [
        {
            vendor: 'Sasquatchwaste',
            amount: 15000,
            timelineDays: 4,
            vendorDetails: {
                name: 'Sasquatchwaste',
                rating: 4.5,
                pastProjects: 12,
                avgDelay: 1.2
            },
            received: '2025-03-12',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Exterior trash container service',
            exclusions: 'Hazardous materials',
            alternates: 'None',
            qualifications: 'Licensed waste vendor',
            leveled: true,
            preferred: true,
            notes: 'Primary waste vendor.',
            rank: 1
        },
        {
            vendor: 'Yellowfin Waste & Environmental LLC',
            amount: 18000,
            timelineDays: 5,
            vendorDetails: {
                name: 'Yellowfin Waste & Environmental LLC',
                rating: 4.0,
                pastProjects: 2,
                avgDelay: 0.0
            },
            received: '2025-03-13',
            status: 'backup',
            scopeComplete: 'Complete',
            inclusions: 'Full waste service',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'Environmental compliance certified',
            leveled: true,
            preferred: false,
            notes: 'Backup vendor.',
            rank: 2
        }
    ],
    7: [],
    8: [
        {
            vendor: 'Willscott Mobile Mini',
            amount: 8000,
            timelineDays: 5,
            vendorDetails: {
                name: 'Willscott Mobile Mini',
                rating: 4.7,
                pastProjects: 50,
                avgDelay: 0.5
            },
            received: '2025-03-15',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Storage container rental',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'National vendor',
            leveled: true,
            preferred: true,
            notes: 'Standard rental agreement.',
            rank: 1
        }
    ],
    9: [
        {
            vendor: 'Summit MEP Systems',
            amount: 1250000,
            timelineDays: 120,
            vendorDetails: {
                name: 'Summit MEP Systems',
                rating: 4.4,
                pastProjects: 18,
                avgDelay: 2.5
            },
            received: '2025-03-20',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Full MEP scope',
            exclusions: 'None',
            alternates: 'None',
            qualifications: 'Licensed MEP contractor',
            leveled: true,
            preferred: true,
            notes: 'Recommended for MEP work.',
            rank: 1
        }
    ],
    10: [
        {
            vendor: 'CleanPro Services',
            amount: 35000,
            timelineDays: 60,
            vendorDetails: {
                name: 'CleanPro Services',
                rating: 4.5,
                pastProjects: 12,
                avgDelay: 1.2
            },
            received: '2025-03-22',
            status: 'recommended',
            scopeComplete: 'Complete',
            inclusions: 'Cleaning services',
            exclusions: 'Hazmat',
            alternates: 'None',
            qualifications: 'Insured cleaning contractor',
            leveled: true,
            preferred: true,
            notes: 'Primary cleaning vendor.',
            rank: 1
        }
    ]
};
const _PACKAGES = [
    {
        id: 1,
        order: 1,
        name: 'Job Supervisor',
        trade: 'Boulder',
        pm: 'Jay Patel',
        project: 'Kimpton Plano',
        csi: '01 10 00',
        dueDate: '2025-05-01',
        onSiteDate: '2025-06-01',
        priority: 'High',
        status: 'Awarded',
        budget: 90000,
        lowBid: 85000,
        selectedVendor: 'American Fire Protection Group',
        awardAmount: 85000,
        risk: 'Low',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 1,
        coverageCount: 1,
        contractStatus: 'Executed',
        dropboxFolder: 'URS - Boulder',
        warranties: 'Boulder',
        vendorData: 'American Fire Protection Group',
        notes: 'Awarded to American Fire Protection Group.',
        risks: [],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 4
    },
    {
        id: 2,
        order: 2,
        name: 'Project Manager',
        trade: 'Boulder',
        pm: 'Rush Patel',
        project: 'Kimpton Plano',
        csi: '01 10 00',
        dueDate: '2025-05-01',
        onSiteDate: '2025-06-01',
        priority: 'High',
        status: 'Awarded',
        budget: 145000,
        lowBid: 138000,
        selectedVendor: 'Peterson Contractors Inc.',
        awardAmount: 138000,
        risk: 'Low',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 2,
        coverageCount: 2,
        contractStatus: 'Executed',
        dropboxFolder: 'URS - Boulder',
        warranties: 'Boulder',
        vendorData: 'Peterson Contractors Inc.',
        notes: 'Primary PM assignment finalized.',
        risks: [],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 4
    },
    {
        id: 3,
        order: 3,
        name: 'Assistant Job Supervisor',
        trade: 'Boulder',
        pm: 'Uma Patel',
        project: 'Kimpton Plano',
        csi: '01 10 00',
        dueDate: '2025-05-05',
        onSiteDate: '2025-06-01',
        priority: 'Medium',
        status: 'Reviewing Bids',
        budget: 90000,
        lowBid: 85000,
        selectedVendor: 'American Fire Protection Group',
        awardAmount: 0,
        risk: 'Low',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 1,
        coverageCount: 1,
        contractStatus: 'Not Started',
        dropboxFolder: 'URS - Boulder',
        warranties: 'Boulder',
        vendorData: 'American Fire Protection Group',
        notes: 'American Fire Protection Group is the primary bid. Awaiting one more.',
        risks: [
            {
                icon: '⚠️',
                label: 'Single Bid',
                desc: 'Only 1 bid received. Policy requires 2+.'
            }
        ],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 0
    },
    {
        id: 4,
        order: 4,
        name: 'Mobilization',
        trade: 'Mobilization',
        pm: 'Jay Patel',
        project: 'Kimpton Plano',
        csi: '01 50 00',
        dueDate: '2025-04-20',
        onSiteDate: '2025-05-15',
        priority: 'Critical',
        status: 'Reviewing Bids',
        budget: 150000,
        lowBid: 138000,
        selectedVendor: 'Peterson Contractors Inc.',
        awardAmount: 0,
        risk: 'Medium',
        longLead: false,
        urgent: true,
        overdue: false,
        bidsReceived: 2,
        coverageCount: 2,
        contractStatus: 'Not Started',
        dropboxFolder: 'URS - Mobilization',
        warranties: 'Mobilization',
        vendorData: 'Peterson Contractors Inc.',
        notes: 'Peterson Contractors and Sub Surface both submitted. Leveling in progress.',
        risks: [
            {
                icon: '⚠️',
                label: 'Schedule Pressure',
                desc: 'Site must be mobilized by 5/15 to meet foundation pour date.'
            }
        ],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 0
    },
    {
        id: 5,
        order: 5,
        name: 'Job Site Office Trailer',
        trade: 'Mobilization',
        pm: 'Rush Patel',
        project: 'Riverwalk Office',
        csi: '01 52 00',
        dueDate: '2025-04-18',
        onSiteDate: '2025-05-01',
        priority: 'High',
        status: 'Awarded',
        budget: 25000,
        lowBid: 22000,
        selectedVendor: 'Lovelace Works',
        awardAmount: 0,
        risk: 'Low',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 2,
        coverageCount: 2,
        contractStatus: 'Executed',
        dropboxFolder: 'URS - Mobilization',
        warranties: 'Mobilization',
        vendorData: 'Lovelace Works',
        notes: 'Lovelace Works awarded. Trailer delivered and set up on site.',
        risks: [],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 4
    },
    {
        id: 6,
        order: 6,
        name: 'PortaPotty',
        trade: 'Mobilization',
        pm: 'Mike Torres',
        project: 'Downtown Plaza',
        csi: '01 52 10',
        dueDate: '2025-04-15',
        onSiteDate: '2025-05-01',
        priority: 'Medium',
        status: 'Awarded',
        budget: 10000,
        lowBid: 9200,
        selectedVendor: 'Bayou State',
        awardAmount: 0,
        risk: 'Low',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 2,
        coverageCount: 2,
        contractStatus: 'Executed',
        dropboxFolder: 'URS - Mobilization',
        warranties: 'Mobilization',
        vendorData: 'Bayou State',
        notes: 'Bayou State is the lowest sanitation vendor available. Awarded.',
        risks: [],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 4
    },
    {
        id: 7,
        order: 7,
        name: 'Storage Containers',
        trade: 'Mobilization',
        pm: 'Jay Patel',
        project: 'Riverwalk Office',
        csi: '01 52 20',
        dueDate: '2025-04-25',
        onSiteDate: '2025-05-10',
        priority: 'Medium',
        status: 'Bidding',
        budget: 12000,
        lowBid: null,
        selectedVendor: null,
        awardAmount: null,
        risk: 'Low',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 0,
        coverageCount: 0,
        contractStatus: 'Not Started',
        dropboxFolder: 'URS - Mobilization',
        warranties: 'Mobilization',
        vendorData: '',
        notes: 'RFQ issued. Awaiting bids.',
        risks: [],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 0
    },
    {
        id: 8,
        order: 8,
        name: 'Temporary Power',
        trade: 'Mobilization',
        pm: 'Rush Patel',
        project: 'Downtown Plaza',
        csi: '01 55 00',
        dueDate: '2025-04-22',
        onSiteDate: '2025-05-12',
        priority: 'High',
        status: 'Reviewing Bids',
        budget: 8500,
        lowBid: 8000,
        selectedVendor: 'Willscott Mobile Mini',
        awardAmount: null,
        risk: 'Medium',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 1,
        coverageCount: 1,
        contractStatus: 'Not Started',
        dropboxFolder: 'URS - Mobilization',
        warranties: 'Mobilization',
        vendorData: 'Willscott Mobile Mini',
        notes: 'Critical path item. Power needed before crane mobilization.',
        risks: [
            {
                icon: '⚠️',
                label: 'Critical Path',
                desc: 'Power must be live before tower crane arrives.'
            }
        ],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 0
    },
    {
        id: 9,
        order: 9,
        name: 'MEP Systems',
        trade: 'MEP',
        pm: 'Mike Torres',
        project: 'Highland Towers',
        csi: '01 60 00',
        dueDate: '2025-04-28',
        onSiteDate: '2025-05-15',
        priority: 'High',
        status: 'Reviewing Bids',
        budget: 1300000,
        lowBid: 1250000,
        selectedVendor: 'Summit MEP Systems',
        awardAmount: null,
        risk: 'High',
        longLead: true,
        urgent: true,
        overdue: false,
        bidsReceived: 1,
        coverageCount: 1,
        contractStatus: 'Not Started',
        dropboxFolder: 'URS - MEP',
        warranties: 'MEP',
        vendorData: 'Summit MEP Systems',
        notes: 'Major long lead package.',
        risks: [],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 0
    },
    {
        id: 10,
        order: 10,
        name: 'Site Cleaning',
        trade: 'Mobilization',
        pm: 'Jay Patel',
        project: 'Highland Towers',
        csi: '01 70 00',
        dueDate: '2025-05-01',
        onSiteDate: '2025-05-20',
        priority: 'Low',
        status: 'Reviewing Bids',
        budget: 40000,
        lowBid: 35000,
        selectedVendor: 'CleanPro Services',
        awardAmount: null,
        risk: 'Low',
        longLead: false,
        urgent: false,
        overdue: false,
        bidsReceived: 1,
        coverageCount: 1,
        contractStatus: 'Not Started',
        dropboxFolder: 'URS - Mobilization',
        warranties: 'Mobilization',
        vendorData: 'CleanPro Services',
        notes: 'Cleaning and daily upkeep.',
        risks: [],
        contractSteps: [
            'Verbal Award',
            'Scope Confirm',
            'Draft Contract',
            'Sub Review',
            'Executed'
        ],
        contractProgress: 0
    }
];
const SAMPLE_USERS = [
    {
        name: 'Jay Patel',
        email: 'jay.patel@boulderconstruction.com',
        role: 'Project Manager',
        password: 'password123',
        joined: 'Jan 15, 2024'
    },
    {
        name: 'Rush Patel',
        email: 'rush.patel@boulderconstruction.com',
        role: 'Project Manager',
        password: 'password123',
        joined: 'Feb 1, 2024'
    },
    {
        name: 'Uma Patel',
        email: 'uma.patel@boulderconstruction.com',
        role: 'Estimator',
        password: 'password123',
        joined: 'Mar 10, 2024'
    }
];
const CONTRACT_STEP_HINTS = [
    'Verbally notify the selected sub and confirm scope of work.',
    'Issue scope confirmation letter and begin drafting the subcontract.',
    'Contract draft in review — confirm insurance certificates and bond.',
    'Sub has reviewed — route for final signatures.',
    '✓ Contract fully executed. File original and upload to project records.'
];
const PACKAGES = _PACKAGES.map((pkg)=>({
        ...pkg,
        bids: (BIDS_DB[pkg.id] || []).map((b, idx)=>({
                ...b,
                id: `bid_${pkg.id}_${idx}`
            }))
    }));
}),
"[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/shared/ui/StatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge,
    "canRevertStatus",
    ()=>canRevertStatus,
    "getNextStatus",
    ()=>getNextStatus,
    "statusWorkflow",
    ()=>statusWorkflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const statusConfig = {
    Draft: {
        color: "color: #64748B",
        bg: "background: rgba(100,116,139,0.08)",
        border: "border-color: rgba(100,116,139,0.15)",
        dot: "background: #64748B"
    },
    Invited: {
        color: "color: #2563EB",
        bg: "background: rgba(37,99,235,0.08)",
        border: "border-color: rgba(37,99,235,0.15)",
        dot: "background: #2563EB"
    },
    Bidding: {
        color: "color: #2563EB",
        bg: "background: rgba(37,99,235,0.08)",
        border: "border-color: rgba(37,99,235,0.15)",
        dot: "background: #2563EB"
    },
    "Reviewing Bids": {
        color: "color: #B45309",
        bg: "background: rgba(245,158,11,0.08)",
        border: "border-color: rgba(245,158,11,0.15)",
        dot: "background: #F59E0B"
    },
    Reviewing: {
        color: "color: #B45309",
        bg: "background: rgba(245,158,11,0.08)",
        border: "border-color: rgba(245,158,11,0.15)",
        dot: "background: #F59E0B"
    },
    "Scope Leveling": {
        color: "color: #1D4ED8",
        bg: "background: rgba(37,99,235,0.06)",
        border: "border-color: rgba(37,99,235,0.12)",
        dot: "background: #3B82F6"
    },
    Negotiating: {
        color: "color: #7C3AED",
        bg: "background: rgba(124,58,237,0.06)",
        border: "border-color: rgba(124,58,237,0.12)",
        dot: "background: #7C3AED"
    },
    "Pending Decision": {
        color: "color: #C2410C",
        bg: "background: rgba(249,115,22,0.06)",
        border: "border-color: rgba(249,115,22,0.12)",
        dot: "background: #F97316"
    },
    "Ready to Award": {
        color: "color: #15803D",
        bg: "background: rgba(22,163,74,0.08)",
        border: "border-color: rgba(22,163,74,0.15)",
        dot: "background: #16A34A"
    },
    Awarded: {
        color: "color: #FFFFFF",
        bg: "background: #16A34A",
        border: "border-color: #16A34A",
        dot: "background: #FFFFFF"
    },
    "Contract Out": {
        color: "color: #1D4ED8",
        bg: "background: rgba(37,99,235,0.08)",
        border: "border-color: rgba(37,99,235,0.15)",
        dot: "background: #2563EB"
    },
    Executed: {
        color: "color: #FFFFFF",
        bg: "background: #059669",
        border: "border-color: #059669",
        dot: "background: #FFFFFF"
    },
    "Not Started": {
        color: "color: #64748B",
        bg: "background: rgba(100,116,139,0.06)",
        border: "border-color: rgba(100,116,139,0.12)",
        dot: "background: #94A3B8"
    },
    "On Hold": {
        color: "color: #64748B",
        bg: "background: rgba(100,116,139,0.06)",
        border: "border-color: rgba(100,116,139,0.12)",
        dot: "background: #94A3B8"
    },
    Overdue: {
        color: "color: #DC2626",
        bg: "background: rgba(220,38,38,0.08)",
        border: "border-color: rgba(220,38,38,0.15)",
        dot: "background: #DC2626"
    }
};
const fallbackConfig = {
    color: "color: #64748B",
    bg: "background: rgba(100,116,139,0.06)",
    border: "border-color: rgba(100,116,139,0.12)",
    dot: "background: #94A3B8"
};
const sizeStyles = {
    sm: {
        padding: "3px 10px",
        fontSize: "11px"
    },
    md: {
        padding: "4px 12px",
        fontSize: "12px"
    },
    lg: {
        padding: "6px 14px",
        fontSize: "13px"
    }
};
function StatusBadge({ status, size = "md", showDot = true }) {
    const config = statusConfig[status] || fallbackConfig;
    const sizeStyle = sizeStyles[size];
    // Parse inline style strings to objects
    const parseStyle = (styleStr)=>{
        const [prop, val] = styleStr.split(": ");
        const camelProp = prop.replace(/-([a-z])/g, (_, c)=>c.toUpperCase());
        return {
            [camelProp]: val
        };
    };
    const style = {
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontWeight: 700,
        borderRadius: "5px",
        border: "1px solid",
        whiteSpace: "nowrap",
        letterSpacing: "0.02em",
        ...sizeStyle,
        ...parseStyle(config.color),
        ...parseStyle(config.bg),
        ...parseStyle(config.border)
    };
    const dotStyle = {
        width: size === "sm" ? "5px" : "6px",
        height: size === "sm" ? "5px" : "6px",
        borderRadius: "50%",
        flexShrink: 0,
        ...parseStyle(config.dot)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: style,
        children: [
            showDot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: dotStyle,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/shared/ui/StatusBadge.tsx",
                lineNumber: 167,
                columnNumber: 19
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/shared/ui/StatusBadge.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
const statusWorkflow = [
    "Draft",
    "Invited",
    "Bidding",
    "Reviewing",
    "Ready to Award",
    "Awarded",
    "Executed"
];
function getNextStatus(current) {
    const idx = statusWorkflow.indexOf(current);
    if (idx < statusWorkflow.length - 1) {
        return statusWorkflow[idx + 1];
    }
    return null;
}
function canRevertStatus(current) {
    return [
        "Reviewing",
        "Ready to Award"
    ].includes(current);
}
}),
"[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PackageDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$src$2f$data$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/data/db.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$src$2f$shared$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/shared/ui/StatusBadge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// ── Icons ─────────────────────────────────────────────────────────
const Icons = {
    back: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "15 18 9 12 15 6"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    award: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "7"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    export: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "7 10 12 15 17 10"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "15",
                x2: "12",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    star: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    check: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "20 6 9 17 4 12"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    calendar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "2",
                x2: "16",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "3",
                y1: "10",
                x2: "21",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
// ── Currency formatter ──────────────────────────────────────────
function fmt(n) {
    if (!n) return "—";
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(n);
}
// ── Score bar component ─────────────────────────────────────────
function ScoreBar({ score, max = 100, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: "8px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    height: "6px",
                    background: "var(--border)",
                    borderRadius: "3px",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: `${score / max * 100}%`,
                        height: "100%",
                        background: color,
                        borderRadius: "3px",
                        transition: "width 0.6s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    fontFamily: "var(--mono)",
                    minWidth: "32px"
                },
                children: score
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function PackageDetailClient({ params }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pkgId = parseInt(params.id, 10);
    const pkg = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$src$2f$data$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PACKAGES"].find((p)=>p.id === pkgId);
    const bids = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$src$2f$data$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIDS_DB"][pkgId] || [];
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("bids");
    const [selectedVendorIdx, setSelectedVendorIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(bids.findIndex((b)=>b.status === "recommended"));
    const [awarded, setAwarded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!pkg) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "var(--bg)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "48px",
                        marginBottom: "16px"
                    },
                    children: "📦"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "8px"
                    },
                    children: "Package not found"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--text-muted)",
                        marginBottom: "24px"
                    },
                    children: "The package you're looking for doesn't exist."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/"),
                    style: backBtnStyle,
                    children: "← Back to Dashboard"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    }
    const variance = pkg.budget && pkg.lowBid ? ((pkg.lowBid - pkg.budget) / pkg.budget * 100).toFixed(1) : null;
    const varVal = variance ? parseFloat(variance) : 0;
    // Compute simple scores for bid comparison
    const bidsWithScores = bids.map((bid, i)=>{
        const priceScore = pkg.budget && bid.amount > 0 ? Math.round(Math.max(0, 100 - (bid.amount - pkg.budget) / pkg.budget * 100)) : 50;
        const scopeScore = bid.scopeComplete === "Complete" ? 90 : bid.scopeComplete === "Partial" ? 60 : 30;
        const leveledScore = bid.leveled ? 85 : 40;
        const overall = Math.round(priceScore * 0.5 + scopeScore * 0.3 + leveledScore * 0.2);
        return {
            ...bid,
            priceScore,
            scopeScore,
            leveledScore,
            overall,
            originalIdx: i
        };
    }).sort((a, b)=>b.overall - a.overall);
    const tabs = [
        "overview",
        "bids",
        "activity"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "var(--bg)",
            fontFamily: "var(--font)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "var(--navy)",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    position: "sticky",
                    top: 0,
                    zIndex: 100
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "13px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/"),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "rgba(255,255,255,0.6)",
                                    borderRadius: "6px",
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                    fontFamily: "var(--font)",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    transition: "all 0.15s"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                    e.currentTarget.style.color = "white";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                                },
                                children: [
                                    Icons.back,
                                    " Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.2)",
                                    fontSize: "16px"
                                },
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.4)"
                                },
                                children: "All Buyouts"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.2)",
                                    fontSize: "16px"
                                },
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "rgba(255,255,255,0.8)",
                                    fontWeight: 600
                                },
                                children: pkg.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "rgba(255,255,255,0.65)",
                                    borderRadius: "6px",
                                    padding: "7px 14px",
                                    cursor: "pointer",
                                    fontFamily: "var(--font)",
                                    fontSize: "13px",
                                    fontWeight: 500
                                },
                                children: [
                                    Icons.export,
                                    " Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            !awarded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setAwarded(true);
                                    alert(`Package "${pkg.name}" awarded! 🎉`);
                                },
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    background: "var(--primary)",
                                    border: "1px solid var(--primary)",
                                    color: "white",
                                    borderRadius: "6px",
                                    padding: "7px 16px",
                                    cursor: "pointer",
                                    fontFamily: "var(--font)",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    transition: "all 0.15s"
                                },
                                children: [
                                    Icons.award,
                                    " Award Package"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    background: "var(--status-awarded-bg)",
                                    border: "1px solid rgba(22,163,74,0.3)",
                                    color: "var(--status-awarded)",
                                    borderRadius: "6px",
                                    padding: "7px 16px",
                                    fontSize: "13px",
                                    fontWeight: 700
                                },
                                children: [
                                    Icons.check,
                                    " Awarded"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "32px 32px 64px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            marginBottom: "28px",
                            gap: "16px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            style: {
                                                fontSize: "26px",
                                                fontWeight: 800,
                                                color: "var(--text)",
                                                margin: 0
                                            },
                                            children: pkg.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$src$2f$shared$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                            status: pkg.status,
                                            size: "lg"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        pkg.urgent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: "rgba(220,38,38,0.08)",
                                                color: "var(--status-overdue)",
                                                fontSize: "11px",
                                                fontWeight: 700,
                                                padding: "4px 10px",
                                                borderRadius: "4px",
                                                border: "1px solid rgba(220,38,38,0.15)"
                                            },
                                            children: "URGENT"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "14px",
                                        color: "var(--text-muted)",
                                        margin: 0
                                    },
                                    children: [
                                        pkg.project,
                                        " · ",
                                        pkg.pm,
                                        " · CSI ",
                                        pkg.csi,
                                        " · ",
                                        pkg.trade
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: "14px",
                            marginBottom: "28px"
                        },
                        children: [
                            {
                                label: "Budget",
                                value: fmt(pkg.budget),
                                sub: "Target cost",
                                color: "var(--text)"
                            },
                            {
                                label: "Low Bid",
                                value: fmt(pkg.lowBid),
                                sub: pkg.lowBid ? "Best received" : "No bids yet",
                                color: pkg.lowBid ? "var(--savings)" : "var(--text-light)"
                            },
                            {
                                label: "Variance",
                                value: variance ? `${varVal > 0 ? "+" : ""}${variance}%` : "—",
                                sub: varVal < 0 ? "Under budget" : varVal > 0 ? "Over budget" : "On target",
                                color: varVal < 0 ? "var(--savings)" : varVal > 0 ? "var(--status-overdue)" : "var(--text-muted)"
                            },
                            {
                                label: "Bids",
                                value: String(bids.length),
                                sub: pkg.coverageCount >= 2 ? "Coverage OK ✓" : "Need more bids",
                                color: pkg.coverageCount >= 2 ? "var(--status-awarded)" : "var(--status-reviewing)"
                            },
                            {
                                label: "Due Date",
                                value: pkg.dueDate,
                                sub: `${pkg.priority} Priority`,
                                color: "var(--text)",
                                icon: Icons.calendar
                            }
                        ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "var(--card)",
                                    borderRadius: "10px",
                                    padding: "16px 18px",
                                    border: "1px solid var(--border)",
                                    boxShadow: "var(--shadow-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            color: "var(--text-muted)",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.06em",
                                            marginBottom: "6px"
                                        },
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "20px",
                                            fontWeight: 800,
                                            color: stat.color,
                                            fontFamily: "var(--mono)",
                                            marginBottom: "3px"
                                        },
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "11px",
                                            color: "var(--text-muted)"
                                        },
                                        children: stat.sub
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, stat.label, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0",
                            borderBottom: "2px solid var(--border)",
                            marginBottom: "24px"
                        },
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab),
                                style: {
                                    padding: "10px 20px",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: activeTab === tab ? "var(--primary)" : "var(--text-muted)",
                                    background: "none",
                                    border: "none",
                                    borderBottom: `2px solid ${activeTab === tab ? "var(--primary)" : "transparent"}`,
                                    marginBottom: "-2px",
                                    cursor: "pointer",
                                    fontFamily: "var(--font)",
                                    textTransform: "capitalize",
                                    transition: "all 0.15s"
                                },
                                children: tab === "bids" ? `Bid Comparison (${bids.length})` : tab.charAt(0).toUpperCase() + tab.slice(1)
                            }, tab, false, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    activeTab === "bids" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "fadeInUp 0.3s ease"
                        },
                        children: bids.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "var(--card)",
                                borderRadius: "12px",
                                border: "1px solid var(--border)",
                                padding: "64px 40px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "48px",
                                        marginBottom: "16px"
                                    },
                                    children: "📭"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 282,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        color: "var(--text)",
                                        marginBottom: "8px"
                                    },
                                    children: "No bids received yet"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "var(--text-muted)",
                                        fontSize: "14px"
                                    },
                                    children: "Issue an RFP to begin collecting bids from vendors"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 284,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                            lineNumber: 278,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                bidsWithScores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "linear-gradient(135deg, rgba(22,163,74,0.05), rgba(22,163,74,0.02))",
                                        border: "1px solid rgba(22,163,74,0.2)",
                                        borderRadius: "12px",
                                        padding: "18px 20px",
                                        marginBottom: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "16px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "36px",
                                                        height: "36px",
                                                        borderRadius: "8px",
                                                        background: "var(--status-awarded-bg)",
                                                        color: "var(--status-awarded)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontSize: "18px"
                                                    },
                                                    children: Icons.star
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "12px",
                                                                fontWeight: 700,
                                                                color: "var(--status-awarded)",
                                                                textTransform: "uppercase",
                                                                letterSpacing: "0.06em",
                                                                marginBottom: "2px"
                                                            },
                                                            children: "System Recommendation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "15px",
                                                                fontWeight: 700,
                                                                color: "var(--text)"
                                                            },
                                                            children: bidsWithScores[0].vendor
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 296,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "13px",
                                                color: "var(--text-muted)",
                                                flex: 1
                                            },
                                            children: [
                                                "Highest overall score (",
                                                bidsWithScores[0].overall,
                                                "/100) based on price, scope completeness & bid leveling"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 313,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedVendorIdx(bidsWithScores[0].originalIdx),
                                            style: {
                                                background: "var(--status-awarded)",
                                                border: "none",
                                                color: "white",
                                                borderRadius: "6px",
                                                padding: "8px 16px",
                                                fontSize: "13px",
                                                fontWeight: 700,
                                                cursor: "pointer",
                                                fontFamily: "var(--font)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px"
                                            },
                                            children: [
                                                Icons.check,
                                                " Select Winner"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 316,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 290,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "var(--card)",
                                        borderRadius: "12px",
                                        border: "1px solid var(--border)",
                                        overflow: "hidden",
                                        boxShadow: "var(--shadow-xs)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: {
                                            width: "100%",
                                            borderCollapse: "separate",
                                            borderSpacing: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: "var(--bg)"
                                                    },
                                                    children: [
                                                        "VENDOR",
                                                        "BID AMOUNT",
                                                        "VARIANCE",
                                                        "SCOPE",
                                                        "PRCE SCORE",
                                                        "OVERALL SCORE",
                                                        "RANK",
                                                        ""
                                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                padding: "12px 16px",
                                                                fontSize: "11px",
                                                                fontWeight: 700,
                                                                color: "var(--text-muted)",
                                                                textTransform: "uppercase",
                                                                letterSpacing: "0.06em",
                                                                textAlign: "left",
                                                                whiteSpace: "nowrap",
                                                                borderBottom: "1px solid var(--border)"
                                                            },
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                lineNumber: 335,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: bidsWithScores.map((bid, rankIdx)=>{
                                                    const isRecommended = rankIdx === 0;
                                                    const isSelected = selectedVendorIdx === bid.originalIdx;
                                                    const bidVariance = pkg.budget && bid.amount > 0 ? ((bid.amount - pkg.budget) / pkg.budget * 100).toFixed(1) : null;
                                                    const bidVarVal = bidVariance ? parseFloat(bidVariance) : 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: isSelected ? "rgba(249,115,22,0.03)" : isRecommended ? "rgba(22,163,74,0.02)" : "var(--card)",
                                                            cursor: "pointer",
                                                            transition: "background 0.12s",
                                                            borderLeft: isSelected ? "3px solid var(--primary)" : isRecommended ? "3px solid var(--status-awarded)" : "3px solid transparent"
                                                        },
                                                        onClick: ()=>setSelectedVendorIdx(bid.originalIdx),
                                                        onMouseEnter: (e)=>{
                                                            if (!isSelected) e.currentTarget.style.background = "var(--bg)";
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = isSelected ? "rgba(249,115,22,0.03)" : isRecommended ? "rgba(22,163,74,0.02)" : "var(--card)";
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "8px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 700,
                                                                                    fontSize: "14px",
                                                                                    color: "var(--text)"
                                                                                },
                                                                                children: bid.vendor
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                                lineNumber: 375,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            isRecommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    background: "rgba(22,163,74,0.08)",
                                                                                    color: "var(--status-awarded)",
                                                                                    fontSize: "10px",
                                                                                    fontWeight: 700,
                                                                                    padding: "2px 7px",
                                                                                    borderRadius: "3px",
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    gap: "3px"
                                                                                },
                                                                                children: [
                                                                                    Icons.star,
                                                                                    " Recommended"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                        lineNumber: 374,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: "11px",
                                                                            color: "var(--text-muted)",
                                                                            marginTop: "2px"
                                                                        },
                                                                        children: [
                                                                            "Received ",
                                                                            bid.received
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "15px",
                                                                        fontWeight: 700,
                                                                        fontFamily: "var(--mono)",
                                                                        color: "var(--text)"
                                                                    },
                                                                    children: bid.amount > 0 ? fmt(bid.amount) : "TBD"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 393,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)"
                                                                },
                                                                children: bidVariance ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "12px",
                                                                        fontWeight: 700,
                                                                        fontFamily: "var(--mono)",
                                                                        padding: "3px 8px",
                                                                        borderRadius: "4px",
                                                                        background: bidVarVal <= 0 ? "rgba(5,150,105,0.08)" : "rgba(220,38,38,0.08)",
                                                                        color: bidVarVal <= 0 ? "var(--savings)" : "var(--status-overdue)"
                                                                    },
                                                                    children: [
                                                                        bidVarVal > 0 ? "+" : "",
                                                                        bidVariance,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 33
                                                                }, this) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "11px",
                                                                        fontWeight: 700,
                                                                        padding: "3px 8px",
                                                                        borderRadius: "4px",
                                                                        background: bid.scopeComplete === "Complete" ? "rgba(22,163,74,0.08)" : "rgba(245,158,11,0.08)",
                                                                        color: bid.scopeComplete === "Complete" ? "var(--status-awarded)" : "var(--status-reviewing)"
                                                                    },
                                                                    children: bid.scopeComplete
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)",
                                                                    minWidth: "120px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                                                    score: bid.priceScore,
                                                                    color: "var(--savings)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)",
                                                                    minWidth: "120px"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreBar, {
                                                                    score: bid.overall,
                                                                    color: rankIdx === 0 ? "var(--status-awarded)" : rankIdx === 1 ? "var(--status-bidding)" : "var(--border-dark)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        display: "inline-flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        width: "28px",
                                                                        height: "28px",
                                                                        borderRadius: "6px",
                                                                        fontSize: "12px",
                                                                        fontWeight: 800,
                                                                        fontFamily: "var(--mono)",
                                                                        background: rankIdx === 0 ? "rgba(22,163,74,0.1)" : rankIdx === 1 ? "rgba(37,99,235,0.08)" : "var(--bg)",
                                                                        color: rankIdx === 0 ? "var(--status-awarded)" : rankIdx === 1 ? "var(--status-bidding)" : "var(--text-muted)"
                                                                    },
                                                                    children: [
                                                                        "#",
                                                                        rankIdx + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 437,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: "14px 16px",
                                                                    borderBottom: "1px solid var(--border)"
                                                                },
                                                                children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "12px",
                                                                        fontWeight: 700,
                                                                        color: "var(--primary)",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: "4px"
                                                                    },
                                                                    children: [
                                                                        Icons.check,
                                                                        " Selected"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        setSelectedVendorIdx(bid.originalIdx);
                                                                    },
                                                                    style: {
                                                                        fontSize: "12px",
                                                                        fontWeight: 600,
                                                                        color: "var(--primary)",
                                                                        background: "none",
                                                                        border: "1px solid var(--primary-border)",
                                                                        borderRadius: "5px",
                                                                        padding: "4px 12px",
                                                                        cursor: "pointer",
                                                                        fontFamily: "var(--font)",
                                                                        transition: "all 0.15s"
                                                                    },
                                                                    onMouseEnter: (e)=>{
                                                                        e.currentTarget.style.background = "var(--primary)";
                                                                        e.currentTarget.style.color = "white";
                                                                    },
                                                                    onMouseLeave: (e)=>{
                                                                        e.currentTarget.style.background = "none";
                                                                        e.currentTarget.style.color = "var(--primary)";
                                                                    },
                                                                    children: "Select"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, bid.originalIdx, true, {
                                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                lineNumber: 348,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 334,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            animation: "fadeInUp 0.3s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "var(--card)",
                                    borderRadius: "12px",
                                    border: "1px solid var(--border)",
                                    padding: "20px",
                                    boxShadow: "var(--shadow-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "14px",
                                            fontWeight: 700,
                                            color: "var(--text)",
                                            marginBottom: "16px",
                                            paddingBottom: "10px",
                                            borderBottom: "1px solid var(--border)"
                                        },
                                        children: "Package Identity"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "14px"
                                        },
                                        children: [
                                            {
                                                label: "Trade",
                                                value: pkg.trade
                                            },
                                            {
                                                label: "CSI Division",
                                                value: pkg.csi
                                            },
                                            {
                                                label: "Project",
                                                value: pkg.project
                                            },
                                            {
                                                label: "Project Manager",
                                                value: pkg.pm
                                            },
                                            {
                                                label: "Priority",
                                                value: pkg.priority
                                            },
                                            {
                                                label: "Risk Level",
                                                value: pkg.risk
                                            }
                                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "11px",
                                                            fontWeight: 700,
                                                            color: "var(--text-muted)",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.06em",
                                                            marginBottom: "3px"
                                                        },
                                                        children: f.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "14px",
                                                            fontWeight: 600,
                                                            color: "var(--text)"
                                                        },
                                                        children: f.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, f.label, true, {
                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                lineNumber: 500,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 491,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "var(--card)",
                                    borderRadius: "12px",
                                    border: "1px solid var(--border)",
                                    padding: "20px",
                                    boxShadow: "var(--shadow-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "14px",
                                            fontWeight: 700,
                                            color: "var(--text)",
                                            marginBottom: "16px",
                                            paddingBottom: "10px",
                                            borderBottom: "1px solid var(--border)"
                                        },
                                        children: "Schedule & Financials"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "14px"
                                        },
                                        children: [
                                            {
                                                label: "Target Award",
                                                value: pkg.dueDate
                                            },
                                            {
                                                label: "On-Site Date",
                                                value: pkg.onSiteDate || "—"
                                            },
                                            {
                                                label: "Budget",
                                                value: fmt(pkg.budget)
                                            },
                                            {
                                                label: "Low Bid",
                                                value: fmt(pkg.lowBid)
                                            },
                                            {
                                                label: "Long Lead",
                                                value: pkg.longLead ? "Yes" : "No"
                                            },
                                            {
                                                label: "Contract Status",
                                                value: pkg.contractStatus
                                            }
                                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "11px",
                                                            fontWeight: 700,
                                                            color: "var(--text-muted)",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.06em",
                                                            marginBottom: "3px"
                                                        },
                                                        children: f.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "14px",
                                                            fontWeight: 600,
                                                            color: "var(--text)",
                                                            fontFamily: [
                                                                "Budget",
                                                                "Low Bid"
                                                            ].includes(f.label) ? "var(--mono)" : "var(--font)"
                                                        },
                                                        children: f.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, f.label, true, {
                                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                lineNumber: 520,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this),
                            pkg.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "1 / -1",
                                    background: "var(--card)",
                                    borderRadius: "12px",
                                    border: "1px solid var(--border)",
                                    padding: "20px",
                                    boxShadow: "var(--shadow-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "14px",
                                            fontWeight: 700,
                                            color: "var(--text)",
                                            marginBottom: "12px"
                                        },
                                        children: "Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 531,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "14px",
                                            color: "var(--text-secondary)",
                                            lineHeight: 1.6,
                                            margin: 0
                                        },
                                        children: pkg.notes
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                        lineNumber: 532,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                lineNumber: 530,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 487,
                        columnNumber: 11
                    }, this),
                    activeTab === "activity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "fadeInUp 0.3s ease"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "var(--card)",
                                borderRadius: "12px",
                                border: "1px solid var(--border)",
                                overflow: "hidden"
                            },
                            children: [
                                {
                                    icon: "📋",
                                    title: "Package created",
                                    time: "Apr 1, 2025",
                                    desc: "Added to buyout log by Jay Patel"
                                },
                                {
                                    icon: "📤",
                                    title: "RFP issued",
                                    time: "Apr 5, 2025",
                                    desc: `Sent to ${bids.length} vendor${bids.length !== 1 ? "s" : ""}`
                                },
                                {
                                    icon: "📥",
                                    title: "Bids received",
                                    time: "Apr 10–12, 2025",
                                    desc: `${bids.length} bid${bids.length !== 1 ? "s" : ""} submitted`
                                },
                                {
                                    icon: "🔍",
                                    title: "Scope leveling started",
                                    time: "Apr 14, 2025",
                                    desc: "Team reviewing inclusions/exclusions"
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "14px",
                                        padding: "16px 20px",
                                        borderBottom: i < 3 ? "1px solid var(--border)" : "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "8px",
                                                background: "var(--bg)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "16px",
                                                flexShrink: 0
                                            },
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 552,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        color: "var(--text)",
                                                        marginBottom: "2px"
                                                    },
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: "12px",
                                                        color: "var(--text-muted)"
                                                    },
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 558,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$buyout$2d$dashboard$2f$boulder$2d$dashboard$2d$main$2f$buyout$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginLeft: "auto",
                                                fontSize: "12px",
                                                color: "var(--text-light)",
                                                fontFamily: "var(--mono)",
                                                flexShrink: 0
                                            },
                                            children: item.time
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                            lineNumber: 562,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                                    lineNumber: 548,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                            lineNumber: 541,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/buyout-dashboard/boulder-dashboard-main/buyout-dashboard/src/app/buyouts/[id]/PackageDetailClient.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
const backBtnStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "var(--primary)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "var(--font)"
};
}),
];

//# sourceMappingURL=03ci_Documents_buyout-dashboard_boulder-dashboard-main_buyout-dashboard_src_0xj7~om._.js.map