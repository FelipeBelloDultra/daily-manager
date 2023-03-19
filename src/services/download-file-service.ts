export class DownloadFile {
  private filename: string;
  private dataStr: string = "";

  constructor(filename: string) {
    this.filename = filename;
  }

  private createAnchorNode(filename: string): HTMLAnchorElement {
    const downloadAnchorNode = document.createElement("a");

    downloadAnchorNode.setAttribute("href", this.dataStr);
    downloadAnchorNode.setAttribute("download", filename);

    return downloadAnchorNode;
  }

  private download(filename: string): void {
    const downloadAnchorNode = this.createAnchorNode(filename);

    document.body.appendChild(downloadAnchorNode);

    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  public downloadJSON<T>(json: T): void {
    const jsonFileName = `${this.filename}.json`;
    this.dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(json));

    this.download(jsonFileName);
  }
}
