const notificationListElement = document.querySelector('.notification-list')

const notificationsList = [
    {
        profileImage: 'avatar-mark-webber.webp',
        userName: 'Mark Webber',
        activity: 'reacted to your recent post',
        activityContent: {
            contentId: 'My first tournament today!',
            description: ''
        },
        time: '1m ago',
        isRead: false
    },
    {
        profileImage: 'avatar-angela-gray.webp',
        userName: 'Angela Gray',
        activity: 'followed you',
        activityContent: {
            contentId: '',
            description: ''
        },
        time: '5m ago',
        isRead: false
    },
    {
        profileImage: 'avatar-jacob-thompson.webp',
        userName: 'Jacob Thompson',
        activity: 'has joined your group',
        activityContent: {
            contentId: 'Chess Club',
            description: ''
        },
        time: '1 day ago',
        isRead: false
    },
    {
        profileImage: 'avatar-rizky-hasanuddin.webp',
        userName: 'Rizky Hasanuddin',
        activity: 'sent you a private message',
        activityContent: {
            contentId: '',
            description: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        },
        time: '5 days ago',
        isRead: true
    },
    {
        profileImage: 'avatar-kimberly-smith.webp',
        userName: 'Kimberly Smith',
        activity: 'commented on your picture',
        activityContent: {
            contentId: '',
            description: "",
            postImage: 'image-chess.webp'
        },
        time: '1 week ago',
        isRead: true
    },
    {
        profileImage: 'avatar-nathan-peterson.webp',
        userName: 'Nathan Peterson',
        activity: 'reacted to your recent post',
        activityContent: {
            contentId: '5 end-game strategies to increase your win rate',
            description: ""
        },
        time: '2 week ago',
        isRead: true
    },
    {
        profileImage: 'avatar-anna-kim.webp',
        userName: 'Anna Kim',
        activity: 'left the group',
        activityContent: {
            contentId: 'Chess Club',
            description: ""
        },
        time: '2 week ago',
        isRead: true
    },
]

for (let i = 0; i < notificationsList.length; i++) {
    let creatListElemnt = `
    <li class="notification-item">
        <div class="content-wrapper">
            <figure class="user-profile">
                <img src="./assets/images/${notificationsList[i].profileImage}" alt="user-profile">
            </figure>
            <div class="notification-deatils">
                <p>
                <span class="user-name">
                ${notificationsList[i].userName}
                </span>            
                <span>${notificationsList[i].activity}
                </span>
                <span class="notification-content">
                ${notificationsList[i].activityContent.contentId}
                </span>
                <span class="unread-badge">
                </span>
                </p>            
                <p class="notification-time">
                    ${notificationsList[i].time}
                </p>            
            </div>
        </div>
    </li>`
    notificationListElement.innerHTML += creatListElemnt
    if (!notificationsList[i].isRead) {
        document.querySelectorAll('.notification-item')[i].classList.add('unread')
        document.querySelectorAll('.unread-badge')[i].classList.add('active')
    }
    if (notificationsList[i].activityContent.contentId === 'Chess Club') {
        document.querySelectorAll('.notification-content')[i].classList.add('group-event')
    }
    if (notificationsList[i].activityContent.postImage) {
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', `./assets/images/${notificationsList[i].activityContent.postImage}`)
        imageElement.classList.add('post-img')
        const parentElement = document.querySelectorAll('.notification-item')[i]
        parentElement.classList.add('commented')
        parentElement.appendChild(imageElement)
    }
    if (notificationsList[i].activityContent.description) {
        const msgDescription = document.createElement('p')
        msgDescription.classList.add('msg-description')
        msgDescription.innerHTML = `${notificationsList[i].activityContent.description}`
        document.querySelectorAll('.notification-deatils')[i].appendChild(msgDescription)
    }
}
