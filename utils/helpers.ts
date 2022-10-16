import { CompanyRating } from '../interfaces';

export const sortRatings = (ratings: CompanyRating[], sortMethod: string) => {
  return [...ratings].sort((item1, item2) => {
    if (sortMethod === 'asc') {
      return item1.rating - item2.rating;
    }
    return item2.rating - item1.rating;
  });
};
