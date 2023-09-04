import React, { useEffect, useState } from "react";
import { Table } from "@ui";

type DataType = {
  name: string;
  type: number;
  self: number;
  total: number;
  ch?: DataType[];
};

type ToggleState = { [key: string]: boolean };

const FrameGraph: React.FC<{ data: DataType }> = ({ data }) => {
  const [graphData, setGraphData] = useState<DataType[]>([]);
  const [toggledNodes, setToggledNodes] = useState<ToggleState>({});

  useEffect(() => {
    if (data) {
      setGraphData([data]);
    }
  }, [data]);

  const handleToggle = (nodeName: string) => {
    setToggledNodes({
      ...toggledNodes,
      [nodeName]: !toggledNodes[nodeName],
    });
  };

  const renderRow = (node: DataType, level = 0) => {
    const { name, type, self, total, ch } = node;
    const isToggled = toggledNodes[name];

    return (
      <>
        {name !== "all" && (
          <Table.Row key={name}>
            <Table.Cell style={{ paddingLeft: `${level * 20}px` }}>
              {ch && name !== "all" && (
                <button onClick={() => handleToggle(name)}>
                  {isToggled ? "-" : "+"}
                </button>
              )}{" "}
              {name}
            </Table.Cell>
            <Table.Cell align="center">{type}</Table.Cell>
            <Table.Cell align="center">{self}</Table.Cell>
            <Table.Cell align="center">{total}</Table.Cell>
          </Table.Row>
        )}
        {isToggled && ch?.map((child) => renderRow(child, level + 1))}
      </>
    );
  };

  return (
    <Table>
      <Table.Row>
        <Table.Cell>Name</Table.Cell>
        <Table.Cell align="center">Type</Table.Cell>
        <Table.Cell align="center">Self</Table.Cell>
        <Table.Cell align="center">Total</Table.Cell>
      </Table.Row>
      <tbody>{graphData.map((rootNode) => renderRow(rootNode))}</tbody>
    </Table>
  );
};

export default FrameGraph;
