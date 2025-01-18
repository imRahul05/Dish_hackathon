import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchDishes = async () => {
  try {
    const response = await axios.get(`${API_URL}/food`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dishes:', error);
    throw error;
  }
};

export const addDish = async (dish) => {
  try {
    const response = await axios.post(`${API_URL}/food`, {
      email: "admin@gmail.com",
      dishName: dish.name,
      items: dish.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        calories: item.calorie
      }))
    });
    return response.data;
  } catch (error) {
    console.error('Error adding dish:', error);
    throw error;
  }
};