import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);

export const selectDirectorySectionsObj = createSelector(
    [selectDirectorySections],
    sections => Object.keys(sections).map(key => sections[key])    
);

