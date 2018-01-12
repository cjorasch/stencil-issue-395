import { Component } from "@stencil/core";

@Component({
  tag: "my-app",
  styleUrl: "my-app.scss"
})
export class MyApp {
  render() {
    return (
      <stencil-router>
        <stencil-route url="/" component="app-home" exact={true} />
        <stencil-route url="/test" component="my-component" />
      </stencil-router>
    );
  }
}
