import { createSelector } from 'reselect'

const selectDirectory = state => state.directory;

export const displayDirectory = createSelector(
    [selectDirectory],
    directory => directory.sections
);