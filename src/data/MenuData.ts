interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    has_dropdown: true,
    title: "Products",
    link: "#",
    sub_menus: [
      { link: "/hpcl", title: "High Priority Liquid CO2" },
      { link: "/dryice", title: "Dry Ice" },
      { link: "/crp", title: "CO2 recovery plant" },
      { link: "ve", title: "Vessel and Equipment" },
    ],
  },
  // {
  //   id: 3,
  //   has_dropdown: false,
  //   title: "Courses",
  //   link: "/service",
  // },

  // {
  //   id: 4,
  //   has_dropdown: false,
  //   title: "Gallery",
  //   link: "/gallery",
  // },
  {
    id: 3,
    has_dropdown: true,
    title: "Project",
    link: "#",
    sub_menus: [
      { link: "/liquid-co2", title: "Liquid CO2" },
      { link: "/dry-ice", title: "Dry Ice" },
      { link: "/co2-rec-plant", title: "CO2 Recovery plant" },
      { link: "/vessel-equip", title: "Vessel Equipment" },
    ],
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Carreer",
    link: "/carrer",
  },
  // {
  //   id: 4,
  //   has_dropdown: true,
  //   title: "Courses",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/service", title: "Courses" },
  //     // { link: "/service-details", title: "Services Details" },
  //   ],
  // },
  // {
  //   id: 5,
  //   has_dropdown: true,
  //   title: "Gallery",
  //   link: "#",
  //   sub_menus: [
  //     // { link: "/team", title: "Team" },
  //     // { link: "/team-details", title: "Team Details" },
  //     // { link: "/testimonial", title: "Client Feedback" },
  //     { link: "/gallery", title: "Our Gallery" },
  //     // { link: "/pricing", title: "Pricing Plan" },
  //     // { link: "/faq", title: "Faq" },
  //     // { link: "/404", title: "Error Page" },
  //   ],
  // },
  // {
  //    id: 6,
  //    has_dropdown: true,
  //    title: "Blog",
  //    link: "#",
  //    sub_menus: [
  //       { link: "/news", title: "Blog Grid" },
  //       { link: "/news-sidebar", title: "Blog Sidebar" },
  //       { link: "/news-standard", title: "Blog Standard" },
  //       { link: "/news-details", title: "Blog Details" },
  //    ],
  // },
  {
    id: 7,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  // {
  //   id: 4,
  //   has_dropdown: false,
  //   title: "Login",
  //   link: "/login",
  // },
];
export default menu_data;
