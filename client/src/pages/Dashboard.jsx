import { useState } from "react";
import Navbar from "../components/Navbar";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { AddItemForm } from "../components/AddItemForm";
// import Background from "../components/Background";

const Dashboard = () => {
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      items: [
        { name: "Tomato Sauce", quantity: "100g", calories: 50 },
        { name: "Mozzarella", quantity: "150g", calories: 280 },
        { name: "Basil", quantity: "10g", calories: 5 },
      ],
    },
    // Add more sample dishes
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Background/> */}
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Menu Items</h1>
          <AddItemForm />
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="glass-morphism rounded-xl p-6 card-hover animate-fadeIn"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dish.name}
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit2 className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {dish.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {item.calories} cal
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;