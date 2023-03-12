import Shifter from "../../../components/full/shifter";
import { ShifterModel } from "../../../components/full/model/shifter.model";

const data: ShifterModel = {
  ShifterData: {
    Body: {
      Column: {
        ColumnDefinition: "Test",
        ColumnName: "Me",
      },
    },
  },
};

export default function SystemMasterUserList() {
  return <Shifter ShifterData={data.ShifterData} />;
}
