import React, { Component } from 'react';
import { render } from 'react-dom';
import Graph from "react-graph-vis";
 
// need to import the vis network css in order to show tooltip

export function GraphLeagues() {
  const graph = {
    nodes: [
      { id: 'Node 1', label: "Node 1", title: "node 1 tootip text" ,  color: "#ffc107" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text", color: 'Green' }
    ],
    edges: [
      { from: 'Node 1', to: 2,label:'dddddd' },
      { from: 'Node 1', to: 3,label:'adasd' },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]
  };
 
  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#343c44"
    },
    height: "600px"
  };
 
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}
