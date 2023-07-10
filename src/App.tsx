import { useState } from "react";
import Folder from "./Components/Folder";
import { explorer } from "./Data/data";
import useTraverseTree from "./Hooks/UseTraverseTree";
import { ExplorerProps } from "./Interfaces/types";

function App() {
  const [explorerData, setExplorerData] = useState<ExplorerProps>(explorer);

  const { insertNode } = useTraverseTree();
  const handleInsertNode = (
    folderId: number,
    item: string,
    isFolder: boolean
  ) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    if (finalTree) {
      setExplorerData(finalTree);
    }
  };
  return (
    <div>
      <h3 style={{textAlign: "center"}}>File Structure</h3>
      <Folder explorerData={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
