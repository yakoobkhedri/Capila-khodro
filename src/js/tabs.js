
// tab

let tabs = Array.from(document.getElementsByClassName('tab'));
let tabContent = Array.from(document.getElementsByClassName('tabContent'));

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabId = tab.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
                tab.classList.add('active');
            } else {
                content.classList.remove('active');
                tab.classList.remove('active');
            }
        })
    })
})