import { createAction, props } from "@ngrx/store";
import { BookModel, BookRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Books Page] Enter");

export const createBook = createAction(
  "[Books Page] Create a book",
  props<{ book: BookRequiredProps }>()
);

export const updateBook = createAction(
  "[Books Page] Update a book",
  props<{
    changes: BookRequiredProps;
    id: string;
  }>()
);

export const deleteBook = createAction(
  "[Books Page] Delete a book",
  props<{
    id: string;
  }>()
);

export const selectBook = createAction(
  "[Books Page] Select Book",
  props<{
    id: string;
  }>()
);

export const clearSelectedBook = createAction(
  "[Books Page] Clear Selected Book"
);
