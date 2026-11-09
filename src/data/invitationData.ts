/**
 * Data store for Mongolian Labor Medal Celebration Invitation
 * Сэдэв: Хөдөлмөрийн Хүндэт Медалиар шагнагдсаны хүндэтгэлийн найр
 */

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
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
  contactPhones: ["88038681"],
  hostFamily: "Жадамбын Хишиг-Эрдэнэ",
  mapEmbedUrl: "https://maps.google.com/maps?q=47.7778302,108.3692642&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapDirectionsUrl: "https://maps.app.goo.gl/sTu5cccSMeXfXvPY7"
};

export const defaultGalleryPhotos: GalleryPhoto[] = [
  {
    id: "order-red-banner",
    url: "/assets/aistudio/image_46c61168.png",
    caption: "Монгол Улсын Төрийн дээд шагнал «Хөдөлмөрийн гавьяаны улаан тугийн одон»"
  },
  {
    id: "uploaded-family-group-1",
    url: "/assets/fffcc3de-eb1c-4fb3-8497-7e7184645105.jpg",
    caption: "Хүндэтгэлийн баярын дурсгалын зураг"
  },
  {
    id: "uploaded-honoree-portrait-1",
    url: "/assets/cb0bafaa-bb2d-4a96-93a0-1e1025f1b404.jpg",
    caption: "Одонгоо гардан авсан баярт мөч"
  },
  {
    id: "uploaded-family-group-2",
    url: "/assets/8a85b1ff-dbca-45c5-a4e2-ba067cb0110b.jpg",
    caption: "Гэр бүл, дотнын хүмүүсийн хамт"
  },
  {
    id: "uploaded-family-group-3",
    url: "/assets/54a01190-71e5-419b-a1a5-6e7fcc11b83a.jpg",
    caption: "Шагналын баярын дурсгалт өдөр"
  },
  {
    id: "uploaded-honoree-portrait-2",
    url: "/assets/451ab7a4-955b-4f2a-945c-145f14685a6d.jpg",
    caption: "Хүндэтгэлийн арга хэмжээний үеэр"
  },
  {
    id: "uploaded-family-group-4",
    url: "/assets/419a67b4-22e2-4b4e-b8f0-dd4196b92497.jpg",
    caption: "Цэцгийн баглаатай дурсгалын зураг"
  },
  {
    id: "uploaded-family-group-5",
    url: "/assets/90e46e65-423b-4b61-a492-5ff93e6f06d4.jpg",
    caption: "Хамт олны баярын агшин"
  },
  {
    id: "uploaded-honoree-portrait-3",
    url: "/assets/8cf9c3be-5f7f-403b-972a-d8b482e22b1d.jpg",
    caption: "Төрийн шагнал гардан авсан мөч"
  },
  {
    id: "uploaded-honoree-with-official",
    url: "/assets/9edb6469-83ea-43ec-a86e-1f01e06ad16d.jpg",
    caption: "Хүндэтгэлийн гар барилтын агшин"
  }
];

