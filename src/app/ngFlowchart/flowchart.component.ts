import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

// todo: make internal to flowchart
import { IFlowchart } from '@models/flowchart';
import { NodeUtils, INode } from '@models/node';
import { ACTIONS } from './node/node.actions';
import * as circularJSON from 'circular-json';

@Component({
  selector: 'flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.scss']
})
export class FlowchartComponent{

  @Input() data: IFlowchart;

  // TODO: Is this redundant?
  @Output() select = new EventEmitter();

  copied: string;

  ngOnInit(){ }

  selectNode(node_index): void{
      //this.select.emit($event);
  }

  nodeAction($event, node_index): void{

    switch($event.action){
        case ACTIONS.SELECT:
          this.data.meta.selected_nodes = [ node_index ];  
          break;

        case ACTIONS.DELETE:
          // TODO: Add a delete function in NodeUtils / FlowchartUtils
          this.data.nodes.splice( node_index, 1 );
          break;

        case ACTIONS.COPY:
          console.log('copied node:', this.data.nodes[node_index]);
          this.copied = circularJSON.stringify(this.data.nodes[node_index]);
          break;

    }

  }

  isSelected(node_index: number): boolean{
    return this.data.meta.selected_nodes.indexOf(node_index) > -1;
  }

  addNode(): void{  this.data.nodes.push(NodeUtils.getNewNode());  }

  copyNode($event): void{
    const node = this.data.nodes[this.data.meta.selected_nodes[0]];
    if (node.type != 'start' && node.type != 'end'){
      console.log('copied node:', node);
      this.copied = circularJSON.stringify(node);
    }
  }

  pasteNode($event): void{
    if (this.copied){
      const newNode = circularJSON.parse(this.copied);
      newNode.position = {x:0, y:0};
      this.data.nodes.push(newNode);
      console.log('pasting node:', newNode);
    }
  }

}

