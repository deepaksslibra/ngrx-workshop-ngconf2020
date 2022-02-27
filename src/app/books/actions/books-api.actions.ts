import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";

export const booksLoaded = createAction(
  "[Books API] Books Loaded",
  props<{
    books: BookModel[];
  }>()
);

export const bookCreated = createAction(
  "[Book API] Book Created",
  props<{
    book: BookModel;
  }>()
);

export const bookUpdated = createAction(
  "[Book API] Book Updated",
  props<{
    book: BookModel;
  }>()
);

export const bookDeleted = createAction(
  "[Books API] Book Deleted",
  props<{
    id: string;
  }>()
);
