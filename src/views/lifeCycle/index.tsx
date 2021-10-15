import { Component, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './index.scss';

// interface textType extends Element {
//   textContent: string;
// }

class LifeCycle extends Component<RouteComponentProps> {
  componentDidMount(): void {
    console.log('componentDidMount');
    const ele = document.createElement('script');
    ele.innerHTML =
      "addEventListener('message', function () {postMessage('some message');}, false)";
    ele.setAttribute('id', 'worker');
    ele.setAttribute('type', 'app/worker');
    console.log(ele);
    document.body.appendChild(ele);
    const workerEle = document.querySelector('#worker');
    const workerText = workerEle && workerEle.textContent;
    console.log('workerText', workerText);
    var blob = new Blob([workerText as BlobPart]);
    console.log('blob', blob);
    var url = window.URL.createObjectURL(blob);
    console.log('url', url);
    var worker = new Worker(url);
    worker.onmessage = (e) => {
      console.log(e);
    };
  }
  handleClick = (): void => {
    console.log('handleClick');
  };
  render(): ReactNode {
    return (
      <section className='connect-instance'>
        <h2>LifeCycle</h2>
        <label htmlFor="lifeCycle">this is label</label>
        <div className="life" id="lifeCycle" onClick={this.handleClick}>lifeCycle</div>
      </section>
    );
  }
}

export default LifeCycle;
