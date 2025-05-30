import Event from "../../domain/entities/Event";
import {EventRepository} from "../../domain/interfaces/Event.repository";

export async function getSliceOfEvents(
  eventRepository: EventRepository,
  referenceId: string,
  lang: string,
): Promise<Event> {
  //get all events
  let eventList = await eventRepository.getSliceOfEvents(referenceId,lang );

  return eventList;
}

export async function getItemsByType(
  eventRepository: EventRepository,
  type: string,
  lang: string,
): Promise<any[]> {
  //get all events
  let eventList = await eventRepository.getItemsByType(type,lang );

  return eventList;
}

/* export function getEventByName(
  eventRepository: EventRepository,
  eventName: string
): Promise<Event> {
  return eventRepository.getByName(eventName);
}

export function getEventImage(
  eventRepository: EventRepository,
  eventName: string
): Promise<string> {
  return eventRepository.getImageByBreed(eventName);
} */