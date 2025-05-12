import Event from "../../domain/entities/Event";
import { EventRepository } from "../../domain/interfaces/Event.repository";
import { createClient } from "@/prismicio";

export default class ApiEventRepository implements EventRepository {
  async getSliceOfEvents(referenceId: string, lang: string): Promise<Event> {
    const response = await createClient().getByID(referenceId, { lang });
    const { slices, title, eventPageTitle } = response.data;
    return new Event(title, eventPageTitle, slices);
  }

  async getItemsByType(type: string, lang: string): Promise<any[]> {
    const response = await createClient().getAllByType(type, {
      lang,
      limit: 3,
      graphQuery: `{
        blog {
          title
          thumbail
        }
      }`,
    });

    return response ? response : [];
  }
}
