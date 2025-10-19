function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked nav tab
    const clickedTab = Array.from(navTabs).find(tab => 
        tab.textContent.includes(getTabLabel(tabName))
    );
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
    
    // Update bottom nav
    updateBottomNav(tabName);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showBottomTab(tabName) {
    showTab(tabName);
}

function getTabLabel(tabName) {
    const labels = {
        'overview': '總覽',
        'day1': 'Day 1',
        'day2': 'Day 2',
        'day3': 'Day 3',
        'day4': 'Day 4',
        'day5': 'Day 5',
        'day6': 'Day 6',
        'restaurants': '餐廳',
        'checklist': '清單'
    };
    return labels[tabName] || '';
}

function updateBottomNav(tabName) {
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    bottomNavItems.forEach(item => item.classList.remove('active'));
    
    // Map tabs to bottom nav items
    let bottomNavIndex = 0;
    if (tabName === 'overview') bottomNavIndex = 0;
    else if (tabName.startsWith('day')) bottomNavIndex = 1;
    else if (tabName === 'restaurants') bottomNavIndex = 2;
    else if (tabName === 'checklist') bottomNavIndex = 3;
    
    bottomNavItems[bottomNavIndex].classList.add('active');
}

// Save checkbox state to localStorage
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
        const checkboxId = checkbox.id;
        
        // Load saved state
        const saved = localStorage.getItem(checkboxId);
        if (saved === 'true') {
            checkbox.checked = true;
        }
        
        // Save on change
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkboxId, this.checked);
        });
    });
});