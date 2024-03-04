import contentful from 'contentful';

import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeBlogPostFields {
  title?: EntryFieldTypes.Symbol;
  date?: EntryFieldTypes.Date;
  slug?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Symbol;
  content?: EntryFieldTypes.RichText;
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  type?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  'blogPost'
>;

export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

export interface TypeProjectTypeFields {
  title?: EntryFieldTypes.Symbol;
  projects?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

export type TypeProjectTypeSkeleton = EntrySkeletonType<
  TypeProjectTypeFields,
  'projectType'
>;

export type TypeProjectType<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeProjectTypeSkeleton, Modifiers, Locales>;

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
