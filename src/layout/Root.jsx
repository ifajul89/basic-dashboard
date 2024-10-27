import CardDetails from "../components/CardDetails";
import DateTimePicker from "../components/DateTimePicker";
import SearchBox from "../components/SearchBox";
import TableSection from "../components/TableSection";

const Root = () => {
  return (
    <div className="container mx-auto p-2 md:py-5 md:px-10">
      <SearchBox />
      <DateTimePicker />
      <CardDetails />
      <TableSection />
    </div>
  );
};

export default Root;
