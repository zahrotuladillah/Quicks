import Task from "../components/task";

export default function Todo({dataTask}) {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <select
            placeholder="My Task"
            className="p-4 rounded-md border-[1px] border-black sm:text-sm"
            {...register("category")}
            id="category"
          >
            <option value="">Please select</option>
            <option value="best seller">Best Seller</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
            <option value="daily">Daily</option>
          </select>
        </div>
        <div className="p-4 bg-primary-blue rounded-md">New Task</div>
      </div>
      <div>
        {
            dataTask.map((data)=>(
                <Task data={data}/>
            ))
        }
      </div>
    </div>
  );
}
