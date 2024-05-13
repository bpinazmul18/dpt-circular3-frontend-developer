import Table from "@/components/common/Table";
import TableHeader from "@/components/common/TableHeader";
import TableHeaderItem from "@/components/common/TableHeaderItem";
import TableBody from "@/components/common/TableBody";
import TableRow from "@/components/common/TableRow";
import TableDataItem from "@/components/common/TableDataITem";
import { FlightResponse, FlightSegmentType } from "@/Models/FlightResponse";
import Button from "@/components/common/Button";

const renderSegments = (segments: FlightSegmentType[]) => {
  return segments?.map((segment, index) => (
    <div key={index}>
      {segment?.carrierCode} {segment?.aircraft}
    </div>
  ));
};

const renderFlightNumbers = (segments: FlightSegmentType[]) => {
  return segments?.map((segment, index) => (
    <div key={index}>{segment?.flightNumber}</div>
  ));
};

const renderFares = (fares: string[]) => {
  return fares?.map((fare, index) => <div key={index}>{fare}</div>);
};

const renderDepartureInfo = (segments: FlightSegmentType[]) => {
  return segments?.map((segment, index) => (
    <div key={index}>
      {segment?.departure?.iataCode} - {segment?.arrival?.iataCode}
    </div>
  ));
};

const renderDepartureTime = (segments: FlightSegmentType[]) => {
  return segments?.map((segment, index) => (
    <div key={index}>{segment?.departure?.at}</div>
  ));
};

const renderArrivalTime = (segments: FlightSegmentType[]) => {
  return segments?.map((segment, index) => (
    <div key={index}>{segment?.arrival?.at}</div>
  ));
};

type FlightListType = {
  listData?: FlightResponse["data"];
};

export default function FlightList({ listData }: FlightListType) {
  return (
    <div className="py-4">
      <div className="relative overflow-x-auto">
        <Table>
          <TableHeader>
            <TableHeaderItem>FLIGHT</TableHeaderItem>
            <TableHeaderItem>AIRCRAFT</TableHeaderItem>
            <TableHeaderItem>CLASS</TableHeaderItem>
            <TableHeaderItem>FARE</TableHeaderItem>
            <TableHeaderItem>ROUTE</TableHeaderItem>
            <TableHeaderItem>DEPARTURE</TableHeaderItem>
            <TableHeaderItem>ARRIVAL</TableHeaderItem>
            <TableHeaderItem>DURATION</TableHeaderItem>
            <TableHeaderItem>PRICE</TableHeaderItem>
          </TableHeader>
          <TableBody>
            {listData?.flightOffer?.map((item, index) => {
              const segments = item?.itineraries[0]?.segments;
              const fares = item?.class?.[0];
              const fareBasis = item?.fareBasis[0];

              return (
                <TableRow key={index}>
                  <TableDataItem>{renderSegments(segments)}</TableDataItem>
                  <TableDataItem>{renderFlightNumbers(segments)}</TableDataItem>
                  <TableDataItem>{renderFares(fares)}</TableDataItem>
                  <TableDataItem>{renderFares(fareBasis)}</TableDataItem>
                  <TableDataItem>{renderDepartureInfo(segments)}</TableDataItem>
                  <TableDataItem>{renderDepartureTime(segments)}</TableDataItem>
                  <TableDataItem>{renderArrivalTime(segments)}</TableDataItem>
                  <TableDataItem>
                    {item?.itineraries[0]?.duration}
                  </TableDataItem>
                  <TableDataItem>
                    <div>
                      <div className="pb-1.5">{item?.price}</div>
                      <Button>Select</Button>
                    </div>
                  </TableDataItem>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
