import type * as prismicT from "@prismicio/types";
import { EventSliceZone, Simplify,  EventSliceItem } from "../interfaces/Event.repository";
import { Entity } from "./Entity";

type  eventList = Simplify<EventSliceItem>[] | undefined;

export default class Event extends Entity {
  commonTitle: prismicT.TitleField;
  list: eventList;
  pageTitle: prismicT.RichTextField;

  constructor(
    commonTitle: prismicT.TitleField,
    pageTitle: prismicT.RichTextField,
    slices: EventSliceZone,
  ) {
    super();
    this.commonTitle = commonTitle;
    this.pageTitle = pageTitle;
    this.list = this.getEventsData(slices);
  }

  private getEventsData = (slices: EventSliceZone):  eventList => {
    return slices[0]?.items;
  }
}