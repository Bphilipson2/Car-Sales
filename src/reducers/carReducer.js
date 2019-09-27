import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';
const initialState = {
    store: [
        { id: 1, name: 'Carbon fiber', price: 15000 },
        { id: 2, name: 'Fire Extinguisher', price: 7000 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    additionalPrice: 0,
    car: {
      price: 417826,
      name: '2019 Lamborghini Aventador',
      image:
        'http://blog.dupontregistry.com/wp-content/uploads/2018/09/post_malone_lamborghini.jpg',
      features: [

      ]
    },
};

export const CarReducer = (state = initialState, action) => {
    switch (action.type){

      case ADD_FEATURE:
      // console.log('carReducer: ADD_FEATURE: ', state);
        return {
          ...state, 
          additionalPrice: state.additionalPrice += action.payload.price,
          car: {
            ...state.car,
            features : [
              ...state.car.features,
              action.payload
            ]
          }
        };
      case REMOVE_FEATURE:
        console.log('carReducer: REMOVE_FEATURE:', state);
        return {
          ...state,
          additionalPrice: state.additionalPrice - action.payload.price,
          car: {
            ...state.car,
            features : state.car.features.filter(feature => 
              feature.id !== feature.id
            )
          }
        }

        default:
            return state;
    }
}