import { useState } from "react";
import styles from "./file-tree-viewer.module.css";

function FileTree({ fileTree }) {
  return (
    <div>
      <h1>Demo</h1>
      <ul className={styles.tree}>
        {fileTree.map((file) => (
          <File key={file.name} file={file} />
        ))}
      </ul>
    </div>
  );
}

function File({ file }) {
  const [isOpen, setIsOpen] = useState(false);

  return file.children ? (
    <>
      <li className={styles.item}>
        <button className={styles.actionBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "▲" : "▼"}📁 {file.name}
        </button>
      </li>
      {isOpen && (
        <ul className={styles.tree}>
          {file.children.map((f) => (
            <File key={f.name} file={f} />
          ))}
        </ul>
      )}
    </>
  ) : (
    <li className={styles.item}>
      <span>📄 {file.name}</span>
    </li>
  );
}

export const fileTree = [
  {
    name: "codebooks",
    children: [
      {
        name: "codebook.pdf",
      },
      {
        name: "format.txt",
      },
    ],
  },
  {
    name: "data",
    children: [
      {
        name: "aggregate",
        children: [
          {
            name: "aggregates.tab",
          },
        ],
      },
      {
        name: "raw",
        children: [
          {
            name: "output_data.tab",
          },
          {
            name: "quality_data.tab",
          },
        ],
      },
      {
        name: "readme.txt",
      },
    ],
  },
];

export default function FileTreeViewer() {
  return (
    <>
      <h1>File Tree Viewer</h1>
      <div>
        Build a file tree viewer.
        <br />
        <img src="https://i.ibb.co/ftvw6d1/Whats-App-Image-2023-10-12-at-18-30-38.jpg" />
        <br />
        <br />
        <ol>
          <li>It should allow arbitrary levels of depth</li>
          <li>You should be able to expand/collapse any part of the tree</li>
          <li>Basic aesthetics with pure CSS</li>
        </ol>
      </div>
      <FileTree fileTree={fileTree} />
    </>
  );
}
