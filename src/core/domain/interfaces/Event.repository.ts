import Event from "../entities/Event";
import type * as prismicT from "@prismicio/types";

export interface EventRepository {
  getList(): Promise<Event>; // TODO: the example
  getSliceOfEvents(referenceId: string, lang: string): Promise<Event>;
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
  date: prismicT.RichTextField;
  description: prismicT.RichTextField;
  LocationId: string;
  showLocation: string;
  showWebsiteLabel: string;
  showWebsite: prismicT.FilledLinkToWebField;
}

/** Prismic Interfaces end */
