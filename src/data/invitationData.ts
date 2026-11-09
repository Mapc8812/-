/**
 * Data store for Mongolian Labor Medal Celebration Invitation
 * Сэдэв: Хөдөлмөрийн Хүндэт Медалиар шагнагдсаны хүндэтгэлийн найр
 */

export interface EventProgramItem {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  category: 'medal' | 'ceremony' | 'family' | 'art';
}

export interface GuestRSVP {
  id: string;
  name: string;
  phone: string;
  attendance: 'attending' | 'declined';
  guestCount: number;
  message?: string;
  createdAt: string;
}

export interface InvitationConfig {
  honoreeTitle: string;
  honoreeName: string;
  honoreeRole: string;
  decreeText: string;
  eventDate: string; // ISO format
  eventDisplayDate: string;
  eventDisplayTime: string;
  eventDayOfWeek: string;
  venueName: string;
  venueRoom: string;
  venueAddress: string;
  dressCode: string;
  contactPhones: string[];
  hostFamily: string;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
}

export const initialInvitationConfig: InvitationConfig = {
  honoreeTitle: "Монгол Улсын Төрийн дээд шагнал «Хөдөлмөрийн гавьяаны улаан тугийн одон»-т",
  honoreeName: "Жадамбын Хишиг-Эрдэнэ",
  honoreeRole: "Эх орныхоо хөгжил дэвшилд олон жилийн нөр их хөдөлмөр, хичээл зүтгэлээ зориулсан хүндэт зүтгэлтэн",
  decreeText: "Монгол Улсын Ерөнхийлөгчийн зарлигаар эх орныхоо хөгжил цэцэглэлт, бүтээн байгуулалтын их үйлсэд олон жилийн нөр их хөдөлмөр, чин шударга хичээл зүтгэлээ зориулсныг өндрөөр үнэлэн Төрийн дээд шагнал «ХӨДӨЛМӨРИЙН ГАВЬЯАНЫ УЛААН ТУГИЙН ОДОН»-оор шагнагдлаа.",
  eventDate: "2026-11-14T11:00:00+08:00",
  eventDisplayDate: "2026 оны 11 дүгээр сарын 14",
  eventDisplayTime: "11:00 цагт",
  eventDayOfWeek: "Бямба гараг",
  venueName: "Багануур дүүргийн «Залуус» төв",
  venueRoom: "6 давхарт (Хүлээн авалтын танхим)",
  venueAddress: "Улаанбаатар хот, Багануур дүүрэг, Залуус төвийн 6 давхарт",
  dressCode: "Үндэсний хэв маяг бүхий ёслолын хувцас / Dark formal suit",
  contactPhones: ["88038681"],
  hostFamily: "Жадамбын Хишиг-Эрдэнэ",
  mapEmbedUrl: "https://maps.google.com/maps?q=47.7778302,108.3692642&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapDirectionsUrl: "https://maps.app.goo.gl/sTu5cccSMeXfXvPY7"
};

export const defaultProgramTimeline: EventProgramItem[] = [
  {
    time: "11:00",
    title: "Хүндэт зочдыг угтан авах ёслол",
    description: "Хүндэтгэлийн хүлээн авалт, дурсгалын зураг татуулах, Welcome Drink",
    highlight: false
  },
  {
    time: "11:30",
    title: "Хүндэтгэлийн найрын нээлт",
    description: "Ёслолын нээлтийн үг, Одон гардан авсан агшны түүхэн замнал, баримтат дүрс бичлэг",
    highlight: true
  },
  {
    time: "12:00",
    title: "Төрийн дээд шагналд зориулсан хундага өргөлт",
    description: "Төр түмний хүндэтгэл, үр хүүхэд, ахан дүүс, хамт олны баярын ерөөл, мэндчилгээ",
    highlight: true
  },
  {
    time: "12:30",
    title: "Үндэсний урлагийн хүндэтгэлийн тоглолт",
    description: "Морин хуурын аялгуу, Ардын болон уртын дуу, Цэнгээнт бүжгийн тусгай үзүүлбэр",
    highlight: false
  },
  {
    time: "13:30",
    title: "Хүндэтгэлийн найрын зоог & Дурсамж яриа",
    description: "Дээд зэрэглэлийн зоог, хамтран ажилласан үе үеийн нөхөд, ахан дүүсийн дурсамж",
    highlight: false
  },
  {
    time: "14:30",
    title: "Дурсгалын бэлэг гардуулах & Хаалтын зураг",
    description: "Талархлын үг, хүндэт зочдын нэгдсэн дурсгалын гэрэл зураг татуулах ёслол",
    highlight: true
  }
];

export const defaultGalleryPhotos: GalleryPhoto[] = [
  {
    id: "order-red-banner",
    url: "/assets/aistudio/image_46c61168.png",
    caption: "Монгол Улсын Төрийн дээд шагнал «Хөдөлмөрийн гавьяаны улаан тугийн одон»",
    category: "medal"
  }
];

