export const navLinks = [
  {
    icon: "/img/Category.svg",
    activeIcon: "/img/CategoryActive.svg",
    path: "/",
    text: "dashboard",
  },
  { icon: "/img/Bag.svg", path: "", text: "orders", notification: 3 },
  { icon: "/img/2 User.svg", path: "", text: "customers" },
  { icon: "/img/Folder.svg", path: "", text: "inventory" },
  {
    icon: "/img/Chat.svg",
    activeIcon: "/img/ChatActive.svg",
    path: `/conversation`,
    notification: 16,
    text: "conversation",
  },
  { icon: "/img/Setting.svg", path: "", text: "settings" },
];

export const recentOrders = [
  {
    date: "12 Sept 2022",
    image: "/img/phone1.png",
    price: "₦450,000",
    status: "Completed",
    name: "iPhone 13 Pro Max",
  },
  {
    date: "15 Oct 2022",
    image: "/img/phone2.png",
    price: "₦285,000",
    status: "Pending",
    name: "iPhone 12 Mini",
  },
  {
    date: "18 Nov 2022",
    image: "/img/phone2.png",
    price: "₦162,000",
    status: "Completed",
    name: "iPhone SE (2nd generation)",
  },
  {
    date: "22 Dec 2022",
    image: "/img/phone1.png",
    price: "₦405,000",
    status: "Completed",
    name: "iPhone 11 Pro",
  },
  {
    date: "25 Jan 2023",
    image: "/img/phone1.png",
    price: "₦200,000",
    status: "Pending",
    name: "iPhone XR",
  },
  {
    date: "28 Feb 2023",
    image: "/img/phone1.png",
    price: "₦220,000",
    status: "Completed",
    name: "iPhone 8 Plus",
  },
  {
    date: "3 Mar 2023",
    image: "/img/phone2.png",
    price: "₦315,000",
    status: "Completed",
    name: "iPhone 13",
  },
  {
    date: "8 Apr 2023",
    image: "/img/phone1.png",
    price: "₦405,000",
    status: "Pending",
    name: "iPhone 12 Pro",
  },
  {
    date: "13 May 2023",
    image: "/img/phone2.png",
    price: "₦285,000",
    status: "Completed",
    name: "iPhone X",
  },
];

export const contacts = [
  {
    id: "sender1currentUserId",
    name: "Alice Doe",
    image: "/img/tan1.png",
    online: true,
    lastMessage: {
      text: "Hello, I want to make enquiries about your product",
      time: "12:55 am",
      isRead: true,
    },
    conversationHistory: [
      {
        text: "Hello, I want to make enquiries about your product",
        time: "12:55 pm",
        senderId: "sender1",
      },
      {
        text: "Hello Janet, thank you for reaching out",
        time: "12:55 am",
        senderId: "currentUserId",
      },
      {
        text: "What do you need to know?",
        time: "12:55 am",
        senderId: "currentUserId",
      },
      {
        text: "I want to know if the price is negotiable, i need about 2 Units",
        time: "12:55 am",
        senderId: "sender1",
      },
    ],
    isNewChat: true,
  },
  {
    id: "sender2currentUserId",
    name: "Janet Adebayo",
    image: "/img/tan2.png",
    online: false,
    lastMessage: {
      text: "Hello!",
      time: "9:10 am",
      isRead: false,
    },
    conversationHistory: [
      {
        text: "Hi Janet!",
        time: "3:20 pm",
        senderId: "currentUserId",
      },
      {
        text: "How have you been?",
        time: "1:30 am",
        senderId: "currentUserId",
      },
      {
        text: "Long time no see.",
        time: "12:40 am",
        senderId: "sender2",
      },
    ],
    isNewChat: false,
  },
  {
    id: "sender3currentUserId",
    name: "Kunle Adekunle",
    image: "/img/tan3.png",
    online: false,
    lastMessage: {
      text: "Hello!",
      time: "9:10 am",
      isRead: false,
    },
    conversationHistory: [
      {
        text: "Hi Alice!",
        time: "12:10 pm",
        senderId: "sender3",
      },
      {
        text: "Hello, I want to make enquiries about your product",
        time: "2:45 pm",
        senderId: "sender3",
      },
      {
        text: "Long time no see.",
        time: "10:45 am",
        senderId: "currentUserId",
      },
      {
        text: "Hello Janet, thank you for reaching out",
        time: "10:45 am",
        senderId: "currentUserId",
      },
      {
        text: "I want to know if the price is negotiable, i need about 2 Units",
        time: "10:45 am",
        senderId: "sender3",
      },
    ],
    isNewChat: false,
  },
];
