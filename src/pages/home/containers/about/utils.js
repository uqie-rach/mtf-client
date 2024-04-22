import { speakerProfile,IHackaton, ILinkedIn, IInstagram } from "@assets";

export const speakerData = {
  name: "Ramadhani Pasulleri",
  role: "Student",
  profile: speakerProfile,
  socials: [
    {
      icon: ILinkedIn,
      name: "linkedin",
      url: "https://www.linkedin.com/",
    },
    {
      icon: IInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
  ],
};

export const eventData = [
  {
    name: "hackaton",
    icon: IHackaton,
    subtitle: "Empowering Innovation",
    desc: "Mulailah perjalanan inovasi selama satu bulan di Maliki Tech Festival Hackathon, yang diselenggarakan dari tanggal 13 Mei hingga 17 Juni 2024. Bergabunglah dengan rekan-rekan pecinta teknologi lainnya untuk mengembangkan solusi terobosan terhadap masalah dunia nyata, yang menunjukkan kekuatan transformatif teknologi dalam membentuk masa depan yang lebih baik.",
  },
  {
    name: "seminar",
    icon: IHackaton,
    subtitle: "Empowering Futures: A Hackathon for Global Goals",
    desc: "Ikuti seminar kami di Maliki Tech Festival. Seminar ini akan menjelajahi bagaimana teknologi dapat memberdayakan solusi untuk mencapai tujuan global. Dengan pembicara expert yang berpengalaman di bidangnya, seminar ini akan menjadi forum bagi pemikir-pemikir terbaik untuk berbagi wawasan dan ide-ide inspiratif dalam menciptakan masa depan yang lebih baik bagi semua.",
  },
];

export const headerData = [
  {
    label: "about",
    title: "our event",
    desc: "Acara tahunan yang diselenggarakan oleh komunitas GDSC di Universitas Islam Negeri Maulana Malik Ibrahim Malang ",
    classes: "lg:text-center",
  },
  {
    label: "speaker",
    title: "meet the incredible speaker",
    desc: "Temui para pakar teknologi kami! Saksikan pembicara ahli industri yang akan membagikan wawasan mendalam tentang peran teknologi dalam mengatasi tantangan global di Seminar Maliki Tech Festival.",
    classes: "lg:max-w-[400px]",
  },
];
