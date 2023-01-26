import { addNewCity, deleteAddedCities } from "@/reducers/baseInfo/dispatch";
import { initialState, reducer } from "@/reducers/baseInfo/reducer";
import { useReducer, useState } from "react";
import { HiPlus, HiXMark } from "react-icons/hi2";
import { v4 as uuid } from "uuid";

const BaseInfo = () => {
  const [newCity, setNewCity] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCity(uuid().slice(0, 8), newCity));
  };

  const handleNewCity = (e) => {
    setNewCity(e.target.value);
  };

  const handleDeleteCity = (id) => {
    dispatch(deleteAddedCities(id));
  };

  const cities = state.addedCities.map((item) => {
    return (
      <li
        key={item.id}
        className="flex items-center justify-between border-b-2 hover:bg-neutral-50 p-3"
      >
        <p className=" ">{item.cityName}</p>
        <span
          className="p-1 cursor-pointer text-red-500  border border-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
          onClick={() => handleDeleteCity(item.id)}
        >
          <HiXMark className="text-2xl" />
        </span>
      </li>
    );
  });

  return (
    <div>
      <div className="card">
        <h3 className="font-bold text-lg border-b-2 p-3">ساخت شهر</h3>
        <div className="p-3 mb-1">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <label htmlFor="city" className="self-center">
              شهر مورد نظر را وارد کنید:
            </label>
            <div>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm py-1 px-3"
                placeholder="مثال: تهران"
                value={newCity}
                onChange={handleNewCity}
                required
              />
            </div>
            <button
              type="submit"
              className="flex gap-2 items-center py-1 px-3 text-white bg-green-700 hover:bg-green-800 rounded-sm"
            >
              <div>افزودن</div>
              <HiPlus className="w-5 h-5" />
            </button>
          </form>
        </div>
        <div className="p-3">
          <div className="border rounded-md">
            <h4 className="text-lg text-center bg-neutral-200">
              شهر های ثبت شده
            </h4>
            <div>
              <ul>
                {cities.length ? cities : <li className="p-3 text-center text-neutral-400"> لطفا حداقل یک شهر ثبت کنید </li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseInfo;
