import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background	, ReactFlowProvider, useReactFlow,} from 'reactflow';
import Nodes from './initialNodes2';
import NewFlow from './newFlow';

const rfStyle = {
    backgroundColor: '#D0C0F7',
  };

function  FlowGroupFn (){
	  const reactFlowInstance = useReactFlow();
    const [increment,SetIncrement] = useState(0);
    const initialNodes = [
        {
          id: 'A',
          type: 'group',
          position: { x: 0, y: 0 },
          style: {
            width: 170,
            height: 140,
          },
        }
      ];

      const initialEdges = [];

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

    function addfile(){
        const id = `${increment}`;
        console.log(id);
      const newnode=[{
        id : id,
        type : 'default',
        position : { x:10,y:10},
        parentNode : 'A', 
        style:{
          width:170,
          height:140
        }},
        {
            id: "1",
            name: "test",
            parentNode : 'A',
            position : { x:10,y:10},
            style:{
                width:170,
                height:140
              }
        }
      ];
      console.log(newnode)
    //   reactFlowInstance.addNodes(newnode);
    newnode.forEach((ele)=>{
        reactFlowInstance.addNodes(newnode)
    })
      SetIncrement(increment+1)
    }

    // const addfile = useCallback(() => {
    //   const id = `${++id_incrementer}`;
    //   const newNode = {
    //     id,
    //     position: {
    //       x: 1100,
    //       y: 100,
    //     },
    //     parentNode : 'A',
    //     style:{
    //       width:170,
    //       height:140
    //     }
    //   };
    //   reactFlowInstance.addNodes(newNode);
    // }, []);



    return (
        <div style={{'height':'100vh','width':'100vw'}} >
          <div className="flex justify-center p-2">
							<input
								type="file"
								className="text-sm text-gray-500 dark:text-gray-400"
								accept=".csv,.pdf,.xls,.xlsx"
								onChange={(e)=>{addfile()}}
							/>
						</div>
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

export const FlowGroup = ()=>{
	return (
		<ReactFlowProvider>
			<FlowGroupFn />
		</ReactFlowProvider>
	);
}