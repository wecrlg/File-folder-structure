import { MouseEvent, useState } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { FcFolder } from "react-icons/fc";
import { ExplorerProps } from "../Interfaces/types";
import FileIcon from "../Utils/FileIcons";

interface FolderProps {
  explorerData: ExplorerProps;
  handleInsertNode: (folderId: number, item: string, isFolder: boolean) => void;
}

const ADDINPUT = {
  visible: false,
  isFolder: false,
};

export default function Folder({
  explorerData,
  handleInsertNode,
}: FolderProps) {
  const [expand, setExpand] = useState(false);
  const [addInput, setAddInput] = useState(ADDINPUT);
  const [inputValue, setInputValue] = useState("");

  function handleCreateNewFolder(
    e: MouseEvent<HTMLButtonElement>,
    isFolder: boolean
  ) {
    e.stopPropagation();
    setAddInput((prev) => ({ ...prev, isFolder, visible: true }));
    setExpand(true);
  }

  function handleCreateNewFile(
    e: MouseEvent<HTMLButtonElement>,
    isFolder: boolean
  ) {
    e.stopPropagation();
    setAddInput((prev) => ({ ...prev, isFolder, visible: true }));
    setExpand(true);
  }

  function handleAddNewItem(e: React.KeyboardEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter" && target.value) {
      handleInsertNode(explorerData.id, target.value, addInput.isFolder);
      setAddInput((prev) => ({ ...prev, visible: false }));
      setInputValue("");
    }
  }

  if (explorerData.isFolder) {
    return (
      <div className="folder_container">
        <div className="folder" onClick={() => setExpand((prev) => !prev)}>
          <span>
            <FcFolder />
            {explorerData.name}
          </span>

          <div className="btn_group">
            <button className="update">
              <GrUpdate />
            </button>
            <button className="delete">
              <FaTrashAlt />
            </button>
            <button onClick={(e) => handleCreateNewFolder(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleCreateNewFile(e, false)}>
              File +
            </button>
          </div>
        </div>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "30px" }}
        >
          {addInput.visible && (
            <div className="input_container">
              <span>
                {addInput.isFolder ? <FcFolder /> : <AiOutlineFileDone />}
              </span>
              <input
                type="text"
                onBlur={() =>
                  setAddInput((prev) => ({ ...prev, visible: false }))
                }
                onKeyDown={handleAddNewItem}
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          )}
          {explorerData.items.map((item) => (
            <Folder
              explorerData={item}
              handleInsertNode={handleInsertNode}
              key={item.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        {FileIcon(explorerData.name)} {explorerData.name}
      </div>
    );
  }
}
