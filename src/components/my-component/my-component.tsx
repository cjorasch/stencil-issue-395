import { State, Component } from "@stencil/core";

@Component({
  tag: "my-component"
})
export class MyComponent {
  @State() private message: string;

  componentDidLoad() {
    setTimeout(() => {
      this.message = "Done";
    }, 2000);
  }

  render() {
    const content =
      (this.message && <ion-card>{this.message}</ion-card>) || "Loading";
      
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar>
            <ion-title>Test Page (see error in console)</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>{content}</ion-content>
      </ion-page>
    );
  }
}
