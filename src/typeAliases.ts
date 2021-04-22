// aliases can be created for code clarity to deferenciate custom types with types provided by JS
// has to be defined starting with uppercased letter
type ID = string;
type PopularTag = string;
// this indicates that this custom type might not exist
type MaybePopularTag = PopularTag | null;
// this sets a default type
type shouldBeSetToDefault = string | null;

interface UserInterface {
  name: string;
  id: ID;
}

// typescript is smart enough to know that popularTags is an array of strings
// however, for code claity it is best to define the type for that specific entity
const popularTags: PopularTag[] = ['pro', 'sponsor']

// this line is erroring out as the type of this entity can only be either string or null
//const sponsorsTag: MaybePopularTag = []
