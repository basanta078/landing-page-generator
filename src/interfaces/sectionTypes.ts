

export type SectionTypes = 'hero' | 'image-text' | 'data';

export type HeroComponent = {
  type: 'hero',
  imageURI: string,
}

export type ImageText = {
  type: 'image-text',
  imageUri: string,
  text: string,
  title: string,
  leftToRight: boolean,
}

export type Data = {
  type: 'data',
  url: string,
}

export type SectionComponents = HeroComponent | ImageText | Data;