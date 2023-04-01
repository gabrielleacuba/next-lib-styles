export type ListArray = {
  list: ListType[]
};

export type ListType = {
  adult: Boolean;
  backdrop_path: String;
  id: Number;
  title: String;
  original_language: String;
  overview: String;
  poster_path: String;
  media_type: String;
  genre_ids: [];
  popularity: Number;
  relase_date: String;
  video: Boolean;
  vote_aversage: Number;
  vote_count: Number;
};
