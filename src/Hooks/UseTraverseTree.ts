import { ExplorerProps } from "../Interfaces/types";

export default function useTraverseTree() {
  function insertNode(
    tree: ExplorerProps,
    folderId: number,
    item: string,
    isFolder: boolean
  ): any {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });

      return tree;
    }

    let nestedNode = [];
    nestedNode = tree.items.map((node) =>
      insertNode(node, folderId, item, isFolder)
    );
    return { ...tree, items: nestedNode };
  }

  function deleteNode() {}
  function updateNode() {}
  return { insertNode, deleteNode, updateNode };
}
