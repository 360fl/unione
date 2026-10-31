/**
 * UniOne Application Prototype Engine
 * Centered Brand Header, Minimalist Copy, Mobile-First Bottom Navigation
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // STATE STORE (Concise, Clean Demo Data)
  // =========================================================================
  const state = {
    currentUser: {
      name: 'Ali Haroon',
      rollNo: 'SU92-BSSEM-F24-296',
      initials: 'AH',
      email: 'su92.bssem.f24.296@superior.edu.pk'
    },
    activeTab: 'feed',
    feedFilter: 'all',
    feedSort: 'best',
    currentCommFilter: 'all',
    currentOppFilter: 'all',

    // Feed Items (Minimal, Clean UI Copy)
    posts: [
      {
        id: 'post-1',
        type: 'discussion',
        author: 'Superior Campus Office',
        initials: 'SO',
        community: 'Campus Events',
        timeAgo: '15m ago',
        timestamp: Date.now() - 15 * 60 * 1000,
        title: 'Annual Tech Summit & Capstone Demo Day 2026',
        content: 'Industry jury panels from Systems Limited, Arbisoft, and Devsinc on campus. Final project submissions close this week.',
        image: 'img_tech_summit.svg',
        votes: 118,
        hasUpvoted: true
      },
      {
        id: 'post-2',
        type: 'collab',
        author: 'Faizan Asghar',
        initials: 'FA',
        community: 'Capstone 2026 Hub',
        timeAgo: '1h ago',
        timestamp: Date.now() - 60 * 60 * 1000,
        title: 'Recruiting 1 UI Designer for Smart Campus IoT',
        content: 'Hardware funded by campus lab. Looking for a teammate with Figma and mobile layout experience.',
        collabCapacity: '2 of 4 filled',
        skills: ['Flutter', 'Figma', 'MQTT'],
        image: 'img_iot_project.svg',
        votes: 42,
        hasUpvoted: true
      },
      {
        id: 'post-3',
        type: 'resource',
        author: 'Dr. Zulfiqar Ahmad',
        initials: 'ZA',
        community: 'Superior Official',
        timeAgo: '3h ago',
        timestamp: Date.now() - 3 * 3600 * 1000,
        title: 'IEEE Capstone Rubric & Defense Guidelines',
        content: 'Templates uploaded for 6th and 7th semester students. Review milestone rubrics before Friday.',
        votes: 98,
        hasUpvoted: false
      },
      {
        id: 'post-4',
        type: 'discussion',
        author: 'Ali Haroon',
        initials: 'AH',
        community: 'Mobile & Flutter Devs',
        timeAgo: '6h ago',
        timestamp: Date.now() - 6 * 3600 * 1000,
        title: 'Drift SQLite Local Caching in Flutter',
        content: 'Generating typed reactive streams so feeds stay readable even when offline.',
        votes: 56,
        hasUpvoted: false
      }
    ],

    // 7 Communities (Concise Descriptions)
    communities: [
      {
        id: 'c-1',
        title: 'Superior University Official',
        type: 'academic',
        badge: 'Official',
        members: 4250,
        desc: 'Official campus announcements, academic bulletins, and schedules.',
        rules: ['Official university policies apply.', 'No commercial spam.'],
        joinMode: 'joined'
      },
      {
        id: 'c-2',
        title: 'Software Architecture',
        type: 'academic',
        badge: 'Study',
        members: 840,
        desc: 'Clean architecture, design patterns, and distributed systems.',
        rules: ['Academic discussions only.', 'Constructive reviews.'],
        joinMode: 'instant'
      },
      {
        id: 'c-3',
        title: 'Capstone 2026 Hub',
        type: 'project',
        badge: 'Project',
        members: 520,
        desc: 'Graduating seniors team matching and proposal defense.',
        rules: ['Post verified project requirements.'],
        joinMode: 'instant'
      },
      {
        id: 'c-4',
        title: 'Placement Cell & Careers',
        type: 'career',
        badge: 'Careers',
        members: 1890,
        desc: 'Vetted internships, resume reviews, and campus recruitment.',
        rules: ['Verified company listings only.', 'Clear stipend stated.'],
        joinMode: 'instant'
      },
      {
        id: 'c-5',
        title: 'Mobile & Flutter Devs',
        type: 'interest',
        badge: 'Interest',
        members: 1120,
        desc: 'Cross-platform app development with Flutter, Dart, and native APIs.',
        rules: ['Share open-source repositories and packages.'],
        joinMode: 'instant'
      },
      {
        id: 'c-6',
        title: 'AI & Robotics Lab',
        type: 'project',
        badge: 'Private',
        members: 140,
        desc: 'Selective research group exploring foundation models and vision.',
        rules: ['Director approval required.'],
        joinMode: 'request'
      },
      {
        id: 'c-7',
        title: 'Student Affairs Broadcasts',
        type: 'academic',
        badge: 'Notices',
        members: 5800,
        desc: 'Emergency weather notices, transport timings, and events.',
        rules: ['Read-only administrative notices.'],
        joinMode: 'joined'
      }
    ],

    // Collabs
    collabs: [
      {
        id: 'cl-1',
        title: 'UniOne Mobile Client (Flutter + Drift)',
        desc: 'Offline-first SQLite sync with Riverpod 3 and WebSockets.',
        capacity: '2 of 4 Filled',
        deadline: '4 days left',
        skills: ['Flutter', 'SQLite', 'Riverpod 3']
      },
      {
        id: 'cl-2',
        title: 'Vision Attendance via Jetson Nano',
        desc: 'YOLOv10 edge model with RTSP feed for lecture halls.',
        capacity: '1 of 3 Filled',
        deadline: '7 days left',
        skills: ['Python', 'PyTorch', 'OpenCV']
      },
      {
        id: 'cl-3',
        title: 'Campus Meal Pre-Order Platform',
        desc: 'Pre-order app to eliminate 15-minute lecture break queues.',
        capacity: '3 of 5 Filled',
        deadline: '9 days left',
        skills: ['Flutter', 'Node.js', 'PostgreSQL']
      }
    ],

    // Verified Opportunities
    opportunities: [
      {
        id: 'o-1',
        role: 'Software Engineering Intern',
        org: 'Systems Limited',
        type: 'internship',
        location: 'Lahore (Hybrid)',
        stipend: 'PKR 45,000 / mo',
        duration: '3 Months',
        expiry: '6 days left',
        desc: 'Work on enterprise cloud microservices with NestJS and PostgreSQL.'
      },
      {
        id: 'o-2',
        role: 'Junior Flutter Developer',
        org: 'Arbisoft',
        type: 'graduate',
        location: 'Lahore (On-site)',
        stipend: 'PKR 85,000 / mo',
        duration: 'Permanent Full-time',
        expiry: '9 days left',
        desc: 'Build high-performance mobile apps with clean architecture.'
      },
      {
        id: 'o-3',
        role: 'AI Research Fellow',
        org: 'Superior AI Lab',
        type: 'research',
        location: 'Campus Lab',
        stipend: 'PKR 35,000 / mo',
        duration: '6 Months',
        expiry: '12 days left',
        desc: 'Assist in fine-tuning foundation models for academic extraction.'
      }
    ],

    // Conversations
    conversations: [
      {
        id: 'cv-1',
        name: 'Sohaib Ammar',
        initials: 'SA',
        lastMsg: 'All Drift SQLite queries are indexed now.',
        time: '11:24 AM',
        online: true,
        messages: [
          { sender: 'peer', text: 'Hey Ali, did you check the outbox queue table?' },
          { sender: 'me', text: 'Yes, looking at it now. The composite index looks solid.' },
          { sender: 'peer', text: 'All Drift SQLite queries are indexed now.' }
        ]
      },
      {
        id: 'cv-2',
        name: 'Capstone Team Room',
        initials: 'CP',
        lastMsg: 'Pushed BullMQ worker schema.',
        time: '10:05 AM',
        online: true,
        messages: [
          { sender: 'peer', text: 'Jury schedule uploaded for Demo Day.' },
          { sender: 'me', text: 'We have slot #3 on Thursday.' }
        ]
      },
      {
        id: 'cv-3',
        name: 'Zainab Tariq',
        initials: 'ZT',
        lastMsg: 'Exported Figma tokens for dark forest theme.',
        time: 'Yesterday',
        online: false,
        messages: [
          { sender: 'peer', text: 'Updated mobile navigation layout.' },
          { sender: 'peer', text: 'Exported Figma tokens for dark forest theme.' }
        ]
      }
    ],

    messageRequests: [
      {
        id: 'rq-1',
        name: 'Bilal Mustafa',
        initials: 'BM',
        major: 'BS CS • Sem 4',
        text: 'Hi Ali, saw your Flutter post. Have 1 year Dart experience and would love to collaborate!'
      },
      {
        id: 'rq-2',
        name: 'Ayesha Noor',
        initials: 'AN',
        major: 'BS SE • Sem 6',
        text: 'Hi Ali! Can you share schema references for Drift SQLite offline sync?'
      }
    ],

    // Notifications
    notifications: [
      { id: 'n-1', text: '<strong>Sohaib</strong> replied to your discussion.', time: '15m ago', unread: true },
      { id: 'n-2', text: '<strong>Systems Limited</strong> viewed your profile.', time: '1h ago', unread: true },
      { id: 'n-3', text: 'New campus notice: <strong>Capstone Demo Day</strong>.', time: '4h ago', unread: false }
    ]
  };

  // =========================================================================
  // DOM ELEMENTS
  // =========================================================================
  const splashScreen = document.getElementById('splashScreen');
  const splashProgressBar = document.getElementById('splashProgressBar');
  const toastPopup = document.getElementById('toastPopup');
  const toastPopupMessage = document.getElementById('toastPopupMessage');

  // Navigation
  const footerTabs = document.querySelectorAll('.footer-nav-tab');
  const tabPanes = {
    feed: document.getElementById('pane-feed'),
    communities: document.getElementById('pane-communities'),
    collab: document.getElementById('pane-collab'),
    opportunities: document.getElementById('pane-opportunities'),
    messages: document.getElementById('pane-messages'),
    profile: document.getElementById('pane-profile')
  };

  // Modals
  const composerModal = document.getElementById('composerModal');
  const communityModal = document.getElementById('communityModal');
  const opportunityModal = document.getElementById('opportunityModal');
  const reportModal = document.getElementById('reportModal');
  const verifyDomainModal = document.getElementById('verifyDomainModal');

  // =========================================================================
  // 1. SPLASH SCREEN (Quick & Clean)
  // =========================================================================
  function runSplash() {
    splashScreen.classList.remove('fade-out', 'hidden');
    splashProgressBar.style.width = '0%';
    setTimeout(() => { splashProgressBar.style.width = '60%'; }, 200);
    setTimeout(() => { splashProgressBar.style.width = '100%'; }, 600);
    setTimeout(() => {
      splashScreen.classList.add('fade-out');
      setTimeout(() => splashScreen.classList.add('hidden'), 350);
    }, 900);
  }
  runSplash();

  document.getElementById('brandLogoTrigger').addEventListener('click', () => {
    switchTab('feed');
  });

  // =========================================================================
  // 2. TOAST POPUP
  // =========================================================================
  let toastTimer = null;
  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    toastPopupMessage.textContent = msg;
    toastPopup.classList.add('active');
    toastTimer = setTimeout(() => toastPopup.classList.remove('active'), 2400);
  }

  // =========================================================================
  // 3. PERFECT FOOTER NAVIGATION (Works 100%)
  // =========================================================================
  function switchTab(tabKey) {
    state.activeTab = tabKey;

    // Close global search overlay if open
    const headerSearchBar = document.getElementById('headerSearchBar');
    const searchQuickDropdown = document.getElementById('searchQuickDropdown');
    const globalSearchInput = document.getElementById('globalSearchInput');
    if (headerSearchBar && !headerSearchBar.classList.contains('hidden')) {
      headerSearchBar.classList.add('hidden');
      if (searchQuickDropdown) searchQuickDropdown.classList.add('hidden');
      if (globalSearchInput) globalSearchInput.value = '';
    }

    // Update bottom tab active styles
    footerTabs.forEach(tab => {
      if (tab.dataset.tab === tabKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // If switching to messages, ensure we show the conversation list inbox
    if (tabKey === 'messages') {
      const chatListView = document.getElementById('chatListView');
      const chatActiveStage = document.getElementById('chatActiveStage');
      if (chatListView && chatActiveStage) {
        chatActiveStage.classList.add('hidden');
        chatListView.classList.remove('hidden');
      }
    }

    // Toggle main viewport pane
    Object.keys(tabPanes).forEach(k => {
      if (k === tabKey) {
        tabPanes[k].classList.add('active');
      } else {
        tabPanes[k].classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  footerTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // Profile icon in header
  document.getElementById('btnOpenProfileHeader').addEventListener('click', () => {
    switchTab('profile');
  });

  // =========================================================================
  // 4. FEED STREAM
  // =========================================================================
  const postsFeedContainer = document.getElementById('postsFeedContainer');
  const filterPills = document.querySelectorAll('.filter-pill');
  const btnToggleSort = document.getElementById('btnToggleSort');
  const currentSortLabel = document.getElementById('currentSortLabel');

  function renderFeed() {
    postsFeedContainer.innerHTML = '';

    let filtered = state.posts.filter(p => {
      if (state.feedFilter === 'all') return true;
      return p.type === state.feedFilter;
    });

    if (state.feedSort === 'best') {
      filtered.sort((a, b) => b.votes - a.votes);
    } else {
      filtered.sort((a, b) => b.timestamp - a.timestamp);
    }

    filtered.forEach(post => {
      const card = document.createElement('article');
      card.className = 'clean-card';

      let imageHTML = '';
      if (post.image) {
        imageHTML = `<img src="${post.image}" alt="${escapeHtml(post.title)}" class="post-embedded-img">`;
      }

      let extraHTML = '';
      if (post.type === 'collab' && post.skills) {
        const skills = post.skills.map(s => `<span class="tag-badge">${s}</span>`).join('');
        extraHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 0.72rem; margin-bottom: 6px;">
            <strong style="color: #153726;">${post.collabCapacity}</strong>
          </div>
          <div class="tags-row">${skills}</div>
        `;
      }

      card.innerHTML = `
        <div class="card-top-meta">
          <span class="author-label">${post.author}</span>
          <span class="meta-right">${post.community} • ${post.timeAgo}</span>
        </div>
        <h3>${escapeHtml(post.title)}</h3>
        <p>${escapeHtml(post.content)}</p>
        ${imageHTML}
        ${extraHTML}
        <div class="card-bottom-bar">
          <button class="upvote-chip ${post.hasUpvoted ? 'upvoted' : ''}" data-post-id="${post.id}">
            <svg class="svg-icon mini" viewBox="0 0 24 24"><path d="M12 19V5m-7 7l7-7 7 7"/></svg>
            <span>${post.votes}</span>
          </button>
          <button class="card-action-link btn-report-trigger">Report</button>
        </div>
      `;

      card.querySelector('.upvote-chip').addEventListener('click', (e) => {
        e.stopPropagation();
        if (post.hasUpvoted) {
          post.votes -= 1;
          post.hasUpvoted = false;
        } else {
          post.votes += 1;
          post.hasUpvoted = true;
          showToast('Upvoted');
        }
        renderFeed();
      });

      card.querySelector('.btn-report-trigger').addEventListener('click', (e) => {
        e.stopPropagation();
        reportModal.classList.remove('hidden');
      });

      postsFeedContainer.appendChild(card);
    });
  }

  filterPills.forEach(pill => {
    if (pill.id === 'btnToggleSort') return;
    pill.addEventListener('click', () => {
      filterPills.forEach(p => { if (p.id !== 'btnToggleSort') p.classList.remove('active'); });
      pill.classList.add('active');
      state.feedFilter = pill.dataset.filter;
      renderFeed();
    });
  });

  btnToggleSort.addEventListener('click', () => {
    if (state.feedSort === 'best') {
      state.feedSort = 'new';
      currentSortLabel.textContent = 'New';
      showToast('Sorted by newest');
    } else {
      state.feedSort = 'best';
      currentSortLabel.textContent = 'Best';
      showToast('Sorted by upvotes');
    }
    renderFeed();
  });

  renderFeed();

  // =========================================================================
  // 5. POST COMPOSER
  // =========================================================================
  const triggerComposerBox = document.getElementById('triggerComposerBox');
  const btnCloseComposer = document.getElementById('btnCloseComposer');
  const composerMainForm = document.getElementById('composerMainForm');
  const typePillBtns = document.querySelectorAll('.type-pill-btn');
  const composerCollabGroup = document.getElementById('composerCollabGroup');
  let currentPostType = 'discussion';

  triggerComposerBox.addEventListener('click', () => composerModal.classList.remove('hidden'));
  btnCloseComposer.addEventListener('click', () => composerModal.classList.add('hidden'));

  typePillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typePillBtns.forEach(b => b.classList.remove('active'));
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
    const comm = document.getElementById('composerTargetComm').value;
    const title = document.getElementById('composerPostTitle').value.trim();
    const content = document.getElementById('composerPostContent').value.trim();
    if (!title || !content) return;

    const newPost = {
      id: `post-${Date.now()}`,
      type: currentPostType,
      author: state.currentUser.name,
      initials: state.currentUser.initials,
      community: comm,
      timeAgo: 'Just now',
      timestamp: Date.now(),
      title: title,
      content: content,
      votes: 1,
      hasUpvoted: true
    };

    if (currentPostType === 'collab') {
      const needed = document.getElementById('collabTeammates').value || '2';
      const skillsRaw = document.getElementById('collabSkillsInput').value || 'Flutter, Dart';
      newPost.collabCapacity = `0 of ${needed} filled`;
      newPost.skills = skillsRaw.split(',').map(s => s.trim()).filter(Boolean);
    }

    state.posts.unshift(newPost);
    renderFeed();
    composerMainForm.reset();
    composerModal.classList.add('hidden');
    showToast('Post published');
    switchTab('feed');
  });

  // =========================================================================
  // 6. COMMUNITIES TAB
  // =========================================================================
  const communitiesGrid = document.getElementById('communitiesGrid');
  const catPills = document.querySelectorAll('.cat-pill');
  const btnCloseCommunityModal = document.getElementById('btnCloseCommunityModal');
  const btnExecuteJoinModal = document.getElementById('btnExecuteJoinModal');
  let activeSelectedComm = null;

  function renderCommunities() {
    communitiesGrid.innerHTML = '';
    const filtered = state.communities.filter(c => {
      if (state.currentCommFilter === 'all') return true;
      return c.type === state.currentCommFilter;
    });

    filtered.forEach(comm => {
      const card = document.createElement('div');
      card.className = 'clean-card';
      card.style.cursor = 'pointer';

      let joinLabel = comm.joinMode === 'joined' ? 'Joined' : (comm.joinMode === 'request' ? 'Request' : 'Join');

      card.innerHTML = `
        <div class="card-top-meta">
          <span class="sub-counter">${comm.badge}</span>
          <span class="meta-right">${comm.members.toLocaleString()} members</span>
        </div>
        <h3>${escapeHtml(comm.title)}</h3>
        <p>${escapeHtml(comm.desc)}</p>
        <div class="card-bottom-bar">
          <span style="font-size: 0.72rem; color: #537B5F; font-weight: 700;">Verified Hub</span>
          <button class="card-action-link" style="color: #153726;">${joinLabel}</button>
        </div>
      `;

      card.addEventListener('click', () => openCommunityModal(comm));
      communitiesGrid.appendChild(card);
    });
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentCommFilter = pill.dataset.commFilter;
      renderCommunities();
    });
  });

  function openCommunityModal(comm) {
    activeSelectedComm = comm;
    document.getElementById('modalCommBadge').textContent = comm.badge;
    document.getElementById('modalCommTitle').textContent = comm.title;
    document.getElementById('modalCommDesc').textContent = comm.desc;

    const rulesEl = document.getElementById('modalCommRules');
    rulesEl.innerHTML = comm.rules.map(r => `<li>${escapeHtml(r)}</li>`).join('');

    const joinBtn = document.getElementById('modalJoinBtnLabel');
    joinBtn.textContent = comm.joinMode === 'joined' ? 'Already a Member' : (comm.joinMode === 'request' ? 'Request Access' : 'Join Community');

    communityModal.classList.remove('hidden');
  }

  btnCloseCommunityModal.addEventListener('click', () => communityModal.classList.add('hidden'));

  btnExecuteJoinModal.addEventListener('click', () => {
    if (!activeSelectedComm) return;
    if (activeSelectedComm.joinMode !== 'joined') {
      activeSelectedComm.joinMode = 'joined';
      activeSelectedComm.members += 1;
      showToast(`Joined ${activeSelectedComm.title}`);
      renderCommunities();
    }
    communityModal.classList.add('hidden');
  });

  renderCommunities();

  // =========================================================================
  // 7. COLLABS TAB
  // =========================================================================
  const collabDirectoryGrid = document.getElementById('collabDirectoryGrid');

  function renderCollabs() {
    collabDirectoryGrid.innerHTML = '';
    state.collabs.forEach(collab => {
      const card = document.createElement('div');
      card.className = 'clean-card';
      const skills = collab.skills.map(s => `<span class="tag-badge">${s}</span>`).join('');

      card.innerHTML = `
        <div class="card-top-meta">
          <span style="font-weight: 700; color: #153726;">${collab.capacity}</span>
          <span class="meta-right">${collab.deadline}</span>
        </div>
        <h3>${escapeHtml(collab.title)}</h3>
        <p>${escapeHtml(collab.desc)}</p>
        <div class="tags-row">${skills}</div>
        <div class="card-bottom-bar">
          <span style="font-size: 0.72rem; color: #67786E;">Lead: Verified Peer</span>
          <button class="card-action-link btn-apply-team">Apply</button>
        </div>
      `;

      card.querySelector('.btn-apply-team').addEventListener('click', () => {
        showToast('Application sent to lead');
      });

      collabDirectoryGrid.appendChild(card);
    });
  }

  document.getElementById('btnPostCollabHero').addEventListener('click', () => {
    composerModal.classList.remove('hidden');
    typePillBtns.forEach(b => { if (b.dataset.type === 'collab') b.click(); });
  });

  renderCollabs();

  // =========================================================================
  // 8. CAREERS TAB
  // =========================================================================
  const opportunitiesContainer = document.getElementById('opportunitiesContainer');
  const oppFilterPills = document.querySelectorAll('.opp-filter-pill');
  const btnCloseOppModal = document.getElementById('btnCloseOppModal');
  const formOppApplyModal = document.getElementById('formOppApplyModal');
  let selectedOpp = null;

  function renderOpportunities() {
    opportunitiesContainer.innerHTML = '';
    const filtered = state.opportunities.filter(o => {
      if (state.currentOppFilter === 'all') return true;
      return o.type === state.currentOppFilter;
    });

    filtered.forEach(opp => {
      const card = document.createElement('div');
      card.className = 'clean-card';
      card.style.cursor = 'pointer';

      card.innerHTML = `
        <div class="card-top-meta">
          <span style="font-weight: 700; color: #153726;">${opp.org}</span>
          <span class="meta-right">${opp.expiry}</span>
        </div>
        <h3>${escapeHtml(opp.role)}</h3>
        <p>${escapeHtml(opp.desc)}</p>
        <div class="tags-row">
          <span class="tag-badge salary">${opp.stipend}</span>
          <span class="tag-badge">${opp.location}</span>
          <span class="tag-badge">${opp.duration}</span>
        </div>
        <div class="card-bottom-bar">
          <span style="font-size: 0.72rem; color: #67786E;">Verified Partner</span>
          <button class="card-action-link">View & Apply</button>
        </div>
      `;

      card.addEventListener('click', () => openOppModal(opp));
      opportunitiesContainer.appendChild(card);
    });
  }

  oppFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      oppFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentOppFilter = pill.dataset.oppType;
      renderOpportunities();
    });
  });

  function openOppModal(opp) {
    selectedOpp = opp;
    document.getElementById('modalOppRole').textContent = opp.role;
    document.getElementById('modalOppCompany').textContent = `${opp.org} • ${opp.location}`;
    document.getElementById('modalOppStipend').textContent = opp.stipend;
    document.getElementById('modalOppDuration').textContent = opp.duration;
    document.getElementById('modalOppExpiry').textContent = opp.expiry;
    document.getElementById('modalOppDesc').textContent = opp.desc;
    opportunityModal.classList.remove('hidden');
  }

  btnCloseOppModal.addEventListener('click', () => opportunityModal.classList.add('hidden'));

  formOppApplyModal.addEventListener('submit', (e) => {
    e.preventDefault();
    opportunityModal.classList.add('hidden');
    formOppApplyModal.reset();
    showToast(`Application submitted to ${selectedOpp?.org}`);
  });

  renderOpportunities();

  // =========================================================================
  // 9. MESSAGING & REAL-TIME CHAT
  // =========================================================================
  const convsList = document.getElementById('convsList');
  const reqsList = document.getElementById('reqsList');
  const btnSwitchDirectChat = document.getElementById('btnSwitchDirectChat');
  const btnSwitchRequestsChat = document.getElementById('btnSwitchRequestsChat');
  const chatListView = document.getElementById('chatListView');
  const chatActiveStage = document.getElementById('chatActiveStage');
  const btnBackToChatList = document.getElementById('btnBackToChatList');
  const activeChatAvatar = document.getElementById('activeChatAvatar');
  const activeChatName = document.getElementById('activeChatName');
  const activeChatMessagesScroll = document.getElementById('activeChatMessagesScroll');
  const chatTypingRow = document.getElementById('chatTypingRow');
  const activeChatSendForm = document.getElementById('activeChatSendForm');
  const inputChatMessageText = document.getElementById('inputChatMessageText');
  let currentActiveConv = state.conversations[0];

  function renderConversations() {
    convsList.innerHTML = '';
    state.conversations.forEach(conv => {
      const row = document.createElement('div');
      row.className = 'chat-person-row';
      row.innerHTML = `
        <div class="person-avatar">${conv.initials}</div>
        <div class="person-details">
          <div class="person-name-row">
            <strong>${escapeHtml(conv.name)}</strong>
            <span>${conv.time}</span>
          </div>
          <p class="person-snippet">${escapeHtml(conv.lastMsg)}</p>
        </div>
      `;

      row.addEventListener('click', () => {
        openActiveChat(conv);
      });

      convsList.appendChild(row);
    });
  }

  function renderRequests() {
    reqsList.innerHTML = '';
    document.getElementById('chatRequestsCount').textContent = state.messageRequests.length;

    state.messageRequests.forEach(req => {
      const row = document.createElement('div');
      row.style.cssText = 'padding: 12px 14px; border-bottom: 1px solid var(--color-border);';
      row.innerHTML = `
        <div style="display: flex; gap: 8px; margin-bottom: 4px;">
          <div class="person-avatar" style="width: 30px; height: 30px; font-size: 0.72rem;">${req.initials}</div>
          <div>
            <strong style="font-size: 0.8rem; color: #121F17; display: block;">${escapeHtml(req.name)}</strong>
            <span style="font-size: 0.66rem; color: #67786E;">${escapeHtml(req.major)}</span>
          </div>
        </div>
        <p style="font-size: 0.74rem; color: #324037; margin-bottom: 8px;">"${escapeHtml(req.text)}"</p>
        <div style="display: flex; gap: 6px;">
          <button class="submit-btn btn-accept" style="padding: 4px 10px; font-size: 0.7rem;">Accept</button>
          <button class="submit-btn danger btn-decline" style="padding: 4px 10px; font-size: 0.7rem; background: transparent; color: #C0392B; border: 1px solid #C0392B;">Decline</button>
        </div>
      `;

      row.querySelector('.btn-accept').addEventListener('click', () => {
        state.conversations.push({
          id: `cv-${Date.now()}`,
          name: req.name,
          initials: req.initials,
          lastMsg: req.text,
          time: 'Just now',
          online: true,
          messages: [{ sender: 'peer', text: req.text }]
        });
        state.messageRequests = state.messageRequests.filter(r => r.id !== req.id);
        renderRequests();
        renderConversations();
        document.getElementById('footerMsgBadge').textContent = state.conversations.length;
        btnSwitchDirectChat.click();
        showToast(`Connected with ${req.name}`);
      });

      row.querySelector('.btn-decline').addEventListener('click', () => {
        state.messageRequests = state.messageRequests.filter(r => r.id !== req.id);
        renderRequests();
        showToast('Request declined');
      });

      reqsList.appendChild(row);
    });
  }

  function openActiveChat(conv) {
    currentActiveConv = conv;
    activeChatAvatar.textContent = conv.initials;
    activeChatName.textContent = conv.name;

    activeChatMessagesScroll.innerHTML = '';
    conv.messages.forEach(msg => {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${msg.sender}`;
      bubble.textContent = msg.text;
      activeChatMessagesScroll.appendChild(bubble);
    });

    chatListView.classList.add('hidden');
    chatActiveStage.classList.remove('hidden');
    activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;
  }

  btnBackToChatList.addEventListener('click', () => {
    chatActiveStage.classList.add('hidden');
    chatListView.classList.remove('hidden');
  });

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

  activeChatSendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = inputChatMessageText.value.trim();
    if (!text || !currentActiveConv) return;

    currentActiveConv.messages.push({ sender: 'me', text: text });
    currentActiveConv.lastMsg = `You: ${text}`;
    inputChatMessageText.value = '';

    const b = document.createElement('div');
    b.className = 'chat-bubble me';
    b.textContent = text;
    activeChatMessagesScroll.appendChild(b);
    activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;

    setTimeout(() => {
      chatTypingRow.classList.remove('hidden');
      activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;
      setTimeout(() => {
        chatTypingRow.classList.add('hidden');
        const reply = 'Got it! Synced with local Drift SQLite.';
        currentActiveConv.messages.push({ sender: 'peer', text: reply });
        currentActiveConv.lastMsg = reply;

        const pb = document.createElement('div');
        pb.className = 'chat-bubble peer';
        pb.textContent = reply;
        activeChatMessagesScroll.appendChild(pb);
        activeChatMessagesScroll.scrollTop = activeChatMessagesScroll.scrollHeight;
        renderConversations();
      }, 1100);
    }, 500);
  });

  document.getElementById('btnReportChatUser').addEventListener('click', () => {
    reportModal.classList.remove('hidden');
  });

  renderConversations();
  renderRequests();

  // =========================================================================
  // 10. NOTIFICATIONS, SEARCH & REPORT
  // =========================================================================
  const btnNotificationsToggle = document.getElementById('btnNotificationsToggle');
  const notificationsDropdown = document.getElementById('notificationsDropdown');
  const notificationsList = document.getElementById('notificationsList');

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
    const unread = state.notifications.filter(n => n.unread).length;
    document.getElementById('notifUnreadBadge').textContent = unread;
    document.getElementById('notifUnreadBadge').style.display = unread > 0 ? 'inline-block' : 'none';

    state.notifications.forEach(n => {
      const row = document.createElement('div');
      row.className = `notif-row ${n.unread ? 'unread' : ''}`;
      row.innerHTML = `<p>${n.text}</p><span>${n.time}</span>`;
      row.addEventListener('click', () => {
        n.unread = false;
        renderNotifications();
        notificationsDropdown.classList.add('hidden');
      });
      notificationsList.appendChild(row);
    });
  }

  document.getElementById('btnMarkAllNotifsRead').addEventListener('click', () => {
    state.notifications.forEach(n => n.unread = false);
    renderNotifications();
    showToast('Notifications cleared');
  });

  renderNotifications();

  // Search Toggle
  const btnToggleSearch = document.getElementById('btnToggleSearch');
  const headerSearchBar = document.getElementById('headerSearchBar');
  const btnCloseSearch = document.getElementById('btnCloseSearch');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const searchQuickDropdown = document.getElementById('searchQuickDropdown');

  btnToggleSearch.addEventListener('click', () => {
    headerSearchBar.classList.remove('hidden');
    globalSearchInput.focus();
  });

  btnCloseSearch.addEventListener('click', () => {
    headerSearchBar.classList.add('hidden');
    searchQuickDropdown.classList.add('hidden');
    globalSearchInput.value = '';
  });

  globalSearchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      searchQuickDropdown.classList.add('hidden');
      return;
    }
    searchQuickDropdown.innerHTML = '';
    const comms = state.communities.filter(c => c.title.toLowerCase().includes(q));
    const opps = state.opportunities.filter(o => o.role.toLowerCase().includes(q) || o.org.toLowerCase().includes(q));

    comms.forEach(c => {
      const d = document.createElement('div');
      d.style.cssText = 'padding: 8px; font-size: 0.78rem; cursor: pointer; border-bottom: 1px solid var(--color-border);';
      d.innerHTML = `<strong>${c.title}</strong> (Hub)`;
      d.addEventListener('click', () => {
        headerSearchBar.classList.add('hidden');
        switchTab('communities');
        openCommunityModal(c);
      });
      searchQuickDropdown.appendChild(d);
    });

    opps.forEach(o => {
      const d = document.createElement('div');
      d.style.cssText = 'padding: 8px; font-size: 0.78rem; cursor: pointer; border-bottom: 1px solid var(--color-border);';
      d.innerHTML = `<strong>${o.role}</strong> • ${o.org}`;
      d.addEventListener('click', () => {
        headerSearchBar.classList.add('hidden');
        switchTab('opportunities');
        openOppModal(o);
      });
      searchQuickDropdown.appendChild(d);
    });

    searchQuickDropdown.classList.remove('hidden');
  });

  // Verify Email Modal
  const btnVerifyDomainHeader = document.getElementById('btnVerifyDomainHeader');
  const btnCloseVerifyModal = document.getElementById('btnCloseVerifyModal');
  const btnConfirmOtpModal = document.getElementById('btnConfirmOtpModal');

  if (btnVerifyDomainHeader) {
    btnVerifyDomainHeader.addEventListener('click', () => verifyDomainModal.classList.remove('hidden'));
  }
  if (btnCloseVerifyModal) {
    btnCloseVerifyModal.addEventListener('click', () => verifyDomainModal.classList.add('hidden'));
  }
  if (btnConfirmOtpModal) {
    btnConfirmOtpModal.addEventListener('click', () => {
      verifyDomainModal.classList.add('hidden');
      showToast('Verified: su92-bssem-f24-296');
      runSplash();
    });
  }

  // Also allow clicking verified badge or roll number in profile to test verification OTP modal
  const profileRollTag = document.querySelector('.roll-number-tag');
  if (profileRollTag) {
    profileRollTag.style.cursor = 'pointer';
    profileRollTag.title = 'Click to re-verify student domain';
    profileRollTag.addEventListener('click', () => {
      verifyDomainModal.classList.remove('hidden');
    });
  }

  // Report Modal
  const btnCloseReportModal = document.getElementById('btnCloseReportModal');
  const formSubmitReport = document.getElementById('formSubmitReport');

  btnCloseReportModal.addEventListener('click', () => reportModal.classList.add('hidden'));
  formSubmitReport.addEventListener('submit', (e) => {
    e.preventDefault();
    reportModal.classList.add('hidden');
    showToast('Report logged in audit record');
  });

  // Profile switches
  document.getElementById('toggleRollVisibility').addEventListener('change', (e) => {
    showToast(e.target.checked ? 'Roll number visible' : 'Roll number hidden');
  });

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
});
