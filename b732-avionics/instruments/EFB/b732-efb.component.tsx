import { FSComponent, DisplayComponent, VNode } from 'msfssdk';
import './b732-efb.css';

export class EFBComponent extends DisplayComponent<any> {
  public render(): VNode {
    return (
      <div id="debugmouse" class='efb-component'>Hello World!</div>
    );
  }
}