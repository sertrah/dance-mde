import { Simplify, EventSliceZone } from "@/core/domain/interfaces/Event.repository";
import type * as prismicT from "@prismicio/types";


interface EventsDocumentData {
  title: prismicT.TitleField;
  eventPageTitle: prismicT.RichTextField;
  slices: EventSliceZone;
}

export type EventsDocumentDTO<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<EventsDocumentData>, "events", Lang>;

export interface EventDTO {
  license: string;
  next_page: unknown;
  page: number;
  prev_page: unknown;
  results: EventsDocumentDTO[];
  results_per_page: number;
  results_size: number;
  total_pages: number;
  total_results_size: number;
  version: string;
}
