export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeatureAC = feature => {
    // console.log('actions: index.js: addFeature: ', feature);
    return {
        type: ADD_FEATURE, payload: feature
    };
};

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeatureAC = feature => {
    console.log('actions: REMOVE_FEATURE:', feature);
    return {
        type: REMOVE_FEATURE, payload: feature
    };
}; 