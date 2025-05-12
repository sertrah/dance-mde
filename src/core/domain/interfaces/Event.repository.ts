import { socialPlaceKeys } from "@/helpers/temp";
import Event from "../entities/Event";
import type * as prismicT from "@prismicio/types";

export interface EventRepository {
  getSliceOfEvents(referenceId: string, lang: string): Promise<Event>;
  getItemsByType(type: string, lang: string): Promise<any[]>;
  getByName?(name: string): Promise<Event>;
  getImageByEvent?(event: string): Promise<string>;
  getBySubEvent?(name: string): Promise<Event[]>;
}


/** Prismic Interfaces */

export type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};

type EventSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<EventSliceItem>
>;


type EventSlice = prismicT.SharedSlice<"event", EventSliceDefault>;

export type EventSliceZone = prismicT.SliceZone<EventSlice>

export interface EventSliceItem {
  image: prismicT.ImageField<never>;
  title: prismicT.TitleField;
  date: prismicT.TitleField;
  description: prismicT.RichTextField;
  locationId: socialPlaceKeys;
  showLocation: string;
  urlEvent: string,
  urlLocation: string,
  genres: string,
}

/** Prismic Interfaces end */
