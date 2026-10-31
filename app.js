/**
 * UniOne Platform Prototype — Reactive Application Engine
 * Superior University BS Software Engineering SRS v1.0
 * Fully responsive, loaded with rich demo data, with working buttons & modals.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. COMPREHENSIVE DEMO DATA STORE
  // =========================================================================
  const state = {
    currentUser: {
      name: 'Ali Haroon',
      rollNo: 'SU92-BSSEM-F24-296',
      program: 'BS Software Engineering',
      institution: 'Superior University',
      isVerified: true,
      initials: 'AH',
      email: 'su92.bssem.f24.296@superior.edu.pk',
      cgpa: '3.82'
    },
    activeTab: 'feed',
    feedFilter: 'all',
    feedSort: 'best', // 'best' or 'new'
    currentOppFilter: 'all',
    currentCommFilter: 'all',

    // 8 Realistic Feed Items (SRS 3.4)
    posts: [
      {
        id: 'post-1',
        type: 'discussion',
        author: {
          name: 'Sohaib Ammar',
          rollNo: 'SU92-BSSEM-F24-339',
          initials: 'SA',
          role: 'Backend Architect'
        },
        community: 'Software Architecture & Design Patterns',
        timeAgo: '28m ago',
        timestamp: Date.now() - 28 * 60 * 1000,
        title: 'Event Outbox Pattern vs Direct WebSockets for Chat Guarantees',
        content: 'In our SRS Section 2.1, we specify that PostgreSQL outbox tables must record chat events before acknowledgement. Has anyone benchmarked the insert latency under BullMQ fanout compared to ephemeral Redis pub/sub?',
        codeSnippet: `// Outbox record schema in NestJS
@Entity('message_outbox')
export class MessageOutbox {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() conversationId: string;
  @Column('jsonb') payload: Record<string, any>;
  @CreateDateColumn() createdAt: Date;
}`,
        votes: 46,
        hasUpvoted: false,
        replies: [
          {
            author: 'Raheem Rizwan',
            initials: 'RR',
            timeAgo: '15m ago',
            text: 'We benchmarked it on Docker locally: p95 insert latency remained below 12ms for batches of 50. The durability guarantee is well worth it.'
          },
          {
            author: 'Ali Haroon',
            initials: 'AH',
            timeAgo: '8m ago',
            text: 'Agreed! Drift on Flutter will also queue offline writes in local SQLite before reconciling, avoiding duplicate messages.'
          }
        ]
      },
      {
        id: 'post-2',
        type: 'collab',
        author: {
          name: 'Faizan Asghar',
          rollNo: 'SU92-BSSEM-F24-279',
          initials: 'FA',
          role: 'Senior Peer'
        },
        community: 'Final Year Capstone 2026 Hub',
        timeAgo: '1h ago',
        timestamp: Date.now() - 60 * 60 * 1000,
        title: 'Recruiting 1 UI/UX Specialist & 1 Cloud Engineer for Smart Campus IoT',
        content: 'We are designing an edge-computing occupancy and lecture room automation platform for Superior University campus. Hardware is funded by ORIC Innovation Grants.',
        collabData: {
          capacity: '2 of 4 Filled',
          hours: '12-15 hrs/wk',
          expiresIn: '5 Days Left',
          skills: ['Flutter', 'ESP32 / MQTT', 'Figma', 'Docker']
        },
        votes: 38,
        hasUpvoted: true,
        replies: [
          {
            author: 'M. Farhan Khan',
            initials: 'FK',
            timeAgo: '40m ago',
            text: 'Just submitted a message request. Have experience deploying Mosquitto brokers in container clusters.'
          }
        ]
      },
      {
        id: 'post-3',
        type: 'resource',
        author: {
          name: 'Dr. Zulfiqar Ahmad',
          rollNo: 'Faculty Advisor',
          initials: 'ZA',
          role: 'Associate Professor'
        },
        community: 'Superior University Official',
        timeAgo: '3h ago',
        timestamp: Date.now() - 3 * 3600 * 1000,
        title: 'Curated IEEE System Architecture Study Guides & Rubrics for 2026',
        content: 'The Software Engineering department has uploaded approved SRS and Architectural Design Document templates for all 6th and 7th semester capstones. Review Section 4 for non-functional latency targets.',
        votes: 112,
        hasUpvoted: false,
        replies: []
      },
      {
        id: 'post-4',
        type: 'discussion',
        author: {
          name: 'Ali Haroon',
          rollNo: 'SU92-BSSEM-F24-296',
          initials: 'AH',
          role: 'Lead Developer'
        },
        community: 'Mobile & Flutter Devs',
        timeAgo: '5h ago',
        timestamp: Date.now() - 5 * 3600 * 1000,
        title: 'Drift SQLite Reactive Streams with Riverpod 3 State Notifiers',
        content: 'Sharing our architecture approach for keeping chat feeds 100% readable while the user is disconnected in campus elevators or basements. Drift generates typed DAOs that emit streams straight into UI providers.',
        codeSnippet: `// Drift Reactive Query Stream
Stream<List<FeedPost>> watchCampusFeed() {
  return (select(feedPosts)
    ..orderBy([(t) => OrderingTerm.desc(t.createdAt)]))
    .watch();
}`,
        votes: 64,
        hasUpvoted: true,
        replies: [
          {
            author: 'Sohaib Ammar',
            initials: 'SA',
            timeAgo: '3h ago',
            text: 'The Riverpod 3 syntax makes lifecycle management so clean. Great writeup!'
          }
        ]
      },
      {
        id: 'post-5',
        type: 'collab',
        author: {
          name: 'Ameer Ali',
          rollNo: 'SU92-BSSEM-F24-310',
          initials: 'AA',
          role: 'ML Engineer'
        },
        community: 'Final Year Capstone 2026 Hub',
        timeAgo: '7h ago',
        timestamp: Date.now() - 7 * 3600 * 1000,
        title: 'Hackathon 2026: Fast-paced AI Agent Challenge — Seeking PyTorch Teammate',
        content: 'Building an automated agent that synthesizes academic papers and produces interactive knowledge graphs. Looking for a teammate strong in PyTorch, LangChain, or vector search.',
        collabData: {
          capacity: '1 of 3 Filled',
          hours: '15 hrs/wk',
          expiresIn: '7 Days Left',
          skills: ['Python', 'PyTorch', 'FastAPI', 'ChromaDB']
        },
        votes: 29,
        hasUpvoted: false,
        replies: []
      },
      {
        id: 'post-6',
        type: 'announcement',
        author: {
          name: 'Superior Placement Cell',
          rollNo: 'Official Office',
          initials: 'PC',
          role: 'Career Office'
        },
        community: 'Tech Careers & Placement Cell',
        timeAgo: '10h ago',
        timestamp: Date.now() - 10 * 3600 * 1000,
        title: 'Systems Limited & Arbisoft On-Campus Placement Test Schedule',
        content: 'Technical assessments for 7th & 8th semester software engineering students will be conducted on Tuesday in Computer Labs 4 & 5. Verify your UniOne profile before Monday midnight.',
        votes: 145,
        hasUpvoted: false,
        replies: []
      },
      {
        id: 'post-7',
        type: 'discussion',
        author: {
          name: 'M. Farhan Khan',
          rollNo: 'SU92-BSSEM-F24-281',
          initials: 'FK',
          role: 'Distributed Systems'
        },
        community: 'Software Architecture & Design Patterns',
        timeAgo: '12h ago',
        timestamp: Date.now() - 12 * 3600 * 1000,
        title: 'Evaluating Distributed Consensus and Raft in NestJS Microservices',
        content: 'When scaling WebSocket servers across multiple container nodes, how are you handling presence heartbeats? We found Valkey/Redis TTL keys provide sub-second eviction without Raft overhead.',
        votes: 52,
        hasUpvoted: false,
        replies: []
      },
      {
        id: 'post-8',
        type: 'resource',
        author: {
          name: 'Zainab Tariq',
          rollNo: 'SU92-BSSEM-F24-118',
          initials: 'ZT',
          role: 'UI/UX Specialist'
        },
        community: 'Mobile & Flutter Devs',
        timeAgo: '1d ago',
        timestamp: Date.now() - 24 * 3600 * 1000,
        title: 'Free Figma UI Kit & Design System Tokens for Superior SE Projects',
        content: 'Published a complete component library following Material 3 guidelines and accessible color contrast. Includes button states, card variants, and navigation bars.',
        votes: 88,
        hasUpvoted: false,
        replies: []
      }
    ],

    // 7 MVP Community Tiers (SRS 1.3 & 3.3)
    communities: [
      {
        id: 'comm-1',
        title: 'Superior University Official',
        type: 'institutional',
        badge: 'Institutional',
        members: 4250,
        description: 'Verified official university hub for announcements, academic calendars, faculty bulletins, and senate updates.',
        rules: [
          'Official university policies apply strictly.',
          'No spam, promotions or unofficial marketing.',
          'Respectful academic dialogue across all departments.'
        ],
        joinMode: 'joined' // auto-enrolled by SRS FR-04
      },
      {
        id: 'comm-2',
        title: 'Software Architecture & Design Patterns',
        type: 'academic',
        badge: 'Academic & Study',
        members: 840,
        description: 'Deep dive into microservices, OOP paradigms, UML modeling, refactoring, and clean code techniques.',
        rules: [
          'Code snippets must be formatted cleanly.',
          'Constructive feedback during peer design reviews.',
          'No sharing of exam or graded assignment solutions.'
        ],
        joinMode: 'instant'
      },
      {
        id: 'comm-3',
        title: 'Final Year Capstone 2026 Hub',
        type: 'project',
        badge: 'Project Work',
        members: 520,
        description: 'Collaboration ground for graduating seniors forming teams, reviewing proposals, and scheduling jury presentations.',
        rules: [
          'List verified skill requirements on collab requests.',
          'Respect workspace confidentiality and project IP.'
        ],
        joinMode: 'instant'
      },
      {
        id: 'comm-4',
        title: 'Tech Careers & Placement Cell',
        type: 'career',
        badge: 'Careers & Placement',
        members: 1890,
        description: 'Vetted internship opportunities, interview preparation circles, resume audits, and campus placement drives.',
        rules: [
          'Only verified organizations may post job listings.',
          'Compensation/stipend must be clearly stated.',
          'Report unpaid or scam requests immediately.'
        ],
        joinMode: 'instant'
      },
      {
        id: 'comm-5',
        title: 'Mobile & Flutter Devs',
        type: 'interest',
        badge: 'Open Interest',
        members: 1120,
        description: 'Passionate Flutter, Dart, iOS, and Android mobile engineers building state-of-the-art native and hybrid applications.',
        rules: [
          'Share open-source repositories and packages.',
          'Discuss best practices for Riverpod, Drift, and GoRouter.'
        ],
        joinMode: 'instant'
      },
      {
        id: 'comm-6',
        title: 'AI & Robotics Research Lab',
        type: 'private',
        badge: 'Private Groups',
        members: 140,
        description: 'Selective university laboratory conducting research in deep learning, automated vision, and robotic kinematics.',
        rules: [
          'Screening required by Lab Director.',
          'Must have completed Linear Algebra & Machine Learning prerequisites.'
        ],
        joinMode: 'request'
      },
      {
        id: 'comm-7',
        title: 'Dean Student Affairs Broadcasts',
        type: 'institutional',
        badge: 'Official Notices',
        members: 5800,
        description: 'Read-only broadcast channel for emergency weather notices, transport schedules, and campus events.',
        rules: ['Read-only channel managed by university administrators.'],
        joinMode: 'joined'
      }
    ],

    // 5 Structured Collaboration Requests (SRS 3.5 & FR-19)
    collabRequests: [
      {
        id: 'collab-1',
        title: 'UniOne Mobile Client (Flutter + Drift Engine)',
        desc: 'Building reactive offline-first SQLite database synchronization with Riverpod 3 and WebSockets.',
        capacity: '2 of 4 Filled',
        hours: '15 hrs/wk',
        deadline: 'Closes in 4 days',
        skills: ['Flutter', 'Drift (SQLite)', 'Riverpod 3', 'NestJS APIs']
      },
      {
        id: 'collab-2',
        title: 'Automated Attendance System via Vision',
        desc: 'YOLOv10 edge model running on Jetson Nano with RTSP camera feed for lecture halls.',
        capacity: '1 of 3 Filled',
        hours: '10 hrs/wk',
        deadline: 'Closes in 7 days',
        skills: ['Python', 'OpenCV', 'PyTorch', 'FastAPI']
      },
      {
        id: 'collab-3',
        title: 'Campus Food Delivery & Cafeteria Pre-Ordering',
        desc: 'Student meal pre-ordering to reduce cafeteria queues during 15-minute lecture breaks.',
        capacity: '3 of 5 Filled',
        hours: '12 hrs/wk',
        deadline: 'Closes in 9 days',
        skills: ['Flutter', 'Node.js', 'PostgreSQL', 'Stripe']
      },
      {
        id: 'collab-4',
        title: 'Blockchain Credential & Transcript Verifier',
        desc: 'Decentralized digital attestation for academic degrees preventing forged credentials.',
        capacity: '1 of 2 Filled',
        hours: '8 hrs/wk',
        deadline: 'Closes in 11 days',
        skills: ['Solidity', 'Web3.js', 'React', 'Cryptography']
      },
      {
        id: 'collab-5',
        title: 'Autonomous Drone Navigation for Precision Ag',
        desc: 'ROS2 flight controller and multispectral camera integration for crop disease detection.',
        capacity: '2 of 4 Filled',
        hours: '14 hrs/wk',
        deadline: 'Closes in 14 days',
        skills: ['ROS 2', 'C++', 'Computer Vision', 'Embedded Linux']
      }
    ],

    // 5 Verified Employer Opportunities (SRS 3.7 & FR-29 to FR-31)
    opportunities: [
      {
        id: 'opp-1',
        role: 'Software Engineering Intern (Summer 2026)',
        org: 'Systems Limited',
        type: 'internship',
        location: 'Lahore (Hybrid)',
        stipend: 'PKR 45,000 / month',
        duration: '3 Months',
        expiryDays: 'Expires in 6 days',
        applicantsCount: 34,
        description: 'Work alongside enterprise engineering teams building scalable cloud microservices with NestJS, TypeScript, Docker, and PostgreSQL.',
        criteria: [
          'Enrolled in BS Software Engineering (Semester 5 or above).',
          'Proficiency with Git, OOP, and Relational Databases.',
          'Active university verified standing on UniOne.'
        ]
      },
      {
        id: 'opp-2',
        role: 'Junior Flutter / Mobile Developer',
        org: 'Arbisoft',
        type: 'graduate',
        location: 'Lahore (On-site)',
        stipend: 'PKR 85,000 / month',
        duration: 'Permanent Full-time',
        expiryDays: 'Expires in 9 days',
        applicantsCount: 48,
        description: 'Develop high-performance Flutter mobile applications for international partners with clean architecture and automated test suites.',
        criteria: [
          'Graduating 2026 or recent alumnus.',
          'Demonstrated portfolio of at least 2 deployed mobile apps.',
          'Strong command of state management (Riverpod/Bloc).'
        ]
      },
      {
        id: 'opp-3',
        role: 'Undergraduate AI Research Fellow',
        org: 'Superior AI & Robotics Lab',
        type: 'research',
        location: 'Campus ORIC Lab',
        stipend: 'PKR 35,000 / month grant',
        duration: '6 Months',
        expiryDays: 'Expires in 12 days',
        applicantsCount: 18,
        description: 'Assist PhD researchers in fine-tuning open-weights foundation models for biomedical information extraction.',
        criteria: [
          'Minimum CGPA 3.4 in BS Software Engineering or CS.',
          'Experience with PyTorch or JAX and Hugging Face.',
          'Strong analytical and mathematical foundation.'
        ]
      },
      {
        id: 'opp-4',
        role: 'Backend Cloud Associate',
        org: 'NetSol Technologies',
        type: 'graduate',
        location: 'Lahore (Hybrid)',
        stipend: 'PKR 75,000 / month',
        duration: 'Full-time Graduate Track',
        expiryDays: 'Expires in 10 days',
        applicantsCount: 29,
        description: 'Build enterprise fintech services using Java Spring Boot, microservices architecture, and Kubernetes deployments.',
        criteria: [
          'Solid understanding of distributed systems and ACID transactions.',
          'Experience building RESTful and event-driven APIs.',
          'Final year student with verified clearance.'
        ]
      },
      {
        id: 'opp-5',
        role: 'Associate React & Frontend Engineer',
        org: 'Devsinc',
        type: 'graduate',
        location: 'Lahore (On-site)',
        stipend: 'PKR 70,000 / month',
        duration: 'Full-time Entry Level',
        expiryDays: 'Expires in 11 days',
        applicantsCount: 52,
        description: 'Collaborate with agile sprint teams delivering modern web SPAs using React 19, Next.js, TypeScript, and Tailwind CSS.',
        criteria: [
          'Excellent understanding of JavaScript/TypeScript fundamentals.',
          'Hands-on experience with responsive layouts and state stores.',
          'Strong collaborative problem-solving skills.'
        ]
      }
    ],

    // Direct Conversations & Message Requests (SRS 3.6)
    conversations: [
      {
        id: 'conv-1',
        name: 'Sohaib Ammar',
        initials: 'SA',
        role: 'Backend Architect • SU92-BSSEM-F24-339',
        status: 'Online',
        lastMessage: 'All Drift SQLite queries are indexed now.',
        time: '11:24 AM',
        unread: true,
        online: true,
        messages: [
          { sender: 'peer', text: 'Hey Ali! Did you check the outbox queue table migration?', time: '11:15 AM' },
          { sender: 'me', text: 'Yes, looking at it now. The composite index on status and created_at looks solid.', time: '11:18 AM' },
          { sender: 'peer', text: 'Great. Let’s make sure offline retries have an exponential backoff.', time: '11:20 AM' },
          { sender: 'peer', text: 'All Drift SQLite queries are indexed now.', time: '11:24 AM' }
        ]
      },
      {
        id: 'conv-2',
        name: 'Superior Capstone Team Room',
        initials: 'CP',
        role: 'Team Room • 7 Members',
        status: 'Active Team',
        lastMessage: 'Raheem: Pushed BullMQ worker schema.',
        time: '10:05 AM',
        unread: false,
        online: true,
        messages: [
          { sender: 'peer', text: 'Jury schedule has been uploaded for Demo Day.', time: '09:40 AM' },
          { sender: 'me', text: 'We have slot #3 on Thursday morning.', time: '09:42 AM' },
          { sender: 'peer', text: 'Pushed BullMQ worker schema.', time: '10:05 AM' }
        ]
      },
      {
        id: 'conv-3',
        name: 'Zainab Tariq',
        initials: 'ZT',
        role: 'UI/UX Specialist • SU92-BSSEM-F24-118',
        status: 'Away',
        lastMessage: 'Exported Figma tokens for dark forest theme.',
        time: 'Yesterday',
        unread: false,
        online: false,
        messages: [
          { sender: 'peer', text: 'Hi Ali, updated the responsive navigation layout.', time: 'Yesterday' },
          { sender: 'peer', text: 'Exported Figma tokens for dark forest theme.', time: 'Yesterday' }
        ]
      },
      {
        id: 'conv-4',
        name: 'Raheem Rizwan',
        initials: 'RR',
        role: 'Worker & Redis Lead • SU92-BSSEM-F24-303',
        status: 'Online',
        lastMessage: 'Worker queue throughput reached 850 jobs/sec.',
        time: 'Oct 29',
        unread: false,
        online: true,
        messages: [
          { sender: 'peer', text: 'Benchmark results are looking great on local Docker.', time: 'Oct 29' },
          { sender: 'peer', text: 'Worker queue throughput reached 850 jobs/sec.', time: 'Oct 29' }
        ]
      }
    ],

    messageRequests: [
      {
        id: 'req-1',
        name: 'Bilal Mustafa',
        initials: 'BM',
        major: 'BS Computer Science • Semester 4',
        text: 'Hello Ali, I saw your post regarding the Flutter mobile client. I have 1 year of experience building Dart state notifiers and would love to collaborate on your capstone!',
        time: '2h ago'
      },
      {
        id: 'req-2',
        name: 'Ayesha Noor',
        initials: 'AN',
        major: 'BS Software Engineering • Semester 6',
        text: 'Hi Ali! Can you share the schema references for the Drift SQLite offline table migrations? Writing a paper on local-first mobile architectures.',
        time: '4h ago'
      }
    ],

    // Campus Notifications (SRS 3.8)
    notifications: [
      {
        id: 'notif-1',
        initials: 'SA',
        text: '<strong>Sohaib Ammar</strong> replied to your discussion in <em>Software Architecture</em>',
        time: '15m ago',
        unread: true
      },
      {
        id: 'notif-2',
        initials: 'SL',
        text: '<strong>Systems Limited</strong> reviewed your verified internship application profile.',
        time: '1h ago',
        unread: true
      },
      {
        id: 'notif-3',
        initials: 'CP',
        text: 'Milestone <em>"Drift SQLite Local Migration v2"</em> was marked completed by <strong>Sohaib</strong>.',
        time: '3h ago',
        unread: true
      },
      {
        id: 'notif-4',
        initials: 'ZA',
        text: '<strong>Dr. Zulfiqar Ahmad</strong> published official IEEE capstone rubric guidelines.',
        time: '1d ago',
        unread: false
      }
    ],

    // Workspace Sprint Tasks (SRS 3.5 & FR-21)
    workspaceTasks: [
      { id: 't1', text: 'Implement Riverpod 3 State Notifiers for Feed Stream', assignee: 'Ali Haroon', done: true },
      { id: 't2', text: 'Drift SQLite Database Local Migration v2', assignee: 'Sohaib Ammar', done: true },
      { id: 't3', text: 'NestJS Outbox Table & WebSocket Gateway Envelope', assignee: 'Farhan Khan', done: true },
      { id: 't4', text: '14-Day Opportunity Expiration Cron Worker', assignee: 'Raheem Rizwan', done: false },
      { id: 't5', text: 'Anti-IDOR Authorization Guard Unit Tests', assignee: 'Ameer Ali', done: false }
    ],

    // 7 Capstone Students Team Roster (From Page 1 of SRS)
    rosterMembers: [
      { name: 'Ali Haroon', roll: 'SU92-BSSEM-F24-296', role: 'Project Lead & Mobile Client', initials: 'AH', isLead: true },
      { name: 'Sohaib Ammar', roll: 'SU92-BSSEM-F24-339', role: 'Backend & Outbox Architect', initials: 'SA', isLead: false },
      { name: 'Raheem Rizwan', roll: 'SU92-BSSEM-F24-303', role: 'Queue Worker & Redis Engineer', initials: 'RR', isLead: false },
      { name: 'Ameer Ali', roll: 'SU92-BSSEM-F24-310', role: 'Security & Anti-IDOR Tests', initials: 'AA', isLead: false },
      { name: 'M. Farhan Khan', roll: 'SU92-BSSEM-F24-281', role: 'Modular Monolith Gateway', initials: 'FK', isLead: false },
      { name: 'Faizan Asghar', roll: 'SU92-BSSEM-F24-279', role: 'UI/UX & Accessibility Review', initials: 'FA', isLead: false },
      { name: 'Muhammad Hammad', roll: 'SU92-BSSEM-F24-284', role: 'Database & FTS Query Engineer', initials: 'MH', isLead: false }
    ],

    // Team Chat Room in Workspace
    workspaceTeamChat: [
      { author: 'Sohaib Ammar', initials: 'SA', text: 'I just committed the database migration for Drift SQLite. Pull master before testing!', time: '10:45 AM' },
      { author: 'Ali Haroon', initials: 'AH', text: 'Running the mobile test suite now. All unit tests for the outbox pattern pass.', time: '10:48 AM' },
      { author: 'Raheem Rizwan', initials: 'RR', text: 'BullMQ worker queue concurrency is configured for 20 jobs/batch.', time: '11:10 AM' }
    ]
  };

  // =========================================================================
  // 2. DOM REFERENCES
  // =========================================================================
  const splashScreen = document.getElementById('splashScreen');
  const splashProgressBar = document.getElementById('splashProgressBar');
  const splashStatusText = document.getElementById('splashStatusText');
  const toastPopup = document.getElementById('toastPopup');
  const toastPopupMessage = document.getElementById('toastPopupMessage');

  // Navigation
  const appSidebar = document.getElementById('appSidebar');
  const btnToggleSidebar = document.getElementById('btnToggleSidebar');
  const navMenuItems = document.querySelectorAll('.nav-menu-item');
  const viewPanes = {
    feed: document.getElementById('pane-feed'),
    communities: document.getElementById('pane-communities'),
    collab: document.getElementById('pane-collab'),
    opportunities: document.getElementById('pane-opportunities'),
    messages: document.getElementById('pane-messages'),
    workspace: document.getElementById('pane-workspace'),
    profile: document.getElementById('pane-profile')
  };

  // Search
  const globalSearchInput = document.getElementById('globalSearchInput');
  const searchQuickDropdown = document.getElementById('searchQuickDropdown');

  // Modals
  const composerModal = document.getElementById('composerModal');
  const communityModal = document.getElementById('communityModal');
  const opportunityModal = document.getElementById('opportunityModal');
  const reportModal = document.getElementById('reportModal');
  const verifyDomainModal = document.getElementById('verifyDomainModal');

  // =========================================================================
  // 3. LAUNCH / SPLASH SEQUENCE
  // =========================================================================
  function runSplash() {
    splashScreen.classList.remove('fade-out', 'hidden');
    splashProgressBar.style.width = '0%';
    splashStatusText.textContent = 'Connecting to Superior academic registry...';

    setTimeout(() => {
      splashProgressBar.style.width = '45%';
      splashStatusText.textContent = 'Validating student verified credential...';
    }, 350);

    setTimeout(() => {
      splashProgressBar.style.width = '85%';
      splashStatusText.textContent = 'Synchronizing Drift SQLite offline cache...';
    }, 950);

    setTimeout(() => {
      splashProgressBar.style.width = '100%';
      splashStatusText.textContent = 'Ready! Welcome back, Ali.';
    }, 1500);

    setTimeout(() => {
      splashScreen.classList.add('fade-out');
      setTimeout(() => {
        splashScreen.classList.add('hidden');
      }, 450);
    }, 1900);
  }

  runSplash();

  document.getElementById('btnReplaySplashHeader').addEventListener('click', () => {
    runSplash();
    showToast('Replaying brand launch sequence');
  });

  document.getElementById('brandLogoTrigger').addEventListener('click', () => {
    switchTab('feed');
  });

  // =========================================================================
  // 4. TOAST NOTIFICATION UTILITY
  // =========================================================================
  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toastPopupMessage.textContent = message;
    toastPopup.classList.add('active');
    toastTimer = setTimeout(() => {
      toastPopup.classList.remove('active');
    }, 3400);
  }

  // =========================================================================
  // 5. RESPONSIVE NAVIGATION & TAB SWITCHING
  // =========================================================================
  function switchTab(tabKey) {
    state.activeTab = tabKey;

    // Update navigation sidebar active class
    navMenuItems.forEach(item => {
      if (item.dataset.tab === tabKey) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update content pane
    Object.keys(viewPanes).forEach(k => {
      if (k === tabKey) {
        viewPanes[k].classList.add('active');
      } else {
        viewPanes[k].classList.remove('active');
      }
    });

    // On mobile, close sidebar drawer
    if (window.innerWidth <= 820) {
      appSidebar.classList.remove('open');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navMenuItems.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Mobile drawer toggle
  btnToggleSidebar.addEventListener('click', () => {
    appSidebar.classList.toggle('open');
  });

  // Header quick buttons
  document.getElementById('btnOpenProfileHeader').addEventListener('click', () => {
    switchTab('profile');
  });

  document.getElementById('btnSideOpenWorkspace').addEventListener('click', () => {
    switchTab('workspace');
  });

  document.getElementById('btnGoToWorkspaceHero').addEventListener('click', () => {
    switchTab('workspace');
  });

  document.getElementById('btnSideApplyOpp').addEventListener('click', () => {
    openOpportunityModal(state.opportunities[0]);
  });

  // =========================================================================
  // 6. FEED RENDERING & INTERACTIONS (SRS 3.4)
  // =========================================================================
  const postsFeedContainer = document.getElementById('postsFeedContainer');
  const btnToggleSort = document.getElementById('btnToggleSort');
  const currentSortLabel = document.getElementById('currentSortLabel');
  const filterPills = document.querySelectorAll('.filter-pill');

  function renderFeed() {
    postsFeedContainer.innerHTML = '';

    // Filter
    let filtered = state.posts.filter(p => {
      if (state.feedFilter === 'all') return true;
      return p.type === state.feedFilter;
    });

    // Sort
    if (state.feedSort === 'best') {
      filtered.sort((a, b) => b.votes - a.votes);
    } else {
      filtered.sort((a, b) => b.timestamp - a.timestamp);
    }

    filtered.forEach(post => {
      const card = document.createElement('article');
      card.className = 'post-card';
      card.dataset.postId = post.id;

      // Collab specifics
      let collabHTML = '';
      if (post.type === 'collab' && post.collabData) {
        const skillsChips = post.collabData.skills
          .map(s => `<span class="skill-tag-pill">${s}</span>`)
          .join('');

        collabHTML = `
          <div class="collab-box-snippet">
            <div class="collab-specs-top">
              <span class="capacity-txt">
                <svg class="svg-icon mini" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                ${post.collabData.capacity}
              </span>
              <span class="timer-txt">
                <svg class="svg-icon mini" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                ${post.collabData.expiresIn}
              </span>
            </div>
            <div class="skills-tags-wrap">${skillsChips}</div>
          </div>
        `;
      }

      // Code preview
      let codeHTML = '';
      if (post.codeSnippet) {
        codeHTML = `
          <div class="code-preview-block">
            <div class="code-header-strip">
              <span>TypeScript / Dart Schema</span>
              <span>Drift + NestJS Contract</span>
            </div>
            <pre><code>${escapeHtml(post.codeSnippet)}</code></pre>
          </div>
        `;
      }

      // Replies HTML
      let repliesHTML = '';
      const replyList = post.replies.map(r => `
        <div class="thread-item-row">
          <div class="thread-avatar-mini">${r.initials}</div>
          <div class="thread-content-bubble">
            <div class="thread-meta-line">
              <span class="thread-author-name">${r.author}</span>
              <span class="thread-timestamp">${r.timeAgo}</span>
            </div>
            <p class="thread-body-text">${escapeHtml(r.text)}</p>
          </div>
        </div>
      `).join('');

      repliesHTML = `
        <div class="threaded-comments-container" id="threads-${post.id}">
          <div class="replies-wrapper-list">${replyList}</div>
          <form class="thread-composer-form" data-post-id="${post.id}">
            <input type="text" class="thread-input-field" placeholder="Add a constructive reply..." required>
            <button type="submit" class="action-btn-primary">Reply</button>
          </form>
        </div>
      `;

      card.innerHTML = `
        <div class="post-card-header">
          <div class="post-author-block">
            <div class="author-avatar">${post.author.initials}</div>
            <div class="author-meta">
              <div class="author-name-row">
                <strong>${post.author.name}</strong>
                <svg class="svg-icon mini" style="stroke: #557E61; width: 13px; height: 13px;" viewBox="0 0 24 24"><path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z"/></svg>
              </div>
              <div class="author-sub-line">
                <span class="comm-pill-link">${post.community}</span>
                <span>•</span>
                <span>${post.timeAgo}</span>
              </div>
            </div>
          </div>
          <button class="kebab-action-btn" data-post-id="${post.id}" title="Report or Block">
            <svg class="svg-icon mini" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
          </button>
        </div>

        <h3 class="post-headline">${escapeHtml(post.title)}</h3>
        <p class="post-narrative">${escapeHtml(post.content)}</p>

        ${collabHTML}
        ${codeHTML}

        <div class="post-action-bar">
          <div class="vote-counter-pill">
            <button class="btn-upvote ${post.hasUpvoted ? 'upvoted' : ''}" data-post-id="${post.id}" title="Upvote">
              <svg class="svg-icon mini" viewBox="0 0 24 24"><path d="M12 19V5m-7 7l7-7 7 7"/></svg>
            </button>
            <span class="vote-number">${post.votes}</span>
          </div>

          <button class="post-action-btn btn-open-replies" data-post-id="${post.id}">
            <svg class="svg-icon mini" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>${post.replies.length} Replies</span>
          </button>

          <button class="post-action-btn btn-share-link" data-post-id="${post.id}">
            <svg class="svg-icon mini" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            <span>Share</span>
          </button>
        </div>

        ${repliesHTML}
      `;

      postsFeedContainer.appendChild(card);
    });

    attachFeedListeners();
  }

  function attachFeedListeners() {
    // Upvotes
    document.querySelectorAll('.btn-upvote').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.dataset.postId;
        const post = state.posts.find(p => p.id === pid);
        if (!post) return;

        if (post.hasUpvoted) {
          post.votes -= 1;
          post.hasUpvoted = false;
        } else {
          post.votes += 1;
          post.hasUpvoted = true;
          showToast('Upvoted post in campus feed');
        }
        renderFeed();
      });
    });

    // Expand replies
    document.querySelectorAll('.btn-open-replies').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.dataset.postId;
        const threadBox = document.getElementById(`threads-${pid}`);
        if (threadBox) threadBox.classList.toggle('show');
      });
    });

    // Post reply
    document.querySelectorAll('.thread-composer-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const pid = form.dataset.postId;
        const input = form.querySelector('.thread-input-field');
        const text = input.value.trim();
        if (!text) return;

        const post = state.posts.find(p => p.id === pid);
        if (post) {
          post.replies.push({
            author: state.currentUser.name,
            initials: state.currentUser.initials,
            timeAgo: 'Just now',
            text: text
          });
          renderFeed();
          showToast('Reply published to discussion thread');
          const box = document.getElementById(`threads-${pid}`);
          if (box) box.classList.add('show');
        }
      });
    });

    // Share link
    document.querySelectorAll('.btn-share-link').forEach(btn => {
      btn.addEventListener('click', () => {
        navigator.clipboard?.writeText(window.location.href);
        showToast('Direct link copied to clipboard');
      });
    });

    // Kebab / Report
    document.querySelectorAll('.kebab-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        reportModal.classList.remove('hidden');
      });
    });
  }

  // Filter Pills Click
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.feedFilter = pill.dataset.filter;
      renderFeed();
    });
  });

  // Sort Toggle Click
  btnToggleSort.addEventListener('click', () => {
    if (state.feedSort === 'best') {
      state.feedSort = 'new';
      currentSortLabel.textContent = 'Newest (Recent)';
      showToast('Feed sorted by newest posts');
    } else {
      state.feedSort = 'best';
      currentSortLabel.textContent = 'Best (Highest Upvotes)';
      showToast('Feed sorted by upvotes');
    }
    renderFeed();
  });

  renderFeed();

  // =========================================================================
  // 7. POST COMPOSER MODAL (SRS 3.4 & FR-15)
  // =========================================================================
  const btnHeaderNewPost = document.getElementById('btnHeaderNewPost');
  const triggerComposerBox = document.getElementById('triggerComposerBox');
  const btnCloseComposer = document.getElementById('btnCloseComposer');
  const btnCancelComposer = document.getElementById('btnCancelComposer');
  const composerMainForm = document.getElementById('composerMainForm');
  const composerTypePills = document.querySelectorAll('.type-pill-btn');
  const composerCollabGroup = document.getElementById('composerCollabGroup');
  let currentPostType = 'discussion';

  function openComposer() {
    composerModal.classList.remove('hidden');
  }

  btnHeaderNewPost.addEventListener('click', openComposer);
  triggerComposerBox.addEventListener('click', openComposer);
  document.getElementById('btnQuickPostAction').addEventListener('click', (e) => {
    e.stopPropagation();
    openComposer();
  });
  document.getElementById('btnPostCollabHero').addEventListener('click', () => {
    openComposer();
    composerTypePills.forEach(b => {
      if (b.dataset.type === 'collab') b.click();
    });
  });

  btnCloseComposer.addEventListener('click', () => composerModal.classList.add('hidden'));
  btnCancelComposer.addEventListener('click', () => composerModal.classList.add('hidden'));

  composerTypePills.forEach(btn => {
    btn.addEventListener('click', () => {
      composerTypePills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPostType = btn.dataset.type;

      if (currentPostType === 'collab') {
        composerCollabGroup.classList.remove('hidden');
      } else {
        composerCollabGroup.classList.add('hidden');
      }
    });
  });

  composerMainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const targetComm = document.getElementById('composerTargetComm').value;
    const title = document.getElementById('composerPostTitle').value.trim();
    const content = document.getElementById('composerPostContent').value.trim();
    const code = document.getElementById('composerPostCode').value.trim();

    if (!title || !content) return;

    const newPost = {
      id: `post-${Date.now()}`,
      type: currentPostType,
      author: {
        name: state.currentUser.name,
        rollNo: state.currentUser.rollNo,
        initials: state.currentUser.initials,
        role: 'Verified Student'
      },
      community: targetComm,
      timeAgo: 'Just now',
      timestamp: Date.now(),
      title: title,
      content: content,
      codeSnippet: code || null,
      votes: 1,
      hasUpvoted: true,
      replies: []
    };

    if (currentPostType === 'collab') {
      const teammates = document.getElementById('collabTeammates').value || '2';
      const hours = document.getElementById('collabHoursInput').value || '10-15 hrs/wk';
      const skillsRaw = document.getElementById('collabSkillsInput').value || 'Flutter, Dart';
      newPost.collabData = {
        capacity: `0 of ${teammates} Filled`,
        hours: hours,
        expiresIn: '14 Days Left',
        skills: skillsRaw.split(',').map(s => s.trim()).filter(Boolean)
      };
    }

    state.posts.unshift(newPost);
    renderFeed();
    composerMainForm.reset();
    composerModal.classList.add('hidden');
    showToast('Post published to campus network!');
    switchTab('feed');
  });

  // =========================================================================
  // 8. COMMUNITIES (7 MVP TIERS) (SRS 3.3)
  // =========================================================================
  const communitiesGrid = document.getElementById('communitiesGrid');
  const sidebarPinnedComm = document.getElementById('sidebarPinnedComm');
  const commFilterChips = document.querySelectorAll('.cat-chip');

  function renderCommunities() {
    communitiesGrid.innerHTML = '';
    const filtered = state.communities.filter(c => {
      if (state.currentCommFilter === 'all') return true;
      return c.type === state.currentCommFilter;
    });

    filtered.forEach(comm => {
      const card = document.createElement('div');
      card.className = 'comm-card-item';
      card.dataset.commId = comm.id;

      let btnLabel = 'Join Community';
      let btnClass = 'comm-join-button';
      if (comm.joinMode === 'joined') {
        btnLabel = 'Joined';
        btnClass += ' joined';
      } else if (comm.joinMode === 'request') {
        btnLabel = 'Request Access';
      }

      card.innerHTML = `
        <div class="comm-card-top-row">
          <span class="comm-badge-label ${comm.type}">${comm.badge}</span>
          <span class="comm-members-text">${comm.members.toLocaleString()} members</span>
        </div>
        <h4 class="comm-card-title">${escapeHtml(comm.title)}</h4>
        <p class="comm-card-description">${escapeHtml(comm.description)}</p>
        <div class="comm-card-action-footer">
          <span style="font-size: 0.72rem; color: #557E61; font-weight: 700;">Verified Campus Community</span>
          <button class="${btnClass}" data-comm-id="${comm.id}">${btnLabel}</button>
        </div>
      `;

      card.addEventListener('click', () => openCommunityModal(comm));
      card.querySelector('.comm-join-button').addEventListener('click', (e) => {
        e.stopPropagation();
        openCommunityModal(comm);
      });

      communitiesGrid.appendChild(card);
    });

    // Pinned sidebar
    sidebarPinnedComm.innerHTML = '';
    state.communities.slice(0, 4).forEach(comm => {
      const b = document.createElement('button');
      b.className = 'pinned-comm-btn';
      b.innerHTML = `
        <span class="comm-tiny-dot"></span>
        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${comm.title}</span>
      `;
      b.addEventListener('click', () => {
        switchTab('communities');
        openCommunityModal(comm);
      });
      sidebarPinnedComm.appendChild(b);
    });
  }

  commFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      commFilterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.currentCommFilter = chip.dataset.commFilter;
      renderCommunities();
    });
  });

  renderCommunities();

  // Community Preview Modal
  let activeSelectedComm = null;
  const btnCloseCommunityModal = document.getElementById('btnCloseCommunityModal');
  const btnExecuteJoinModal = document.getElementById('btnExecuteJoinModal');
  const modalJoinBtnLabel = document.getElementById('modalJoinBtnLabel');
  const modalCommBadge = document.getElementById('modalCommBadge');
  const modalCommTitle = document.getElementById('modalCommTitle');
  const modalCommDesc = document.getElementById('modalCommDesc');
  const modalCommMembers = document.getElementById('modalCommMembers');
  const modalCommRules = document.getElementById('modalCommRules');
  const modalCommScreening = document.getElementById('modalCommScreening');

  function openCommunityModal(comm) {
    activeSelectedComm = comm;
    modalCommBadge.textContent = comm.badge;
    modalCommTitle.textContent = comm.title;
    modalCommDesc.textContent = comm.description;
    modalCommMembers.innerHTML = `
      <svg class="svg-icon mini" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
      ${comm.members.toLocaleString()} verified members
    `;

    modalCommRules.innerHTML = comm.rules
      .map(r => `<li>${escapeHtml(r)}</li>`)
      .join('');

    if (comm.joinMode === 'joined') {
      modalCommScreening.classList.add('hidden');
      modalJoinBtnLabel.textContent = 'Already a Member (View Feed)';
    } else if (comm.joinMode === 'request') {
      modalCommScreening.classList.remove('hidden');
      modalJoinBtnLabel.textContent = 'Submit Screening & Request Access';
    } else {
      modalCommScreening.classList.add('hidden');
      modalJoinBtnLabel.textContent = 'Instant Join Community';
    }

    communityModal.classList.remove('hidden');
  }

  btnCloseCommunityModal.addEventListener('click', () => communityModal.classList.add('hidden'));

  btnExecuteJoinModal.addEventListener('click', () => {
    if (!activeSelectedComm) return;

    if (activeSelectedComm.joinMode === 'joined') {
      communityModal.classList.add('hidden');
      switchTab('feed');
      return;
    }

    if (activeSelectedComm.joinMode === 'request') {
      showToast('Screening application submitted to Community Moderator');
    } else {
      activeSelectedComm.joinMode = 'joined';
      activeSelectedComm.members += 1;
      showToast(`Joined ${activeSelectedComm.title}!`);
    }

    communityModal.classList.add('hidden');
    renderCommunities();
  });

  document.getElementById('btnCreateCommunityTrigger').addEventListener('click', () => {
    showToast('Community Creation Proposal submitted to Student Affairs review queue');
  });

  // =========================================================================
  // 9. COLLABS & PROJECT DIRECTORY (SRS 3.5)
  // =========================================================================
  const collabDirectoryGrid = document.getElementById('collabDirectoryGrid');

  function renderCollabs() {
    collabDirectoryGrid.innerHTML = '';
    state.collabRequests.forEach(collab => {
      const card = document.createElement('div');
      card.className = 'collab-card-block';

      const skillsHTML = collab.skills
        .map(s => `<span class="skill-tag-pill">${s}</span>`)
        .join('');

      card.innerHTML = `
        <div class="collab-title-row">
          <h4>${escapeHtml(collab.title)}</h4>
          <span class="capacity-chip">${collab.capacity}</span>
        </div>
        <p class="collab-desc-text">${escapeHtml(collab.desc)}</p>
        <div class="skills-tags-wrap" style="margin-bottom: 12px;">${skillsHTML}</div>
        <div class="collab-card-footer">
          <span class="deadline-indicator">
            <svg class="svg-icon mini" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            ${collab.deadline}
          </span>
          <button class="action-btn-primary btn-apply-collab" data-collab-id="${collab.id}">
            Apply to Team
          </button>
        </div>
      `;

      card.querySelector('.btn-apply-collab').addEventListener('click', () => {
        showToast('Application sent to project lead with verified profile');
      });

      collabDirectoryGrid.appendChild(card);
    });
  }

  renderCollabs();

  // =========================================================================
  // 10. VERIFIED OPPORTUNITIES & APPLY (SRS 3.7)
  // =========================================================================
  const opportunitiesContainer = document.getElementById('opportunitiesContainer');
  const oppFilterBtns = document.querySelectorAll('.opp-filter-btn');
  const oppCountIndicator = document.getElementById('oppCountIndicator');
  const btnCloseOppModal = document.getElementById('btnCloseOppModal');
  const formOppApplyModal = document.getElementById('formOppApplyModal');
  let selectedOpp = null;

  function renderOpportunities() {
    opportunitiesContainer.innerHTML = '';
    const filtered = state.opportunities.filter(o => {
      if (state.currentOppFilter === 'all') return true;
      return o.type === state.currentOppFilter;
    });

    oppCountIndicator.textContent = `Showing ${filtered.length} vetted opportunities`;

    filtered.forEach(opp => {
      const card = document.createElement('div');
      card.className = 'opp-item-card';
      card.dataset.oppId = opp.id;

      card.innerHTML = `
        <div class="opp-primary-info">
          <div class="opp-org-badge">
            <svg class="svg-icon mini" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>${opp.org}</span>
          </div>
          <h3 class="opp-title-text">${escapeHtml(opp.role)}</h3>
          <div class="opp-meta-pills-row">
            <span class="opp-pill salary">${opp.stipend}</span>
            <span class="opp-pill">${opp.location}</span>
            <span class="opp-pill">${opp.duration}</span>
            <span class="opp-pill expiry">${opp.expiryDays}</span>
          </div>
        </div>

        <div class="opp-action-block">
          <button class="action-btn-primary btn-inspect-opp" data-opp-id="${opp.id}">
            View & Apply
          </button>
          <span class="applicant-count-note">${opp.applicantsCount} applicants</span>
        </div>
      `;

      card.addEventListener('click', () => openOpportunityModal(opp));
      card.querySelector('.btn-inspect-opp').addEventListener('click', (e) => {
        e.stopPropagation();
        openOpportunityModal(opp);
      });

      opportunitiesContainer.appendChild(card);
    });
  }

  oppFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      oppFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentOppFilter = btn.dataset.oppType;
      renderOpportunities();
    });
  });

  renderOpportunities();

  function openOpportunityModal(opp) {
    selectedOpp = opp;
    document.getElementById('modalOppRole').textContent = opp.role;
    document.getElementById('modalOppCompany').textContent = `${opp.org} • ${opp.location}`;
    document.getElementById('modalOppStipend').textContent = opp.stipend;
    document.getElementById('modalOppDuration').textContent = opp.duration;
    document.getElementById('modalOppExpiry').textContent = opp.expiryDays;
    document.getElementById('modalOppDesc').textContent = opp.description;

    const critList = document.getElementById('modalOppCriteria');
    critList.innerHTML = opp.criteria
      .map(c => `<li>${escapeHtml(c)}</li>`)
      .join('');

    opportunityModal.classList.remove('hidden');
  }

  btnCloseOppModal.addEventListener('click', () => opportunityModal.classList.add('hidden'));

  formOppApplyModal.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!selectedOpp) return;
    selectedOpp.applicantsCount += 1;
    renderOpportunities();
    opportunityModal.classList.add('hidden');
    formOppApplyModal.reset();
    showToast(`Verified application submitted to ${selectedOpp.org}!`);
  });

  // =========================================================================
  // 11. DIRECT MESSAGES & REAL-TIME CHAT (SRS 3.6)
  // =========================================================================
  const convsList = document.getElementById('convsList');
  const reqsList = document.getElementById('reqsList');
  const btnSwitchDirectChat = document.getElementById('btnSwitchDirectChat');
  const btnSwitchRequestsChat = document.getElementById('btnSwitchRequestsChat');
  const activeChatAvatar = document.getElementById('activeChatAvatar');
  const activeChatName = document.getElementById('activeChatName');
  const activeChatSub = document.getElementById('activeChatSub');
  const activeChatMessagesScroll = document.getElementById('activeChatMessagesScroll');
  const chatTypingRow = document.getElementById('chatTypingRow');
  const chatTypingName = document.getElementById('chatTypingName');
  const activeChatSendForm = document.getElementById('activeChatSendForm');
  const inputChatMessageText = document.getElementById('inputChatMessageText');
  let currentActiveConv = state.conversations[0];

  function renderConversationsList() {
    convsList.innerHTML = '';
    state.conversations.forEach(conv => {
      const row = document.createElement('div');
      row.className = `conversation-row ${conv.id === currentActiveConv?.id ? 'active' : ''} ${conv.unread ? 'unread' : ''}`;
      row.dataset.convId = conv.id;

      row.innerHTML = `
        <div class="conv-avatar-box">
          ${conv.initials}
          ${conv.online ? '<span class="status-online-dot"></span>' : ''}
        </div>
        <div class="conv-details">
          <div class="conv-header-row">
            <strong class="conv-person-name">${escapeHtml(conv.name)}</strong>
            <span class="conv-time-text">${conv.time}</span>
          </div>
          <p class="conv-snippet-text">${escapeHtml(conv.lastMessage)}</p>
        </div>
      `;

      row.addEventListener('click', () => {
        selectConversation(conv);
      });

      convsList.appendChild(row);
    });
  }

  function renderRequestsList() {
    reqsList.innerHTML = '';
    document.getElementById('chatRequestsCount').textContent = state.messageRequests.length;

    if (state.messageRequests.length === 0) {
      reqsList.innerHTML = '<p style="text-align: center; color: #788A80; font-size: 0.8rem; padding: 24px;">No pending message requests.</p>';
      return;
    }

    state.messageRequests.forEach(req => {
      const card = document.createElement('div');
      card.style.cssText = 'padding: 14px; border-bottom: 1px solid var(--color-border-subtle); background: #FAF9F5;';

      card.innerHTML = `
        <div style="display: flex; gap: 10px; margin-bottom: 8px;">
          <div class="conv-avatar-box" style="width: 36px; height: 36px;">${req.initials}</div>
          <div>
            <strong style="font-size: 0.84rem; color: #163827; display: block;">${escapeHtml(req.name)}</strong>
            <span style="font-size: 0.68rem; color: #66766C;">${escapeHtml(req.major)}</span>
          </div>
        </div>
        <p style="font-size: 0.78rem; color: #34433A; line-height: 1.4; margin-bottom: 10px;">"${escapeHtml(req.text)}"</p>
        <div style="display: flex; gap: 8px;">
          <button class="action-btn-primary btn-accept-req" style="flex: 1; padding: 6px;" data-req-id="${req.id}">Accept</button>
          <button class="action-btn-secondary btn-decline-req" style="flex: 1; padding: 6px; color: #C0392B;" data-req-id="${req.id}">Decline</button>
        </div>
      `;

      card.querySelector('.btn-accept-req').addEventListener('click', () => {
        // Move to conversations
        const newConv = {
          id: `conv-${Date.now()}`,
          name: req.name,
          initials: req.initials,
          role: req.major,
          status: 'Online',
          lastMessage: req.text,
          time: 'Just now',
          unread: false,
          online: true,
          messages: [{ sender: 'peer', text: req.text, time: 'Just now' }]
        };
        state.conversations.push(newConv);
        state.messageRequests = state.messageRequests.filter(r => r.id !== req.id);
        renderRequestsList();
        renderConversationsList();
        selectConversation(newConv);
        btnSwitchDirectChat.click();
        showToast(`Accepted message request from ${req.name}`);
      });

      card.querySelector('.btn-decline-req').addEventListener('click', () => {
        state.messageRequests = state.messageRequests.filter(r => r.id !== req.id);
        renderRequestsList();
        showToast('Message request declined');
      });

      reqsList.appendChild(card);
    });
  }

  function selectConversation(conv) {
    currentActiveConv = conv;
    conv.unread = false;
    renderConversationsList();

    activeChatAvatar.textContent = conv.initials;
    activeChatName.textContent = conv.name;
    activeChatSub.innerHTML = `${conv.role} • <span class="status-online-text">${conv.status}</span>`;

    activeChatMessagesScroll.innerHTML = '';
    conv.messages.forEach(msg => {
      const bubbleRow = document.createElement('div');
      bubbleRow.className = `chat-bubble-row ${msg.sender}`;
      bubbleRow.innerHTML = `
        <div class="bubble-text-box">${escapeHtml(msg.text)}</div>
        <span class="bubble-time-stamp">${msg.time}</span>
      `;
      activeChatMessagesScroll.appendChild(bubbleRow);
    });

    activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;
  }

  btnSwitchDirectChat.addEventListener('click', () => {
    btnSwitchDirectChat.classList.add('active');
    btnSwitchRequestsChat.classList.remove('active');
    convsList.classList.remove('hidden');
    reqsList.classList.add('hidden');
  });

  btnSwitchRequestsChat.addEventListener('click', () => {
    btnSwitchRequestsChat.classList.add('active');
    btnSwitchDirectChat.classList.remove('active');
    reqsList.classList.remove('hidden');
    convsList.classList.add('hidden');
  });

  // Chat message send & simulated peer reply
  activeChatSendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentActiveConv) return;
    const text = inputChatMessageText.value.trim();
    if (!text) return;

    // Send my message
    const myMsg = { sender: 'me', text: text, time: 'Just now' };
    currentActiveConv.messages.push(myMsg);
    currentActiveConv.lastMessage = `You: ${text}`;
    currentActiveConv.time = 'Just now';

    const bubbleRow = document.createElement('div');
    bubbleRow.className = 'chat-bubble-row me';
    bubbleRow.innerHTML = `
      <div class="bubble-text-box">${escapeHtml(text)}</div>
      <span class="bubble-time-stamp">Just now</span>
    `;
    activeChatMessagesScroll.appendChild(bubbleRow);
    inputChatMessageText.value = '';
    activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;

    // Simulate typing and peer reply
    setTimeout(() => {
      chatTypingName.textContent = currentActiveConv.name.split(' ')[0];
      chatTypingRow.classList.remove('hidden');
      activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;

      setTimeout(() => {
        chatTypingRow.classList.add('hidden');
        const replyText = 'Received on Drift SQLite database! Reconciled with backend outbox.';
        const peerMsg = { sender: 'peer', text: replyText, time: 'Just now' };
        currentActiveConv.messages.push(peerMsg);
        currentActiveConv.lastMessage = replyText;

        const peerRow = document.createElement('div');
        peerRow.className = 'chat-bubble-row peer';
        peerRow.innerHTML = `
          <div class="bubble-text-box">${escapeHtml(replyText)}</div>
          <span class="bubble-time-stamp">Just now</span>
        `;
        activeChatMessagesScroll.appendChild(peerRow);
        activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;
        renderConversationsList();
      }, 1400);
    }, 700);
  });

  document.getElementById('btnReportChatUser').addEventListener('click', () => {
    reportModal.classList.remove('hidden');
  });

  // Filter conversations
  document.getElementById('inputFilterConvs').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.conversation-row').forEach(row => {
      const name = row.querySelector('.conv-person-name').textContent.toLowerCase();
      row.style.display = name.includes(q) ? 'flex' : 'none';
    });
  });

  renderConversationsList();
  renderRequestsList();
  selectConversation(state.conversations[0]);

  // =========================================================================
  // 12. PROJECT WORKSPACE (SRS 3.5 & FR-21)
  // =========================================================================
  const wsTabBtns = document.querySelectorAll('.ws-tab-btn');
  const wsSections = {
    tasks: document.getElementById('wsSectionTasks'),
    roster: document.getElementById('wsSectionRoster'),
    teamchat: document.getElementById('wsSectionTeamchat')
  };
  const wsTasksList = document.getElementById('wsTasksList');
  const wsProgressPercent = document.getElementById('wsProgressPercent');
  const wsProgressBarFill = document.getElementById('wsProgressBarFill');
  const wsRosterGrid = document.getElementById('wsRosterGrid');
  const wsTeamChatMessages = document.getElementById('wsTeamChatMessages');
  const formTeamChatSend = document.getElementById('formTeamChatSend');
  const inputTeamChatMessage = document.getElementById('inputTeamChatMessage');

  wsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      wsTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const secKey = btn.dataset.wsSection;

      Object.keys(wsSections).forEach(k => {
        if (k === secKey) wsSections[k].classList.add('active');
        else wsSections[k].classList.remove('active');
      });
    });
  });

  function renderWorkspaceTasks() {
    wsTasksList.innerHTML = '';
    const completedCount = state.workspaceTasks.filter(t => t.done).length;
    const totalCount = state.workspaceTasks.length;
    const pct = Math.round((completedCount / totalCount) * 100);

    wsProgressPercent.textContent = `${pct}% Completed (${completedCount} of ${totalCount})`;
    wsProgressBarFill.style.width = `${pct}%`;

    state.workspaceTasks.forEach(task => {
      const card = document.createElement('div');
      card.className = `task-item-card ${task.done ? 'done' : ''}`;
      card.innerHTML = `
        <input type="checkbox" class="task-checkbox-input" ${task.done ? 'checked' : ''} data-task-id="${task.id}">
        <div class="task-content-details">
          <div class="task-title-line">${escapeHtml(task.text)}</div>
          <span class="task-assignee-tag">${task.assignee} • ${task.done ? 'Completed' : 'Pending'}</span>
        </div>
      `;

      card.querySelector('.task-checkbox-input').addEventListener('change', (e) => {
        task.done = e.target.checked;
        renderWorkspaceTasks();
        showToast(task.done ? 'Milestone marked completed' : 'Milestone marked pending');
      });

      wsTasksList.appendChild(card);
    });
  }

  function renderRoster() {
    wsRosterGrid.innerHTML = '';
    state.rosterMembers.forEach(mem => {
      const card = document.createElement('div');
      card.className = 'roster-card';
      card.innerHTML = `
        <div class="roster-avatar-circle">${mem.initials}</div>
        <div style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
            <strong style="font-size: 0.84rem; color: #163827;">${mem.name}</strong>
            <span class="roster-role-tag ${mem.isLead ? 'lead' : ''}">${mem.isLead ? 'Lead' : 'Member'}</span>
          </div>
          <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #557E61; display: block;">${mem.roll}</span>
          <span style="font-size: 0.72rem; color: #64756B;">${mem.role}</span>
        </div>
      `;
      wsRosterGrid.appendChild(card);
    });
  }

  function renderTeamChat() {
    wsTeamChatMessages.innerHTML = '';
    state.workspaceTeamChat.forEach(msg => {
      const bubble = document.createElement('div');
      bubble.className = `team-msg-bubble ${msg.author.includes('Ali') ? 'me' : 'peer'}`;
      bubble.style.cssText = `
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 0.8rem;
        max-width: 80%;
        background: ${msg.author.includes('Ali') ? 'var(--color-forest-primary)' : '#FFFFFF'};
        color: ${msg.author.includes('Ali') ? '#FFFFFF' : 'var(--color-text-title)'};
        border: 1px solid var(--color-border-subtle);
        align-self: ${msg.author.includes('Ali') ? 'flex-end' : 'flex-start'};
      `;
      bubble.innerHTML = `
        <span style="font-size: 0.68rem; font-weight: 700; color: ${msg.author.includes('Ali') ? '#A3BD7D' : '#1F4C36'}; display: block; margin-bottom: 2px;">${msg.author}</span>
        <p>${escapeHtml(msg.text)}</p>
        <span style="font-size: 0.62rem; opacity: 0.7; display: block; text-align: right; margin-top: 3px;">${msg.time}</span>
      `;
      wsTeamChatMessages.appendChild(bubble);
    });
    wsTeamChatMessages.scrollTop = wsTeamChatMessages.scrollHeight;
  }

  formTeamChatSend.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = inputTeamChatMessage.value.trim();
    if (!text) return;
    state.workspaceTeamChat.push({
      author: 'Ali Haroon (You)',
      initials: 'AH',
      text: text,
      time: 'Just now'
    });
    inputTeamChatMessage.value = '';
    renderTeamChat();
  });

  renderWorkspaceTasks();
  renderRoster();
  renderTeamChat();

  // =========================================================================
  // 13. NOTIFICATIONS POPOVER (SRS 3.8)
  // =========================================================================
  const btnNotificationsToggle = document.getElementById('btnNotificationsToggle');
  const notificationsDropdown = document.getElementById('notificationsDropdown');
  const notificationsList = document.getElementById('notificationsList');
  const notifUnreadBadge = document.getElementById('notifUnreadBadge');
  const btnMarkAllNotifsRead = document.getElementById('btnMarkAllNotifsRead');

  btnNotificationsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    notificationsDropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!notificationsDropdown.contains(e.target) && e.target !== btnNotificationsToggle) {
      notificationsDropdown.classList.add('hidden');
    }
  });

  function renderNotifications() {
    notificationsList.innerHTML = '';
    const unreadCount = state.notifications.filter(n => n.unread).length;
    notifUnreadBadge.textContent = unreadCount;
    notifUnreadBadge.style.display = unreadCount > 0 ? 'inline-block' : 'none';

    state.notifications.forEach(n => {
      const item = document.createElement('div');
      item.className = `notif-item ${n.unread ? 'unread' : ''}`;
      item.innerHTML = `
        <div class="notif-avatar">${n.initials}</div>
        <div class="notif-content">
          <p class="notif-text">${n.text}</p>
          <span class="notif-time">${n.time}</span>
        </div>
      `;
      item.addEventListener('click', () => {
        n.unread = false;
        renderNotifications();
        showToast('Notification opened');
        notificationsDropdown.classList.add('hidden');
      });
      notificationsList.appendChild(item);
    });
  }

  btnMarkAllNotifsRead.addEventListener('click', () => {
    state.notifications.forEach(n => n.unread = false);
    renderNotifications();
    showToast('All notifications marked as read');
  });

  renderNotifications();

  // =========================================================================
  // 14. UNIVERSAL SEARCH (SRS 3.8)
  // =========================================================================
  globalSearchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      searchQuickDropdown.classList.add('hidden');
      searchQuickDropdown.innerHTML = '';
      return;
    }

    searchQuickDropdown.innerHTML = '';

    // Matches in posts
    const postMatches = state.posts.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q));
    // Matches in communities
    const commMatches = state.communities.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
    // Matches in opportunities
    const oppMatches = state.opportunities.filter(o => o.role.toLowerCase().includes(q) || o.org.toLowerCase().includes(q));

    let count = 0;

    commMatches.forEach(c => {
      count++;
      const row = document.createElement('div');
      row.style.cssText = 'padding: 8px 12px; cursor: pointer; border-radius: 6px; display: flex; align-items: center; gap: 8px; font-size: 0.8rem;';
      row.innerHTML = `
        <span style="font-size: 0.64rem; font-weight: 800; background: var(--color-mint-subtle); color: var(--color-forest-medium); padding: 2px 6px; border-radius: 4px;">COMMUNITY</span>
        <strong style="color: #163827;">${escapeHtml(c.title)}</strong>
      `;
      row.addEventListener('click', () => {
        searchQuickDropdown.classList.add('hidden');
        globalSearchInput.value = '';
        switchTab('communities');
        openCommunityModal(c);
      });
      searchQuickDropdown.appendChild(row);
    });

    oppMatches.forEach(o => {
      count++;
      const row = document.createElement('div');
      row.style.cssText = 'padding: 8px 12px; cursor: pointer; border-radius: 6px; display: flex; align-items: center; gap: 8px; font-size: 0.8rem;';
      row.innerHTML = `
        <span style="font-size: 0.64rem; font-weight: 800; background: #FDF5E8; color: var(--color-gold-amber); padding: 2px 6px; border-radius: 4px;">CAREER</span>
        <strong style="color: #163827;">${escapeHtml(o.role)}</strong> (${escapeHtml(o.org)})
      `;
      row.addEventListener('click', () => {
        searchQuickDropdown.classList.add('hidden');
        globalSearchInput.value = '';
        switchTab('opportunities');
        openOpportunityModal(o);
      });
      searchQuickDropdown.appendChild(row);
    });

    postMatches.forEach(p => {
      count++;
      const row = document.createElement('div');
      row.style.cssText = 'padding: 8px 12px; cursor: pointer; border-radius: 6px; display: flex; align-items: center; gap: 8px; font-size: 0.8rem;';
      row.innerHTML = `
        <span style="font-size: 0.64rem; font-weight: 800; background: #EAF4EE; color: var(--color-forest-medium); padding: 2px 6px; border-radius: 4px;">POST</span>
        <strong style="color: #163827;">${escapeHtml(p.title)}</strong>
      `;
      row.addEventListener('click', () => {
        searchQuickDropdown.classList.add('hidden');
        globalSearchInput.value = '';
        switchTab('feed');
      });
      searchQuickDropdown.appendChild(row);
    });

    if (count > 0) {
      searchQuickDropdown.classList.remove('hidden');
    } else {
      searchQuickDropdown.innerHTML = '<div style="padding: 12px; font-size: 0.78rem; color: #64756B; text-align: center;">No matches found in academic database</div>';
      searchQuickDropdown.classList.remove('hidden');
    }
  });

  // Global search shortcut "/"
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== globalSearchInput && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      globalSearchInput.focus();
    }
  });

  // =========================================================================
  // 15. SAFETY REPORTING & IMMUTABLE AUDIT LOG (SRS 3.9)
  // =========================================================================
  const btnCloseReportModal = document.getElementById('btnCloseReportModal');
  const formSubmitReport = document.getElementById('formSubmitReport');

  btnCloseReportModal.addEventListener('click', () => reportModal.classList.add('hidden'));

  formSubmitReport.addEventListener('submit', (e) => {
    e.preventDefault();
    const reason = document.querySelector('input[name="reportReason"]:checked').value;
    reportModal.classList.add('hidden');
    showToast(`Safety Report recorded in immutable audit log: Reason [${reason.toUpperCase()}]`);
  });

  // =========================================================================
  // 16. UNIVERSITY DOMAIN & OTP VERIFICATION DEMO (SRS 3.1 & UC-01)
  // =========================================================================
  const btnVerifyDomainHeader = document.getElementById('btnVerifyDomainHeader');
  const btnCloseVerifyModal = document.getElementById('btnCloseVerifyModal');
  const btnConfirmOtpModal = document.getElementById('btnConfirmOtpModal');

  btnVerifyDomainHeader.addEventListener('click', () => {
    verifyDomainModal.classList.remove('hidden');
  });

  btnCloseVerifyModal.addEventListener('click', () => {
    verifyDomainModal.classList.add('hidden');
  });

  btnConfirmOtpModal.addEventListener('click', () => {
    verifyDomainModal.classList.add('hidden');
    showToast('University identity verified! Enrolled in Software Engineering hub.');
    runSplash();
  });

  // Profile Privacy Controls
  document.getElementById('toggleRollVisibility').addEventListener('change', (e) => {
    showToast(e.target.checked ? 'Roll number visible to verified peers' : 'Roll number hidden from public');
  });
  document.getElementById('toggleMsgRequests').addEventListener('change', (e) => {
    showToast(e.target.checked ? 'Direct message requests enabled' : 'Direct messages restricted to project teams');
  });
  document.getElementById('btnEditProfileTrigger').addEventListener('click', () => {
    showToast('Profile editing enabled');
  });

  // Helper Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

});
