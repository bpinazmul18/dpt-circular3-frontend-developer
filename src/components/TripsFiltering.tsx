import Input from "@/components/common/Input";
import DateInput from "@/components/common/DateInput";
import DaySelect from "@/components/common/DaySelect";
import Button from "@/components/common/Button";

export default function TripsFiltering() {
  return (
    <div className="container px-4 mx-auto">
      <div className="py-4 border-y border-slatBlue">
        <div className="flex flex-wrap gap-3">
          <Input type="text" placeholder="LHR" />
          <Input type="text" placeholder="CDG" />
          <DateInput />
          <DaySelect options={[1, 2, 3, 4, 5, 5, 6, 7]} label="Day -" />
          <DaySelect options={[1, 2, 3, 4, 5, 5, 6, 7]} label="Day +" />
          <DaySelect options={[1, 2, 3, 4, 5, 5, 6, 7]} label="Any time" />

          <div className="flex items-center gap-4">
            <div className="text-2xl font-medium">+</div>
            <DaySelect options={[1, 2, 3, 4, 5, 5, 6, 7]} label="ADT" />
            <DaySelect options={[1, 2, 3, 4, 5, 5, 6, 7]} label="1" />
            <div className="text-2xl font-medium">+</div>
          </div>
        </div>
      </div>

      <div className="py-4 border-b border-slatBlue">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
            >
              Extra Options
            </label>
          </div>

          <div className="flex items-center gap-3">
            <div>Environment</div>
            <div className="flex items-center">
              <input
                id="dummy"
                type="radio"
                value=""
                name="environment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="dummy"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Dummy
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="pdt"
                type="radio"
                value=""
                name="environment"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="pdt"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                PDT
              </label>
            </div>
          </div>

          <Button>Search</Button>
        </div>
      </div>

      <div className="text-primary text-base leading-normal ">
        Data Parsed successfully
      </div>
    </div>
  );
}
