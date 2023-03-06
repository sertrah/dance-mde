// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for bachata documents */
interface BachataDocumentData {
    /**
     * title field in *bachata*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: bachata.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *bachata*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: bachata.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BachataDocumentDataSlicesSlice>;
}
/**
 * Slice for *bachata → Slice Zone*
 *
 */
type BachataDocumentDataSlicesSlice = AcademiesSlice;
/**
 * bachata document from Prismic
 *
 * - **API ID**: `bachata`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BachataDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BachataDocumentData>, "bachata", Lang>;
/** Content for events documents */
interface EventListDocumentData {
    /**
     * title field in *events*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: eventList.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * reference field in *events*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: eventList.reference
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    reference: prismicT.RelationField<"events">;
    /**
     * Slice Zone field in *events*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: eventList.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<EventListDocumentDataSlicesSlice>;
}
/**
 * Slice for *events → Slice Zone*
 *
 */
type EventListDocumentDataSlicesSlice = EventSlice;
/**
 * events document from Prismic
 *
 * - **API ID**: `eventList`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventListDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<EventListDocumentData>, "eventList", Lang>;
/** Content for event documents */
interface EventsDocumentData {
    /**
     * title field in *event*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: events.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * event page title field in *event*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: events.eventPageTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    eventPageTitle: prismicT.RichTextField;
    /**
     * Slice Zone field in *event*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: events.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<EventsDocumentDataSlicesSlice>;
}
/**
 * Slice for *event → Slice Zone*
 *
 */
type EventsDocumentDataSlicesSlice = EventSlice;
/**
 * event document from Prismic
 *
 * - **API ID**: `events`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<EventsDocumentData>, "events", Lang>;
/** Content for home documents */
interface HomeDocumentData {
    /**
     * title field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * reference field in *home*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: home.reference
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    reference: prismicT.RelationField;
    /**
     * Slice Zone field in *home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = HomeGenreSlice | HomeEventsSlice;
/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for salsa documents */
interface SalsaDocumentData {
    /**
     * title field in *salsa*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: salsa.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Slice Zone field in *salsa*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: salsa.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SalsaDocumentDataSlicesSlice>;
}
/**
 * Slice for *salsa → Slice Zone*
 *
 */
type SalsaDocumentDataSlicesSlice = AcademiesSlice;
/**
 * salsa document from Prismic
 *
 * - **API ID**: `salsa`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SalsaDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SalsaDocumentData>, "salsa", Lang>;
export type AllDocumentTypes = BachataDocument | EventListDocument | EventsDocument | HomeDocument | SalsaDocument;
/**
 * Primary content in Academies → Primary
 *
 */
interface AcademiesSliceDefaultPrimary {
    /**
     * Title field in *Academies → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: academies.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Academies → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: academies.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Academies → Items
 *
 */
export interface AcademiesSliceDefaultItem {
    /**
     * content field in *Academies → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: academies.items[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * image field in *Academies → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: academies.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * start date field in *Academies → Items*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: academies.items[].startDate
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    startDate: prismicT.DateField;
    /**
     * location field in *Academies → Items*
     *
     * - **Field Type**: GeoPoint
     * - **Placeholder**: *None*
     * - **API ID Path**: academies.items[].location
     * - **Documentation**: https://prismic.io/docs/core-concepts/geopoint
     *
     */
    location: prismicT.GeoPointField;
    /**
     * InstagramLinkTo field in *Academies → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: academies.items[].instagramLinkTo
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    instagramLinkTo: prismicT.LinkField;
    /**
     * whatsappNumber field in *Academies → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: academies.items[].whatsappnumber
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    whatsappnumber: prismicT.KeyTextField;
}
/**
 * Default variation for Academies Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Academies`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AcademiesSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<AcademiesSliceDefaultPrimary>, Simplify<AcademiesSliceDefaultItem>>;
/**
 * Slice variation for *Academies*
 *
 */
type AcademiesSliceVariation = AcademiesSliceDefault;
/**
 * Academies Shared Slice
 *
 * - **API ID**: `academies`
 * - **Description**: `Academies`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AcademiesSlice = prismicT.SharedSlice<"academies", AcademiesSliceVariation>;
/**
 * Item in Event → Items
 *
 */
export interface EventSliceDefaultItem {
    /**
     * image field in *Event → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: event.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * title field in *Event → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: event.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * date field in *Event → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.items[].date
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    date: prismicT.RichTextField;
    /**
     * description field in *Event → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * showMore field in *Event → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: event.items[].showmore
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    showmore: prismicT.LinkField;
    /**
     * location field in *Event → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event.items[].location
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    location: prismicT.RichTextField;
}
/**
 * Default variation for Event Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Event`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<EventSliceDefaultItem>>;
/**
 * Slice variation for *Event*
 *
 */
type EventSliceVariation = EventSliceDefault;
/**
 * Event Shared Slice
 *
 * - **API ID**: `event`
 * - **Description**: `Event`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventSlice = prismicT.SharedSlice<"event", EventSliceVariation>;
/**
 * Primary content in HomeEvents → Primary
 *
 */
interface HomeEventsSliceDefaultPrimary {
    /**
     * Title field in *HomeEvents → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: home_events.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in HomeEvents → Items
 *
 */
export interface HomeEventsSliceDefaultItem {
    /**
     * image field in *HomeEvents → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_events.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * date field in *HomeEvents → Items*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: home_events.items[].date
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * title field in *HomeEvents → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_events.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * location field in *HomeEvents → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_events.items[].location
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    location: prismicT.KeyTextField;
    /**
     * linkTo field in *HomeEvents → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home_events.items[].linkto
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linkto: prismicT.LinkField;
}
/**
 * Default variation for HomeEvents Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HomeEvents`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeEventsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HomeEventsSliceDefaultPrimary>, Simplify<HomeEventsSliceDefaultItem>>;
/**
 * Slice variation for *HomeEvents*
 *
 */
type HomeEventsSliceVariation = HomeEventsSliceDefault;
/**
 * HomeEvents Shared Slice
 *
 * - **API ID**: `home_events`
 * - **Description**: `HomeEvents`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeEventsSlice = prismicT.SharedSlice<"home_events", HomeEventsSliceVariation>;
/**
 * Primary content in HomeGenre → Primary
 *
 */
interface HomeGenreSliceDefaultPrimary {
    /**
     * Title field in *HomeGenre → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: home_genre.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in HomeGenre → Items
 *
 */
export interface HomeGenreSliceDefaultItem {
    /**
     * image field in *HomeGenre → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_genre.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * title field in *HomeGenre → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_genre.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * linkTo field in *HomeGenre → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home_genre.items[].linkto
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linkto: prismicT.LinkField;
    /**
     * prueba field in *HomeGenre → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_genre.items[].prueba
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    prueba: prismicT.KeyTextField;
    /**
     * color wheel field in *HomeGenre → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: Select a color
     * - **API ID Path**: home_genre.items[].colorWheel
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    colorWheel: prismicT.SelectField<"--radial-primary" | "--radial-secondary" | "--radial-ternary" | "--radial-quartary">;
}
/**
 * Default variation for HomeGenre Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HomeGenre`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeGenreSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HomeGenreSliceDefaultPrimary>, Simplify<HomeGenreSliceDefaultItem>>;
/**
 * Slice variation for *HomeGenre*
 *
 */
type HomeGenreSliceVariation = HomeGenreSliceDefault;
/**
 * HomeGenre Shared Slice
 *
 * - **API ID**: `home_genre`
 * - **Description**: `HomeGenre`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HomeGenreSlice = prismicT.SharedSlice<"home_genre", HomeGenreSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { BachataDocumentData, BachataDocumentDataSlicesSlice, BachataDocument, EventListDocumentData, EventListDocumentDataSlicesSlice, EventListDocument, EventsDocumentData, EventsDocumentDataSlicesSlice, EventsDocument, HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, SalsaDocumentData, SalsaDocumentDataSlicesSlice, SalsaDocument, AllDocumentTypes, AcademiesSliceDefaultPrimary, AcademiesSliceDefaultItem, AcademiesSliceDefault, AcademiesSliceVariation, AcademiesSlice, EventSliceDefaultItem, EventSliceDefault, EventSliceVariation, EventSlice, HomeEventsSliceDefaultPrimary, HomeEventsSliceDefaultItem, HomeEventsSliceDefault, HomeEventsSliceVariation, HomeEventsSlice, HomeGenreSliceDefaultPrimary, HomeGenreSliceDefaultItem, HomeGenreSliceDefault, HomeGenreSliceVariation, HomeGenreSlice };
    }
}