import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background } from 'reactflow';

const rfStyle = {
    backgroundColor: '#D0C0F7',
  };

export const Subflow = ()=>{

    const initialNodes = [
        {
          id: 'A',
          type: 'group',
          position: { x: 0, y: 0 },
          style: {
            width: 170,
            height: 140,
          },
        },
        {
          id: 'A-1',
          type: 'input',
          data: { label: 'Child Node 1' },
          position: { x: 10, y: 10 },
          parentNode: 'A',
          extent: 'parent',
        },
        {
          id: 'A-2',
          data: { label: 'Child Node 2' },
          position: { x: 10, y: 90 },
          parentNode: 'A',
          extent: 'parent',
        },
        {
          id: 'B',
          type: 'output',
          position: { x: -100, y: 200 },
          data: null,
          style: {
            width: 170,
            height: 140,
            backgroundColor: 'rgba(240,240,240,0.25)',
          },
        },
        {
          id: 'B-1',
          data: { label: 'Child 1' },
          position: { x: 50, y: 10 },
          parentNode: 'B',
          extent: 'parent',
          draggable: false,
          style: {
            width: 60,
          },
        },
        {
          id: 'B-2',
          data: { label: 'Child 2' },
          position: { x: 10, y: 90 },
          parentNode: 'B',
          extent: 'parent',
          draggable: false,
          style: {
            width: 50,
          },
        },
        {
          id: 'B-3',
          data: { label: 'Child 3' },
          position: { x: 100, y: 90 },
          parentNode: 'B',
          extent: 'parent',
          draggable: false,
          style: {
            width: 50,
          },
        },
        {
          id: 'C',
          type: 'output',
          position: { x: 100, y: 200 },
          data: { label: 'Node C' },
        },
      ];

      const initialEdges = [
        { id: 'a1-a2', source: 'A-1', target: 'A-2' },
        { id: 'a2-b', source: 'A-2', target: 'B' },
        { id: 'a2-c', source: 'A-2', target: 'C' },
        { id: 'b1-b2', source: 'B-1', target: 'B-2' },
        { id: 'b1-b3', source: 'B-1', target: 'B-3' },
      ];

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div style={{'height':'100vh','width':'100vw'}} >
        <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
        attributionPosition="top-right"
        >
        <Background />
        </ReactFlow>
        </div>
    );
}