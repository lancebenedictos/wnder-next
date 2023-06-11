"use client";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  DefaultEdgeOptions,
  Edge,
  EdgeChange,
  FitViewOptions,
  MarkerType,
  MiniMap,
  Node,
  NodeChange,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "to the",
  },
];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
  markerEnd: {
    type: MarkerType.ArrowClosed,
  },
};

import {
  CarIcon,
  MapPinIcon,
  MessageCircleIcon,
  PanelRightCloseIcon,
  PanelRightOpenIcon,
  ScrollTextIcon,
} from "lucide-react";

import { motion } from "framer-motion";

import MenuButton from "./MenuButtons";

const animationVariants = {
  open: { opacity: 1, x: 0, width: "100%" },
  closed: { opacity: 0, x: "-20%", width: "0" },
};

function PlanBuilder() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [panelOpen, setPanelOpen] = useState(false);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds: Node[]) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)),
    []
  );
  return (
    <div className="h-screen pt-[48px] relative">
      <div className="absolute z-30 top-20 left-10 flex rounded-full p-1  light_shadow border-2 border-[#52206b] bg-white">
        <button
          className="bg-[#c57ee9] rounded-full p-3 z-50 "
          onClick={() => setPanelOpen(!panelOpen)}
        >
          {panelOpen ? (
            <PanelRightOpenIcon className=" text-white" />
          ) : (
            <PanelRightCloseIcon className=" text-white" />
          )}
        </button>
        <motion.div
          animate={panelOpen ? "open" : "closed"}
          variants={animationVariants}
        >
          <div className="flex gap-[4px] ml-2 overflow-clip">
            <MenuButton
              trigger={<MessageCircleIcon className=" text-white" />}
              tooltipMessage="Messages"
            />
            <MenuButton
              trigger={<CarIcon className=" text-white" />}
              tooltipMessage="Trip details"
            />
            <MenuButton
              trigger={<ScrollTextIcon className=" text-white" />}
              tooltipMessage="Your todo list"
            />
            <MenuButton
              trigger={<MapPinIcon className=" text-white" />}
              tooltipMessage="Add more locations"
            />
          </div>
        </motion.div>
      </div>

      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
        // fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default PlanBuilder;
