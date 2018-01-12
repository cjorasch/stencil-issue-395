import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div>
        <stencil-route-link url='/test'>
          <button>
            Test page
          </button>
        </stencil-route-link>
        <p>After click on the Test Page, look at the console after 2 seconds to see the error.</p>
      </div>
    );
  }
}
